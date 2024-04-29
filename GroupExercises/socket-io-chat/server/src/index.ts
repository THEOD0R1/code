import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import { User } from "./models/User";
import { Message } from "./models/Message";
import { Chat } from "./models/Chat";

const app = express();
app.use(cors());

const users: User[] = [];

let chats: Chat[] = [
  { name: "Rock&Roll", messages: [] },
  { name: "POP", messages: [] },
  { name: "Hip Hop", messages: [] },
  { name: "Jazz", messages: [] },
];

const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`A user connected:  ${socket.id}`);

  socket.on("join", (userTestName: User) => {
    const checkUserName = users.find((user) => user.name === userTestName.name);
    console.log(userTestName);
    if (checkUserName) {
      socket.emit("duplicate");
    } else {
      socket.emit("joined", userTestName);
      users.push(userTestName);
    }
  });

  socket.on("select_room", (room, callback) => {
    socket.rooms.forEach((room) => {
      console.log("Leaving room: ", room);

      socket.leave(room);
    });

    socket.join(room);
    console.log(chats.find((chat) => chat.name === room));
    console.log(chats);
    callback(chats.find((chat) => chat.name === room));
    console.log("joined room", room);
  });

  socket.on("message", (room, message: Message) => {
    const chat = chats.find((chat) => room === chat.name);
    chat?.messages.push(message);

    console.log("New message", chat);

    io.to(room).emit("message_response", chat);
  });

  socket.on("edit_message", (room, editedMessage, callback) => {
    const chat = chats.find((chat) => room === chat.name);

    console.log("Found chat:", chat);
    //HÄR SKA DET VARA LOCALSTORAGE
    const messageToEdit = chat?.messages.find(
      (message) => message.id === editedMessage.id
    );

    if (messageToEdit) {
      messageToEdit.msg = editedMessage.msg;
    }
    io.to(room).emit("message_response", chat);

    console.log("Editing", chat);

    callback(chat);
  });

  socket.on("chat_list", (callback) => {
    callback(
      chats.map((chat) => {
        return chat;
      })
    );
  });
});

httpServer
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  })
  .on("error", (err: Error) => {
    console.error(`Server error: ${err.message}`);
  });
