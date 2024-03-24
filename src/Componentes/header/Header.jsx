import { useState } from "react";
import "./header.css";
import { BiBell } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
   import img1 from "../../assets/worker2.jpg"
import { BsPersonFillCheck, BsPersonFillGear } from "react-icons/bs";
import { IoCloseCircleSharp } from "react-icons/io5";
const Header = ({ title }) => {
  const date = new Date();
  const { pathname } = useLocation();
  const [openModal, setpenModal] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  console.log(pathname);
  return (
    <>
      <div className="header">
        {pathname === "/" ? (
      <div className="greeting">
        <p className="TodayTodo__wavingHand">{title}</p>
             <p className="date">{date.toDateString()}</p>
       </div>
         ) : null}
        { pathname === "/projects/0" ? (
          <nav className="Overview_header" >
              <NavLink className="link">Tasks</NavLink>                     
              <NavLink className="link">MileStones</NavLink>                     
              <NavLink className="link">Documents</NavLink>                     
              <NavLink className="link">Task Lists</NavLink>                     
          </nav>
         ) : null}
      <div className="left">
        <div className="notification">
          <BiBell className="icon" fill="#ffa909" fontSize={23} />
          <span>12</span>
        </div>
        <div className="header__profile">
          <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile"
            onClick={() => setShowProfileInfo((prev) => !prev)}
          />
          {showProfileInfo && (
            <div className="header__profile-description">
              <p  onClick={() => setpenModal(true)}>
                Change profile <BsPersonFillGear />
              </p>
              <p  onClick={() => setpenModal(true)}>
                View profile <BsPersonFillCheck />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
      {openModal && (<div className="modal">
        <div className="profile_description">
           <IoCloseCircleSharp
          onClick={ () => setpenModal( false ) }
            className="closeIcon" />
          <div className="profile_description_right">
            <img src={ img1 } alt="profile" />
              <p>Simon panda</p>
              <span>+2519095445</span>
          </div>
        <div className="profile_description_left">
            <div className="profile_description_left-bio">
              <label>Bio :-</label>
              <p>livng with out pain is not the fact that we are alive</p>
         </div>
            <div className="profile_description_left-totalFriends">
              <label>Total friends :-</label>
              <span>120</span>
         </div>
          <div className="profile_description_left-AccomplishedProject">
              <label>Accomplished projects :- </label>
              <span>200</span>
            </div>
              <div className="profile_description_left-projectsIncluded">
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


 