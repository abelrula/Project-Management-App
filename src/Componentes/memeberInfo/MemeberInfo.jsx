import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import profile from "../../assets/worker3.jpg";
import profile2 from "../../assets/worker2.jpg";
import profile3 from "../../assets/worker1.jpg";
import profile4 from "../../assets/worker4.jpg";
import { BsToggle2Off } from "react-icons/bs";
import "./memeberInfo.css";
const MemeberInfo = ({ setShowInfo }) => {
  return (
    <div className="contactInfo">
      <div className="contactInfo-header">
        <h1>Conatact info</h1>
        <IoCloseSharp
          fontSize={20}
          color="black"
          onClick={() => setShowInfo(false)}
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
          <img src={profile2} alt="files" />
          <img src={profile3} alt="files" />
          <img src={profile4} alt="files" />
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
