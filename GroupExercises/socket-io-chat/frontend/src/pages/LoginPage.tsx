import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "../styles/LoginPage.css";
import { User } from "../models/User";

const socket = io("http://localhost:3000");

function LoginPage() {
  const [name, setName] = useState<User>({
    name: "",
    color: "#000",
  });

  const [nameTaken, setNameTaken] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (name?.name.trim() === "") {
      console.log("Login attempt with empty name");
      alert("Name cannot be empty");
      return;
    }
    console.log(`Attempting to login with name: ${name}`);
    localStorage.setItem("username", JSON.stringify(name));

    socket.emit("join", name);
  };

  useEffect(() => {
    socket.on("duplicate", () => {
      console.log("Received duplicate event from server");
      setNameTaken(true);
    });

    socket.on("joined", (name: User) => {
      console.log("Received joined event from server");
      console.log(name);

      navigate("/rooms");
    });

    return () => {
      console.log("Cleaning up event listeners");
      // socket.off("duplicate");
      // socket.off("joined");
    };
  }, [name, navigate]);

  return (
    <div className="login-wrapper">
      <header>
        <h1>CHATEO</h1>
      </header>

      <div className="login-body">
        <div className="top-heading">
          <h3 className="login-txt-center">:::Hej:::</h3>
        </div>

        <div className="bottom-content">
          <div className="left-img">
            <img src="/src/image/img.png" alt="" />
          </div>

          <div className="login-form">
            <form className="login-txt-center" onSubmit={handleLogin}>
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                value={name?.name}
                onChange={(e) => setName({ ...name, name: e.target.value })}
              />
              {nameTaken && (
                <div className="name-already-taken">Name already taken</div>
              )}
              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>

          <div className="right-img">
            <img src="/src/image/img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
