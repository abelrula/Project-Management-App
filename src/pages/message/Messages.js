import React from "react";
import Header from "../../Componenets/Header/Header";
import MessagesConvoversation from "../../Componenets/messages/MessagesConvoversation/MessagesConvoversation";
import MessageList from "../../Componenets/messages/MessageList/MessageList";
import "./message.css";
import MessageLayout from "../../Componenets/MessageLayout";
const Messages = () => {
  return (
    <>
      {/* <Header title="Message" /> */}
      <div>
        <MessageLayout />
      </div>
    </>
  );
};

export default Messages;
