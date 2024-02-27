import React, { Fragment, memo, useEffect, useState } from "react";
import "./messagesConversion.css";
import { FaVideo } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { useParams } from "react-router-dom";
 import { GrAttachment } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
 const MessagesConvoversation = memo(() => {
  const [messages, setMessages] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
   useEffect(() => {
    async function fetchMessages() {
      const res = await fetch("http://localhost:3500/conversations/" + id);
      console.log(res);
      const data = await res.json();
      setMessages(data);
      console.log(data);
    }
    fetchMessages();
  }, [ id ] );
  
  console.log(messages);
  return (
    <div className="messageConvo">
      <div className="MessagesConvoversation">
        <div className="MessagesConvoversation__header">
          <div
            className="MessagesConvoversation__header__sender"
            onClick={()=>dispatch(sideOpenClose())}
          >
            <img src={messages?.profile} alt="profile" />
            <div className="MessagesConvoversation__header__sender-stat">
              <p className="MessagesConvoversation__header__sender-stat-name">
                {messages?.name}
              </p>
              <span className="MessagesConvoversation__header__sender-stat-activeStatus"></span>
            </div>
          </div>
          <div className="MessagesConvoversation__header__right">
            <div className="MessagesConvoversation__header__right-audioCall">
              <IoIosCall fill="black" fontSize={19} className="infoIcon" />
            </div>
            <div className="MessagesConvoversation__header__right-videoCall">
              <FaVideo fill="black" fontSize={19} className="infoIcon" />
            </div>
          </div>
        </div>
        <div className="MessagesConvoversation__list element-with-scroll">
          {messages?.message?.map((item, i) => (
            <Fragment key={i}>
              <div className="MessagesConvoversation__list__sender">
                <p className="MessagesConvoversation__list__sender-message">
                  {item.sender}
                </p>
                <p className="MessagesConvoversation__list__sender-timeSent">
                  at 12:24 pm
                </p>
              </div>
              <div className="MessagesConvoversation__list__reciever">
                <p className="MessagesConvoversation__list__reciever-message">
                  {item.reciever}
                </p>
                <p className="MessagesConvoversation__list__reciever-timeSent">
                  at 12:24 pm
                </p>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="MessagesConvoversation__TypingBox">
          <div>
            <GrAttachment fontSize={24} className="infoIcon" />
            <textarea type="text" placeholder="hy"></textarea>
            <BsEmojiSmile fontSize={24} className="infoIcon" />
          </div>
          <button>send</button>
        </div>
      </div>
     </div>
  );
});
export default MessagesConvoversation;
