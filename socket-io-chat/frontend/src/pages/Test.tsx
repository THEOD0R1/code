/* import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { SketchPicker } from "react-color";
import InputEmoji from "react-input-emoji";
import "../styles/ChatPage.css";

const socket = io("http://localhost:3000");

function ChatPage() {
  const navigate = useNavigate();
  const { room } = useParams();
  const [selectedColor, setSelectedColor] = useState("#000");

  const [message, setMessage] = useState({
    id: 0,
    user: JSON.parse(localStorage.getItem("username") || "") || {
      name: "User",
      color: "#000",
    },
    msg: "",
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [chat, setChat] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.emit("chat_list", (chats) => {
      setChats(chats);
    });

    socket.emit("select_room", room, (chat) => {
      setChat(chat);
    });

    socket.on("message_response", (chat) => {
      setChat(chat);
    });
  }, [room]);

  const handleRoomChange = (room) => {
    navigate(`/chat/${room}`);
  };

  const handleMessage = () => {
    if (message.msg.trim() !== "") {
      if (message.id !== 0) {
        socket.emit("edit_message", room, message, () => {
          setMessage({ ...message, msg: "" });
        });
      } else {
        socket.emit("message", room, { ...message, id: Date.now() });
        setMessage({ ...message, msg: "" });
      }
    }
  };

  const handleChange = (newColor) => {
    setSelectedColor(newColor.hex);
    const updatedUser = { ...message.user, color: newColor.hex };
    setMessage({ ...message, user: updatedUser });
    localStorage.setItem("username", JSON.stringify(updatedUser));
  };

  const handleColorPicker = (e) => {
    e.stopPropagation();
    setShowColorPicker(!showColorPicker);
  };

  const editMessage = (messageToEdit) => {
    setMessage(messageToEdit);
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
              {chat &&
                chat.messages.map((userMessage, index) => (
                  <p
                    className="chat-message"
                    key={index}
                    style={{ color: userMessage.user.color || "#000" }}
                  >
                    <strong>{userMessage.user.name}:</strong> {userMessage.msg}
                    <button
                      className="edit-button"
                      onClick={() => editMessage(userMessage)}
                    >
                      Edit
                    </button>
                  </p>
                ))}
            </div>
            <div className="input-container">
              <div></div>
              <div className="emoji-input">
                <InputEmoji
                  value={message.msg}
                  onChange={(value) => setMessage({ ...message, msg: value })}
                  cleanOnEnter
                  onEnter={handleMessage}
                  placeholder="Message..."
                />
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
 */