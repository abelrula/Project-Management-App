import  { useState,useEffect } from "react";
// import FilterTodo from "../FilterTodo";
import { NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { IoHelpCircle, IoReturnDownForwardSharp } from "react-icons/io5";
 import "./sidebar.css";
import menuLinks from "../../data/menuLinks";
import { FaBinoculars, FaProjectDiagram, FaRProject } from "react-icons/fa";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import { BsArrowDownCircle, BsEggFried } from "react-icons/bs";
import projectTypes from "../../data/projectTypes";
import { HiBars3CenterLeft } from "react-icons/hi2";
const Sidebar = () => {
  const [ projectTypes, setProjectTypes ] = useState( [] )
  const selectedObj = {
    color: "black",
    background: "#dda12a87",
    borderRadius:"5px"
  };
   useEffect( () =>{ 
                   async function  AssignedProjects(){
                    const res = await fetch( "http://localhost:3500/project" )
                    const data = await res.json()
                    setProjectTypes(data)
                   }
                  AssignedProjects()
                },[])
  return (
    <div className="side">
      <div className="brandIcon">
        <h1><FaRProject />Synergetic Projects</h1>
        <HiBars3CenterLeft
          className="icon" />
      </div>
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
              <label>{link.title}</label>
              {link.title === "Message" && <span>4</span> }
            </NavLink>
          ))}
        </div>
         <div className="projects">
         <h5 >recent projects  <IoReturnDownForwardSharp /></h5>
          {
            projectTypes.map( ( project, i ) => (
              <NavLink className="label"
                style={ ( { isActive } ) => ( isActive ? selectedObj : null ) }
                to={ `projects/${project.projectName.split("").filter(i=> i !== " ").join("")}` }>
                { project.projectName }
              </NavLink>
            ))
          }
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
