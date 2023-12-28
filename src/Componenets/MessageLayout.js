import React from "react";
import MessageList from "./messages/MessageList/MessageList";
import { Outlet } from "react-router-dom";
const MessageLayout = () => {
  return (
    <div className="messagesPage" style={{ display: "flex" }}>
      <MessageList />
      <Outlet />
    </div>
  );
};

export default MessageLayout;
