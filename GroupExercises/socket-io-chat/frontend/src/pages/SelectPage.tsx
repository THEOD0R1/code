import { useNavigate } from "react-router-dom";
import "../styles/SelectPage.css";
// import { io } from "socket.io-client";
// import { useEffect, useState } from "react";
// import { Chat } from "../models/Chat";

// const socket = io("http://localhost:3000");

function SelectPage() {
  const navigate = useNavigate();
  // const [chats, setChats] = useState<Chat[]>();
  const handleRoomChange = (newRoom: string) => {
    console.log(`Switching to room: ${newRoom}`);
    navigate(`/chat/${newRoom}`);
  };

  // useEffect(() => {
  //   socket.on("message_list", (chats: Chat[]) => {
  //     setChats(chats);
  //   });
  // }, []);
  return (
    <div className="select-wrapper">
      <header>
        <h1>CHATEO</h1>
      </header>

      <div className="select-body">
        <div className="top-heading">
          <h3 className="select-txt-center">:::Rum:::</h3>
        </div>

        <div className="select-content">
          <div className="upper-left-img">
            <img src="/src/image/img01.png" alt="" />
          </div>

          <div className="upper-right-img">
            <img src="/src/image/img02.png" alt="" />
          </div>

          <div className="left-select-button">
            <button
              className="rockroll-btn"
              onClick={() => handleRoomChange("Rock&Roll")}
            >
              Rock&Roll
            </button>
            <button className="pop-btn" onClick={() => handleRoomChange("POP")}>
              POP
            </button>
          </div>

          <div className="right-select-button">
            <button
              className="hiphop-btn"
              onClick={() => handleRoomChange("Hip Hop")}
            >
              Hip Hop
            </button>
            <button
              className="jazz-btn"
              onClick={() => handleRoomChange("Jazz")}
            >
              Jazz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPage;
