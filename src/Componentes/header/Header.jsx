import { useState ,useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";
import {  CiSquarePlus } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiClockwork } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import AddTodoForm from "../Forms/AddTodoForm/AddTodoForm";
 import { useDispatch, useSelector } from "react-redux";
import {  openModal } from "../../redux/slices/modalSlice";
import ProfileModal from "../Modals/ProfileModal/ProfileModal";
import { ProjectDetailNavLinks } from "../../lib/data";
import "./header.css";
 import Timesheet from "../Forms/Timesheets/Timesheet";
import Notifications from "../Modals/Notifications/Notifications";
import AddProjectForm from "../Forms/AddProjectForm/AddProjectForm";
 



const Header = ({ title }) => {
   
  const { pathname } = useLocation();
  const {modalType,toggled} = useSelector( state => state.modal )
  const dispatch = useDispatch()
  
  const date = new Date();
  const [ projectTypes, setProjectTypes ] = useState( [] )
  const selectedObj = {
    color: "white",
    background: "rgb(221 161 42 / 86%)",
    borderRadius:"5px"
  };
  
    useEffect( () =>{ 
    async function  AssignedProjects(){
                    const res = await fetch( "http://localhost:3500/project" )
                    const data = await res.json()
                    setProjectTypes(data)
                   }
                  AssignedProjects()

    }, [] )
   

  return (
    <>
      <div className="header">
       {/* if its in home page render this */}
        { pathname === "/" ? (
      <div className="greeting">
        <p className="TodayTodo__wavingHand">{title}</p>
             <p className="date">{date.toDateString()}</p>
       </div>
         ) :<h3 style={{display:pathname.includes("projects") && "none"}}> {title}</h3>}
        {pathname.includes("projects") ?(
      // display Navlinks  if the routes or page is in project 
          <div className="Overview_header">
          <div className="Overview_header-ProjectName">
             <h1>daniels apartement </h1>
             <span>open details</span>
            </div> 
           <nav className="Overview_header-links" >
              { ProjectDetailNavLinks.map( ( link, i ) => (
                <NavLink  end className="link" style={({isActive})=>isActive ? selectedObj : null} to={link.to}>{link.name} { link.icon}
                </NavLink>      
              ))              
            }              
          </nav>
         </div>
        ) : null }
        
         <div className="left">

         {/* onclick open Add Task Form */}

      <span className="profile">
        <CiSquarePlus className="icon" onClick={()=> dispatch(openModal({modalType:"AddTask",toggled:true})) } />
            { modalType === "AddTask" && toggled === true && <AddTodoForm /> }
        <CiSearch className="icon" onClick={() => dispatch(openModal({modalType:"search",toggled:true})) }/>
         <GiClockwork className="icon" onClick={()=> dispatch(openModal({modalType:"timesheet",toggled:true})) } />
         <div className="notification" onClick={() => dispatch(openModal({modalType:"notifications",toggled:true})) }>
          <IoIosNotificationsOutline    fontSize={25} />
            <span>12</span>
            </div>
            <h3 onClick={()=> dispatch(openModal({modalType:"AddProject",toggled:true})) }>Add Project</h3>
             <img
             src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile"
            className="profile"
            onClick={() => dispatch(openModal({modalType:"profile",toggled:true}))}
          />
        </span>
       </div>
    </div>
     
     
      {/* profile description  modal if profile is clicked */}
     
     
      { modalType === "profile" && toggled === true &&
          <ProfileModal />
      }
       { modalType === "timesheet" && toggled === true &&
          <Timesheet  />
      }
       { modalType === "notifications" && toggled === true &&
          <Notifications />
      }
      { modalType === "AddProject" && toggled === true &&
          <AddProjectForm />
      }
    </>
  );
};

export default Header;


 