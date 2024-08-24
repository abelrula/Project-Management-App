import React from 'react'
import "./ProfileModal.css"
import { IoCloseCircleSharp } from 'react-icons/io5'
import { CiLocationOn, CiLogout } from 'react-icons/ci'
import { BiCalendar, BiLogoOkRu } from 'react-icons/bi'
import { FaGraduationCap } from 'react-icons/fa6'
import img1 from "../../../assets/worker2.jpg"
import { MdOutlineWorkOutline } from 'react-icons/md'
import { closeModal } from '../../../redux/slices/modalSlice'
import { useDispatch } from 'react-redux'
const ProfileModal = () => {
  const dispatch = useDispatch()

    return (
    <div className="modal">
        <div className="profile_description">
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
            <p className="userInfo__list"><span><CiLocationOn />Living in</span>   Austin ,Texas</p>
            <p className="userInfo__list"><span><FaGraduationCap />Went to</span>  the uniceresity of texas</p>
            <p className="userInfo__list"><span><MdOutlineWorkOutline />Works at</span> Atlas Mesa Solar</p>
            <button className="userInfo-Message__button" >Message</button>
        <p className="userInfo__list"><span><BiCalendar />Joined In</span> June 17,2024</p>
        {/* <div className="flex flex-wrap gap-1 mt-4 mx-auto">
                {
                  imagesPostedByTheOwner.map((image,i)=>(
                    <img className="w-36 h-32 rounded-lg object-cover object-center" src={image} key={i} alt="posts" />
                  ))
                }
              </div> */}
            </div>
         </div>
        </div>
  )
}

export default ProfileModal