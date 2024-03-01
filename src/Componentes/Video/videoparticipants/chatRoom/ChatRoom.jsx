import React, { useRef } from "react";
import "./chatRoom.css";
const ChatRoom = () => {
  const vidRef = useRef();
  return (
    <div className="videoComponent">
      <video ref={vidRef} src="https://youtu.be/UBWYGxwxYjE" type="video/mp4" />
    </div>
  );
};

export default ChatRoom;
