import React, { useEffect, useState } from "react";
import "./messageList.css";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const MessageList = () => {
  const [ messages, setMessages ] = useState( [] );
  
  const selectedObj = {
    color: "black",
    background: "#b3960070",
  };
  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch("http://localhost:3500/conversations");
      const data = await res.json();
      setMessages(data);
    }
    fetchMessages();
  }, []);
  return (
    <div className="messagelist">
      <NavLink to="." path="relative" className="messageListHeader">
        Chats
      </NavLink>
      <div className="searchArea">
        <BsSearch />
        <input type="text" />
      </div>
      <hr></hr>
      <div className="Allmessages">
        {messages.map((message, i) => (
          <NavLink
            style={({ isActive }) => (isActive ? selectedObj : null)}
            to={`/message/${message.id}`}
            className="IndivdualMesssge"
            key={i}
          >
            <img src={message.profile} alt="profile" />
            <div className="IndivdualMesssge__info">
              <div className="IndivdualMesssge__info_top">
                <p className="IndivdualMesssge__info-name">{message.name}</p>
                <p className="IndivdualMesssge__info-sentTime"> at 03:23pm</p>
              </div>
              <p className="IndivdualMesssge__info-message">
                hey where have...
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
