import React from "react";
import "./header.css";
import { BiBell } from "react-icons/bi";
import { useLocation } from "react-router-dom";
const Header = ({ title }) => {
  const date = new Date();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="header">
      <div className="greeting">
        <p className="TodayTodo__wavingHand">{title}</p>
        {pathname === "/home" ? (
          <>
            <p className="date">{date.toDateString()}</p>
            <p className="time">{date.toLocaleTimeString()}</p>
          </>
        ) : null}
      </div>

      <div className="left">
        <div className="notification">
          <BiBell className="icon" fill="#ffa909" fontSize={28} />
          <span>2</span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
