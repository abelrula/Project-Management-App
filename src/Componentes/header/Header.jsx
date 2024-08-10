import { useState ,useEffect} from "react";
import "./header.css";
import { BiBell, BiCalendar, BiLogoOkRu, BiTask } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
   import img1 from "../../assets/worker2.jpg"
import { BsBarChartSteps } from "react-icons/bs";
import { IoCloseCircleSharp, IoDocumentTextOutline } from "react-icons/io5";
import { CiLocationOn, CiLogout, CiSquarePlus } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiClockwork, GiTimeSynchronization } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import AddTodoForm from "../Forms/AddTodoForm/AddTodoForm";
import Filter from "../Filter/Filter";
import { FaGraduationCap } from "react-icons/fa6";
import { MdDashboard, MdOutlineWorkOutline } from "react-icons/md";
import { VscIssues } from "react-icons/vsc";
 
const navLinks = [
  { name: "Dashboard", icon: <MdDashboard />, to: "." },
  { name:"Tasks", icon:<BiTask />,to:"tasks"},
  { name: "Documents", icon: <IoDocumentTextOutline />, to: "documents" },
  { name: "Gant Charts", icon: <BsBarChartSteps />, to: "gantChart" },
  { name: "Issues", icon: <VscIssues />, to: "issues" },
  { name: "Timesheets", icon: <GiTimeSynchronization />, to: "timesheets" }
]


const Header = ({ title }) => {
   
  const date = new Date();
  const { pathname } = useLocation();
  const [ openModal, setOpenModal ] = useState( {
    type: "",
    open:false
  } );
  const [ projectTypes, setProjectTypes ] = useState( [] )
  const selectedObj = {
    color: "white",
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
              { navLinks.map( ( link, i ) => (
                <NavLink className="link" style={({isActive})=>isActive ? selectedObj : null} to={link.to}>{link.name} { link.icon}
                </NavLink>      
              ))              
            }              
          </nav>
         </div>
        ) : null }
        
         
         {/* onclick open search modal */}
        { openModal.type === "search" && openModal.open === true && <Filter /> }
        <div className="left">
      <span className="profile">
        <CiSquarePlus className="icon" onClick={()=>setOpenModal( {
          type: "addTodo",
          open:true
        } ) } />
            { openModal.type === "addTodo" && openModal.open === true &&
              <div className="modal">
                <AddTodoForm setOpenModal={setOpenModal} />
               </div>

}
        <CiSearch className="icon" onClick={() =>{  setOpenModal( { type: "search", open:true } )}}/>
        <GiClockwork className="icon"/>
         <div className="notification">
          <IoIosNotificationsOutline    fontSize={25} />
          <span>12</span>
            </div>
             <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile"
            className="profile"
            onClick={() =>{  setOpenModal( { type: "profile", open:true } )}}
          />
        </span>
       </div>
    </div>
     
     
     
     
     
     
     
     
      {/* profile description  modal if profile is clicked */}
     
     
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
        {/* <div className="profile_description__middle">
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
          </div> */}
             <div className="userInfo">
            <p className="userInfo__list"><span><BiLogoOkRu /> Bio</span>The best and most beatiful things in the world cannot be ssen or even touched</p>
            <p className="userInfo__list"><span><CiLocationOn />Living in</span> <h6 className="">Austin ,Texas</h6></p>
            <p className="userInfo__list"><span><FaGraduationCap />Went to</span> <h6 className="">the uniceresity of texas</h6></p>
            <p className="userInfo__list"><span><MdOutlineWorkOutline />Works at</span><h6 className="userInfo__list"> Atlas Mesa Solar</h6></p>
            <button className="">Message</button>
        <p className="userInfo__list"><span><BiCalendar /></span>Joined June 17,2024</p>
        {/* <div className="flex flex-wrap gap-1 mt-4 mx-auto">
                {
                  imagesPostedByTheOwner.map((image,i)=>(
                    <img className="w-36 h-32 rounded-lg object-cover object-center" src={image} key={i} alt="posts" />
                  ))
                }
              </div> */}
            </div>
         </div>
      </div>)}
    </>
  );
};

export default Header;


 