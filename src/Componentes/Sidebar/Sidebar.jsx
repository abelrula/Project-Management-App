import  { useState,useEffect } from "react";
// import FilterTodo from "../FilterTodo";
import { NavLink } from "react-router-dom";
import { IoIosPersonAdd, IoIosSettings } from "react-icons/io";
import { IoCloseOutline, IoHelpCircle, IoReturnDownForwardSharp } from "react-icons/io5";
import { HiBars3CenterLeft } from "react-icons/hi2";
import "./sidebar.css";
import { FaBars, FaRProject, FaTelegramPlane } from "react-icons/fa";
import { menuLinks } from "../../lib/data";
import { closeModal, openModal } from "../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdLibraryAdd } from "react-icons/md";
import useFetchData from "../../hooks/useFetchData";
import AddMemberForm from "../Forms/AddMemberForm/AddMemberForm";
import AddProjectForm from "../Forms/AddProjectForm/AddProjectForm";
import useScreenSize from "../../hooks/useScreenSize";
import { SiTruenas } from "react-icons/si";

   const selectedObj = {
    color: "black",
    background: "#dda12a87",
    borderRadius:"5px"
};
  
const Sidebar = ({toggleSidebar,setToggleSidebar}) => {
  
  const { modalType, toggled } = useSelector( state => state.modal )
  const dispatch = useDispatch()
  const { data: projectTypes } =useFetchData("http://localhost:3500/project")
  

  return (
    <>
     
     
      {/* sidebar navigation list */ }
  
        <div className={toggleSidebar ? "side open" :"side"}>
      
            {/* name of the app */ }
        <div className="brandIcon">
          <h1><FaRProject />Synergetic Projects</h1>
          {/* displays in small devices to toggle sidebar */}
            <FaBars className="toogleIcon" onClick={ () =>setToggleSidebar(false) }  />
      </div>
     
        {/* routes to pages */ }
        <div className="navigationLinks">
        <div className="navigationTopLinks">
          {menuLinks.map((link, i) => (
            <NavLink
              style={({ isActive }) => (isActive ? selectedObj : null)}
              to={link.to}
              className="link"
              key={ i }
              onClick={()=>setToggleSidebar(false)}
            >
              { link.icon }
             {link.title}
              {link.title === "Message" && <span>4</span> }
            </NavLink>
          ))}
        </div>
         <div className="projects">
         <h5 >recent projects  <IoReturnDownForwardSharp /></h5>
      
      {/* list of projects that are available */}
            {
            projectTypes.map( ( project, i ) => (
              <NavLink className="label"
                key={i}
                style={ ( { isActive } ) => ( isActive ? selectedObj : null ) }
                // to={ `projects/${project.projectName.split("").filter(i=> i !== " ").join("")}` }
              onClick={()=>setToggleSidebar(false)}
              to={ `projects/${project.id}` }
              >
                { project.projectName }
              </NavLink>
            ))
          }
        </div>
      
        <button onClick={ () => dispatch( openModal( { modalType: "AddProject", toggled: true } ) ) } >Add Project
          <MdLibraryAdd className="icon" />
        </button>
          <button onClick={ () => dispatch( openModal( { modalType: "InviteMember", toggled: true } ) ) } ><IoIosPersonAdd className="icon"/>Invite member <FaTelegramPlane className="icon" /></button>
            
        <div className="navigationTBottomLinks">
          <NavLink 
           to="settings"
            style={({ isActive }) => (isActive ? selectedObj : null)}
              className="link"
             >
            <IoIosSettings className="icon" />
              <label>Settings</label>

          </NavLink>
          <NavLink 
          to="Help"
            style={({ isActive }) => (isActive ? selectedObj : null)}
              className="link"
              >
            <IoHelpCircle className="icon" />
              <label>Help</label>
          </NavLink>
        </div>
       
      </div>
        </div>
     
      {/* onClick on sidebar  list then render a modal componenet */ }
      { 
     modalType === "InviteMember" && toggled === true && <AddMemberForm  />}
{ 
     modalType === "AddProject" && toggled === true && <AddProjectForm  />}
    </>
  );
};

export default Sidebar;
