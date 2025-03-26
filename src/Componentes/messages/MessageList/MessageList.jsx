import React, { useEffect, useState } from "react";
import "./messageList.css";
import { NavLink, useOutletContext } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
const MessageList = () => {
  const [ messages, setMessages ] = useState( [] );
    const { toggleSidebar, setToggleSidebar } =useOutletContext()
  
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
      <header >
        <FaBars
        className="toogleIcon"
        onClick={ () => { setToggleSidebar( true ); console.log( toggleSidebar ); console.log( "clciked" ) } } />
      <NavLink to="." path="relative" className="messageListHeader">
        Chats
      </NavLink>
      </header>
      <div className="searchArea">
        <BsSearch />
        <input type="text" placeholder="search  " />
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
                 <p className="IndivdualMesssge__info-name">{message.name}</p>
               <p className="IndivdualMesssge__info-message">
                hey where...
              </p>
                <p className="IndivdualMesssge__info-sentTime"> at 03:23pm</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
