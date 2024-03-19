import  { useState } from "react";
// import FilterTodo from "../FilterTodo";
import { NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { IoHelpCircle } from "react-icons/io5";
 import "./sidebar.css";
import menuLinks from "../../data/menuLinks";
const Sidebar = () => {
  const selectedObj = {
    color: "black",
    background: "#545351",
  };

  return (
    <div className="side">
      <div className="navigationLinks">
        <div className="navigationTopLinks">
          {menuLinks.map((link, i) => (
            <NavLink
              style={({ isActive }) => (isActive ? selectedObj : null)}
              to={link.to}
              className="sideWord"
              key={i}
            >
              { link.icon }
              {link.title === "Message" && <span>4</span> }
              <label>{link.title}</label>
            </NavLink>
          ))}
        </div>
        <div className="navigationTBottomLinks">
          <NavLink 
           to="settings"
            style={({ isActive }) => (isActive ? selectedObj : null)}
              className="sideWord"
             >
            <IoIosSettings className="icon" />
              <label>Settings</label>

          </NavLink>
          <NavLink 
          to="Help"
            style={({ isActive }) => (isActive ? selectedObj : null)}
              className="sideWord"
              >
            <IoHelpCircle className="icon" />
              <label>Help</label>

          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
