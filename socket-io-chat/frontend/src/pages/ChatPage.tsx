import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Message } from "../models/Message";
import { Chat } from "../models/Chat";
import { SketchPicker } from "react-color";
import InputEmoji from "react-input-emoji";
import "../styles/ChatPage.css";

const socket = io("http://localhost:3000");

function ChatPage() {
  const navigate = useNavigate();
  const { room } = useParams();
  const [selectedColor, setSelectedColor] = useState<string>("#000");

  const [message, setMessage] = useState<Message>({
    id: 0,
    user: JSON.parse(localStorage.getItem("username") || "") || {
      name: "User",
      color: "#000",
    },
    msg: "",
  });
  const [editedText, setEditedText] = useState<Message>();
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const [chat, setChat] = useState<Chat>();
  const [chats, setChats] = useState<Chat[]>([]);

  const [editing, setEditing] = useState<boolean>(false);
  const [trueIndex, setTrueIndex] = useState<number>();

  useEffect(() => {
    socket.emit("chat_list", (chats: Chat[]) => {
      setChats(chats);
    });

    socket.emit("select_room", room, (chat: Chat) => {
      setChat(chat);
      console.log(chat);
      console.log(room);
    });

    socket.on("message_response", (chat: Chat) => {
      setChat(chat);
    });
  }, [room]);

  const handleRoomChange = (room: string) => {
    console.log(`Changing room to: ${room}`);

    navigate(`/chat/${room}`);
    setEditing(false);
  };

  const handleMessage = () => {
    if (editing) {
      socket.emit("edit_message", room, editedText, () => {
        setMessage((prevMessage) => ({ ...prevMessage, msg: "" }));

        setEditing(false);
      });
    } else {
      socket.emit("message", room, { ...message, id: Date.now() });

      setMessage((prevMessage) => ({ ...prevMessage, msg: "" }));
    }
  };

  const handleChange = (newColor: any) => {
    setSelectedColor(newColor.hex);
    const updatedUser = { ...message.user, color: newColor.hex };
    setMessage({ ...message, user: updatedUser });
    localStorage.setItem("username", JSON.stringify(updatedUser));
  };

  const handleColorPicker = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div className="chat-wrapper">
      <header>
        <h1>CHATEO</h1>
      </header>

      <div className="chat-body">
        <div className="top-heading">
          <h3 className="txt-center">:::Prata:::Sjunga:::</h3>
        </div>

        <div className="chat-content">
          <div className="sidebar">
            {chats.map((room) => (
              <button
                key={room.name}
                onClick={() => handleRoomChange(room.name)}
              >
                {room.name}
              </button>
            ))}
          </div>
          <div className="chat-container">
            <h2>{room}</h2>
            <div id="chat-box">
              {chat?.messages.map((userMessage, index) => (
                <p
                  className={
                    userMessage.user.name === message.user.name
                      ? "chat-message"
                      : "chat-messag-not-me"
                  }
                  key={index}
                  style={{ color: userMessage.user?.color || "#000" }}
                >
                  <img
                    src="/src/image/jenni.png"
                    alt=""
                    className="small-image"
                  />
                  <strong>{userMessage.user?.name}:</strong> {userMessage.msg}
                  {userMessage.user.name === message.user.name && (
                    <button
                      className="edit-button"
                      onClick={() => {
                        setEditing(true);
                        setTrueIndex(index);
                      }}
                    >
                      Edit
                    </button>
                  )}
                  {editing &&
                    userMessage.user.name === message.user.name &&
                    trueIndex === index && (
                      <InputEmoji
                        value={userMessage?.msg}
                        onChange={(value: string) =>
                          setEditedText({ ...userMessage, msg: value })
                        }
                        cleanOnEnter
                        onEnter={() => {
                          handleMessage();
                        }}
                        placeholder="Message..."
                      />
                    )}
                </p>
              ))}
            </div>
            <div className="input-container">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleMessage();
                }}
              ></div>

              <div className="emoji-input">
                {!editing && (
                  <InputEmoji
                    value={message?.msg}
                    onChange={(value: string) =>
                      setMessage({ ...message, msg: value })
                    }
                    cleanOnEnter
                    onEnter={handleMessage}
                    placeholder="Message..."
                  />
                )}
              </div>

              <button
                id="color-picker-button"
                type="button"
                className="color-picker-button"
                onClick={handleColorPicker}
              ></button>

              {showColorPicker && (
                <div className="color-picker-wrapper">
                  <SketchPicker color={selectedColor} onChange={handleChange} />
                  <button onClick={handleColorPicker}>Save</button>
                </div>
              )}

              <button id="send-button" onClick={handleMessage}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ fontSize: "24px" }}
                />
              </button>
            </div>
          </div>
        </div>
        <footer> </footer>
      </div>
    </div>
  );
}

export default ChatPage;