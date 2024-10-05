import React from 'react'
import "./notifications.css"
import { IoCloseCircleOutline } from 'react-icons/io5'
 import { useDispatch, useSelector } from 'react-redux'
import { FaTasks } from 'react-icons/fa'
import { AiOutlineIssuesClose } from 'react-icons/ai'
import { SiMinutemailer } from 'react-icons/si'
import { MdMarkEmailRead } from 'react-icons/md'
import { GrAchievement, GrSchedulePlay } from 'react-icons/gr'
import { IoIosClose } from 'react-icons/io'
// import AchievementImg from"../../assets/387_generated.jpg"
import "react-toastify/dist/ReactToastify.css";
import { closeModal } from '../../../redux/slices/modalSlice'
 const Uniqueimage="https://media.licdn.com/dms/image/C5612AQECossAr3-pIQ/article-cover_image-shrink_600_2000/0/1520214404865?e=2147483647&v=beta&t=78Wx-QyI5KAQ4cbMZwxZ04bCBEl0W-e_Q1T6qX5sAQI"
export const notifications = [
    {
        text: "Your email address has been changed",
        icon: <MdMarkEmailRead />,
        img:"https://images.hiverhq.com/blog/wp-content/uploads/2016/06/tr:pr-true/119-Email-Phrases-to-Help-You-Get-the-Desired-Respons1e.png"
    },
    {
        text: "Task Assigned to you",
        icon: <FaTasks />,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrh8xoCZ8UhOL-g5uoTbkKKX4Hk1xobt4SyCR_FHOQ8M1q9BIVHG9N5Eh2OrcT1iLQgE&usqp=CAU"
    },
    {
        text: "New Issue Added By Englezbar Donoto",
        icon: <AiOutlineIssuesClose />,
        img:"https://149449379.v2.pressablecdn.com/wp-content/uploads/2019/12/Teamwork-Web-Development-no-coffee-lady-transparent-background.png"
    },
    {
        text: "Invite Your Cowercors to Collabrate",
        icon: <SiMinutemailer />,
        img:"https://img.freepik.com/premium-vector/email-marketing-concept_118813-2422.jpg"
    },
    {
        text: "You have Accomplished 30 percent Of The Month Expections ",
        icon: <GrAchievement />,
        img:"https://www.prosoftly.com/wp-content/uploads/2020/01/task.png"
    },
    ,
    {
        text: "schedual for july 30",
        icon: <GrSchedulePlay />,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wv3c01_YZy_VBnHTI1RSdqs8hcQV_Y-LJw&s"
    },

    
]

export const Notificaton = ({notification}) =>{
    
   return (
        <div className="notification__card">
        <img src={notification.img} alt="Achievement" />
        <p>{notification.text }</p>
       </div>
   )
    

}
const Notifications = () =>{
    
     const dispatch = useDispatch()

    
    const closeNotification = () =>
    {
        
    }

    return (
         <div className='modal'>
        <div className='notification__container'>
             <header>
            <h6>Notifications          
            </h6>
               <IoCloseCircleOutline className="icon" onClick={()=> dispatch(closeModal()) } />
              </header> 
            <div className='notification__cards__container  element-with-scroll'>
           { notifications.map( ( notification, i ) => (
               <>
                 <div className="notification__card">
                   <IoIosClose className='closeIcon'onClick={closeNotification} />
                   <img src={notification.img} alt="Achievement" />
                   <p>{notification.text }</p>
                 </div>
               </>
           ) ) }
             
               </div> 
               </div> 
            </div>
    )
}

export default Notifications