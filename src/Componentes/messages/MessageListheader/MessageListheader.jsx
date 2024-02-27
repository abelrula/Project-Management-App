import React from "react";
import "./MessageListheader.css";
import image1 from "../../../assets/personMessaging.jpg";
const MessageListheader = () => {
  return (
    <div className="messagepage">
      <h1> Click the side Notifiaction </h1>
      <img src={image1} alt="background" />
    </div>
  );
};

export default MessageListheader;
