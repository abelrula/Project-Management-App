import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { BsToggle2Off } from "react-icons/bs";
import "./memeberInfo.css";
import { closeModal } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";

const images = [ "https://images.unsplash.com/photo-1525648934681-a85708fc999a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1610645011111-fe0dac6e70bc?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1723896816111-f9915f3665da?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ]

const profile = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const MemeberInfo = () =>
{
 
 const dispatch=useDispatch()
  return (
    <div className="contactInfo">
      <div className="contactInfo-header">
        <h1>Conatact info</h1>
        <IoCloseSharp
          fontSize={20}
          color="black"
          onClick={() =>dispatch(closeModal())}
          className="infoIcon"
        />
      </div>
      <div className="contactInfo_person">
        <img src={profile} alt="profile" />
        <div className="contactInfo_person_contact">
          <h4 className="contactInfo_person_contact-name">simon jorge</h4>
          <h5 className="contactInfo_person_contact-phone">+2519095526</h5>
        </div>
      </div>
      <div className="contactInfo-meet">
        <label>
          <IoIosCall fill="black" fontSize={27} className="infoIcon" />
          Voice
        </label>
        <label>
          <FaVideo fill="black" fontSize={27} className="infoIcon" />
          Video
        </label>
      </div>
      <div className="contactInfo_about">
        <h4>About</h4>
        <h5 className="contactInfo_about-description">
          only youcan do to your self is trust the process and the owner of our
          soul
        </h5>
      </div>
      <div className="contactInfo_mediaLinks">
        <div className="contactInfo_mediaLinks-info">
          <h4>Media links & Docs</h4>
          <h6 className="contactInfo_person-name">152</h6>
          <MdKeyboardDoubleArrowRight className="infoIcon" />
        </div>
        <div className="contactInfo_mediaLinks-files">
          { images.map( ( img, i ) => (
            <img src={ img } key={ i } alt="files" /> 
          ))
          }
         
        </div>
      </div>
      <div className="contactInfo_mute">
        <div>
          <IoMdNotifications fontSize={23} className="infoIcon" />
          <h5>Mute notification</h5>
        </div>
        <BsToggle2Off fontSize={23} className="infoIcon" />
      </div>
    </div>
  );
};

export default React.memo(MemeberInfo);
