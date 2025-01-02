import { useState ,useEffect} from "react";
import { NavLink, useLocation, useOutletContext } from "react-router-dom";
import {  CiSquarePlus } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiClockwork } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import AddTodoForm from "../Forms/AddTodoForm/AddTodoForm";
 import { useDispatch, useSelector } from "react-redux";
import {  closeModal, openModal } from "../../redux/slices/modalSlice";
import ProfileModal from "../Modals/ProfileModal/ProfileModal";
import { ProjectDetailNavLinks } from "../../lib/data";
import "./header.css";
 import Timesheet from "../Forms/Timesheets/Timesheet";
import Notifications from "../Modals/Notifications/Notifications";
import AddProjectForm from "../Forms/AddProjectForm/AddProjectForm";
import useScreenSize from "../../hooks/useScreenSize";
import { FaBars } from "react-icons/fa6";
import Project_header from "../project_header/Project_header";
 



const Header = ({ title }) => {
  const { toggleSidebar, setToggleSidebar } =useOutletContext()
  console.log(toggleSidebar);
  console.log(setToggleSidebar);
  
  const { pathname } = useLocation();
  const {modalType,toggled} = useSelector( state => state.modal )
  const [ screenSize ] = useScreenSize()
  
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
   
  function toogleSidebar(){
    return modalType === "Navbar" && toggled === false && dispatch( openModal( { modalType: "Navbar", toggled: true } ) )
      
  }

 
  return (
    <>
    
    {/* hide header on small device if Navbar is toggled*/}
          <div className="header">
      {/* display toogle icon when device is smaller */}
        <FaBars
          className="toogleIcon"
          onClick={ () => { setToggleSidebar( true ); console.log( toggleSidebar); console.log( "clciked" ) } } />

        {/* if its in home page render this */ }
        { pathname === "/" ? (
      <div className="greeting">
        <p className="TodayTodo__wavingHand">{title}</p>
             <p className="date">{date.toDateString()}</p>
       </div>
         ) :<h3 style={{display:pathname.includes("projects") && "none"}}> {title}</h3>}
      
      {/* display Navlinks  if the routes or page is in project  */}
        { pathname.includes( "projects" ) ? (
         <Project_header />
        ) : null }
        
         <div className="left">

         {/* onclick open Add Task Form */}

      <span className="profile">
        <CiSquarePlus className="icon" onClick={()=> dispatch(openModal({modalType:"AddTask",toggled:true})) } />
            { modalType === "AddTask" && toggled === true && <AddTodoForm /> }
         <GiClockwork className="icon" onClick={()=> dispatch(openModal({modalType:"timesheet",toggled:true})) } />
         <div className="notification" onClick={() => dispatch(openModal({modalType:"notifications",toggled:true})) }>
          <IoIosNotificationsOutline    fontSize={25} />
            <span>12</span>
            </div>
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


 