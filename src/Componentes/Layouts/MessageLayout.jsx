import React from "react";
import { Outlet } from "react-router-dom";
import MessageList from "../messages/MessageList/MessageList";
 const MessageLayout = () => {
  return (
    <div className="messagesPage" style={{ display: "flex",marginLeft:"0px" }}>
      <MessageList />
      <Outlet />
    </div>
  );
};

export default MessageLayout;
