import React, { Fragment, useEffect, useState } from "react";
import "./videoparticipants.css";
import { BsCheck2, BsEmojiSmile, BsFillMicMuteFill } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FaVideoSlash } from "react-icons/fa6";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const Videoparticipants = () => {
  const [messages, setMessages] = useState([]);
  const [memebersParticpants, setMemebersParticpants] = useState([]);
  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch("http://localhost:3500/conversations/" + 2);
      console.log(res);
      const data = await res.json();
      setMessages(data);
      console.log(data);
    }
    fetchMessages();
  }, []);
  useEffect(() => {
    async function fetchParticpants() {
      const res = await fetch("http://localhost:3500/members");
      const data = await res.json();
      setMemebersParticpants(data);
    }
    fetchParticpants();
  }, []);

  return (
    <>
      <div className="videoConference">
        <div className="videoConference-main">
          <div className="videoConference__header">
            <div className="videoConference__header-totalMembers">
              <p>trend participants</p>
              <span>20</span>
            </div>
            <p>Add user to call</p>
          </div>
          <div className="videoConference__JoinedMemberes">
            <MdNavigateBefore color="black" />
            {memebersParticpants.map((memeber, i) => (
              <div className="videoConference__JoinedMemberes-memeber" key={i}>
                <img src={memeber.profile} alt="user" />
                <p>{memeber.name}</p>
              </div>
            ))}
            <MdNavigateNext color="black" />
          </div>
          <div className="videoConference__caller">
            <img src={memebersParticpants[1]?.profile} alt="user" />
          </div>
        </div>
        <div className="videoConference__side">
          <div className="videoConference__particpants__info">
            <h2>Particpants</h2>
            <div className="videoConference__particpants__info-memebers element-with-scroll">
              {memebersParticpants.map((memeber,i) => (
                <div className="videoConference__particpants__info-memeber" key={i}>
                  <div>
                    <img src={memeber.profile} alt="user" />
                    <p className="videoConference__particpants__info-memeber-name">
                      {memeber.name}
                    </p>
                  </div>
                  <div>
                    <BsFillMicMuteFill fontSize={20} color="silver" />
                    <FaVideoSlash fontSize={20} color="silver" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr></hr>
          <div className="videoConference__meetingTaskList">
            <h3>Meeting Task list </h3>
            <ul className="element-with-scroll">
              <li>
                <BsCheck2 />
                operating
              </li>
              <li>
                <BsCheck2 />
                performance evalutaion of the party
              </li>
              <li>
                <BsCheck2 />
                internal party consolidation
              </li>
              <li>
                <BsCheck2 />
                internal party consolidation
              </li>
              <li>
                <BsCheck2 />
                performance evalutaion of the party
              </li>
              <li>
                <BsCheck2 />
                internal party consolidation
              </li>
              <li>
                <BsCheck2 />
                internal party consolidation
              </li>
            </ul>
          </div>
          <hr></hr>

          <div className="videoConference__chatRoom">
            <h4>Chat Room</h4>
            <div className="videoConference__chatRoom__allMessages element-with-scroll">
              {messages?.message?.map((item, i) => (
                <Fragment key={i}>
                  <div className="videoConference__chatRoom__sender" key={i}>
                    <p className="videoConference__chatRoom__sender-message">
                      {item.sender}
                    </p>
                    <p className="videoConference__chatRoom__sender-timeSent">
                      at 12:24 pm
                    </p>
                  </div>
                  <div className="videoConference__chatRoom__reciever">
                    <p className="videoConference__chatRoom__reciever-message">
                      {item.reciever}
                    </p>
                    <p className="videoConference__chatRoom__reciever-timeSent">
                      at 12:24 pm
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="videoConference__chatRoom__TypingBox">
            <div>
              <GrAttachment fontSize={20} className="infoIcon" color="silver" />
              <textarea type="text" placeholder="hy"></textarea>
              <BsEmojiSmile fontSize={20} className="infoIcon" color="silver" />
            </div>
            <button>send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videoparticipants;
