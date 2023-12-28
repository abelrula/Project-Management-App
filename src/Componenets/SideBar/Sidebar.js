import React, { useState } from "react";
// import FilterTodo from "../FilterTodo";
import { CgFormatJustify } from "react-icons/cg";
import { CgTrending } from "react-icons/cg";
import { BiBell, BiMessage, BiSolidMessage, BiVideo } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import { BiStats } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import { IoHelpCircle } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import "./sideBar.css";
import menuLinks from "../../data/menuLinks";
const Sidebar = ({ filterType, setFilterType }) => {
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
              {link.icon}
              <label>{link.title}</label>
            </NavLink>
          ))}
        </div>
        <div className="navigationTBottomLinks">
          <NavLink>
            <IoIosSettings className="icon" />
          </NavLink>
          <NavLink>
            <IoHelpCircle className="icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
