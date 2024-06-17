import { useState ,useEffect} from "react";
import "./header.css";
import { BiBell } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
   import img1 from "../../assets/worker2.jpg"
import { BsPersonFillCheck, BsPersonFillGear } from "react-icons/bs";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CiLogout, CiSquarePlus } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiClockwork } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import AddTodoForm from "../Forms/AddTodoForm/AddTodoForm";


const Header = ({ title }) => {
  const date = new Date();
  const { pathname } = useLocation();
  const [ openModal, setOpenModal ] = useState( {
    type: "",
    open:false
  } );
   const [ projectTypes, setProjectTypes ] = useState( [] )
    useEffect( () =>{ 
    async function  AssignedProjects(){
                    const res = await fetch( "http://localhost:3500/project" )
                    const data = await res.json()
                    setProjectTypes(data)
                   }
                  AssignedProjects()

                },[])
  return (
    <>
      <div className="header">
        {pathname === "/" ? (
      <div className="greeting">
        <p className="TodayTodo__wavingHand">{title}</p>
             <p className="date">{date.toDateString()}</p>
       </div>
         ) :<h3> {title}</h3>}
        {pathname.includes("project") ?(
         <div className="Overview_header">
          <div className="Overview_header-ProjectName">
             <h1>daniels apartement </h1>
             <span>open details</span>
          </div>
           <nav className="Overview_header-links" >
              <NavLink to="." className="link">Dashboard</NavLink>                     
              <NavLink to="tasks" className="link">Tasks</NavLink>                     
              <NavLink to="documents" className="link">Documents</NavLink>                     
              <NavLink to="gantChart" className="link">Gant Charts</NavLink>                     
              <NavLink to="issues" className="link">Issues</NavLink>                     
               <NavLink to="timesheets" className="link">Timesheets</NavLink>                     
          </nav>
         </div>
         ) : null}
      <div className="left">
      <span className="profile">
        <CiSquarePlus className="icon" onClick={()=>setOpenModal( {
          type: "addTodo",
          open:true
        } ) } />
            { openModal.type === "addTodo" && openModal.open === true &&
              <div className="modal">
                <AddTodoForm />
               </div>

}
        <CiSearch className="icon"/>
        <GiClockwork className="icon"/>
         <div className="notification">
          <IoIosNotificationsOutline    fontSize={25} />
          <span>12</span>
        </div>
        </span>
        <span className="profile">
        <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile"
            className="profile"
            onClick={() =>{  setOpenModal( { type: "profile", open:true } )}}
          />
          <p>abel zewdu</p>
        </span>
       </div>
    </div>
      { openModal.type === "profile" && openModal.open === true &&
        ( <div className="modal">
        <div className="profile_description">
          <div className="profile_description-header">
          <span className="signout"><CiLogout /> sign out </span>
           <IoCloseCircleSharp
              onClick={ () => setOpenModal({type:"",open:false})}
               className="closeIcon" />
          </div>
          <div className="profile_description_right">
            <img src={ img1 } alt="profile" />
              <span>
               <p>Simon panda</p>
                <p>abelrula716@gmail.com</p>
                <p>Synergetic Projects User-iD : 14896542</p>
                <p>Organization-iD : 14896542</p>
                <p>My account : my portal</p>
               </span>
          </div>
        <div className="profile_description__middle">
            <div className="profile_description__middle-item">
              <label>Bio :</label>
              <p>livng with out pain is not the fact that we are alive</p>
         </div>
            <div className="profile_description__middle-item">
              <label>Total friends :</label>
              <span>120</span>
         </div>
          <div className="profile_description__middle-item">
              <label>Accomplished Tasks :- </label>
              <span>200</span>
            </div>
              <div className="profile_description__middle-item">
              <label>Included Projects </label>
                <ul>
              <li>Operations</li>
              <li>data managements</li>
              <li>Networking</li>
              </ul>
         </div>
         </div>
         </div>
      </div>)}
    </>
  );
};

export default Header;


 