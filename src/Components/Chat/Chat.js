import React, { useEffect, useState } from "react";
import "./Chat.css";
import queryString from "query-string";
import io from "socket.io-client";
import Infobar from "../InfoBar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;
export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(messages)

  const ENDPOINT = "https://backend-chat-app-123.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io("https://backend-chat-app-123.herokuapp.com/");
    setName(name);
    setRoom(room);

    socket.emit("join", { name: name, room: room }, () => {
      return () => {
        socket.emit("disconnect");
        socket.off();
      };
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  //function for sending messages


const sendMessage= (event) => {
  event.preventDefault();
  if (message){
    socket.emit('sendMessage',message,()=> setMessage(''))
  }
  console.log(message,messages)
}



  return (
    <div className="outerContainer">
      <div className="container">
        <Infobar room={room}/>
        <Messages name={name} messages={messages} message={message} setMessage={setMessage} sendMessage={sendMessage} />
        <Input  message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  );
}
