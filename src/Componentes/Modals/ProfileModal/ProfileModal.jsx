import React from 'react'
import "./ProfileModal.css"
import { IoCloseCircleSharp } from 'react-icons/io5'
import { CiLocationOn, CiLogout } from 'react-icons/ci'
import { BiCalendar, BiLogoOkRu } from 'react-icons/bi'
import { FaGraduationCap } from 'react-icons/fa6'
import img1 from "../../../assets/worker2.jpg"
import { MdOutlineWorkOutline } from 'react-icons/md'
import { closeModal } from '../../../redux/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FcTodoList } from "react-icons/fc";


const ProfileModal = ({data}) => {
  const dispatch = useDispatch()
  const {modalType,toggled}=useSelector(state=>state.modal)
 
    return (
    <div className="modal">
        <div className={
          modalType === "memberProfile" &&
          toggled === true ?
          "memberProfile_description" : "profile_description" }>
          <div className="profile_description-header">
          <span className="signout"><CiLogout /> sign out </span>
           <IoCloseCircleSharp
              onClick={ () => dispatch(closeModal())}
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
       
             <div className="userInfo">
            { modalType === "memberProfile" &&
              <div className="profile_description__middle">
               <p className="userInfo__list">
                <span><FcTodoList />Accomplished Tasks :- </span>
                  200 
              </p>
               <p className="userInfo__list">
              <span><LiaProjectDiagramSolid />Included Projects </span>
              <ul>
                 <li>Operations</li>
                 <li>data managements</li>
                 <li>Networking</li>
              </ul>
         </p>
          </div> 
         }
            <p className="userInfo__list"><span><BiLogoOkRu /> Bio</span>The best and most beatiful things in the world cannot be ssen or even touched</p>
            <p className="userInfo__list"><span><CiLocationOn />Living in</span>   Austin ,Texas</p>
            <p className="userInfo__list"><span><FaGraduationCap />Went to</span>  the uniceresity of texas</p>
            <p className="userInfo__list"><span><MdOutlineWorkOutline />Works at</span> Atlas Mesa Solar</p>
          <p className="userInfo__list"><span><BiCalendar />Joined In</span> June 17,2024</p>
            <button className="userInfo-Message__button" >Message</button>
            </div>
         </div>
        </div>
  )
}

export default ProfileModal