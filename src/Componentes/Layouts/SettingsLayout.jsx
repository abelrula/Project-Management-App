import React from 'react'
// import Setting from '../Setting/Setting'
import { Outlet } from 'react-router-dom'

import { GrFormPrevious } from "react-icons/gr";

 import person1 from "../../assets/worker2.jpg"
 import settingsLinks from "../../data/settingsLinks"
import { NavLink } from 'react-router-dom';

const SettingsLayout = () => {
   const selectedObj = {
    color: "black",
    background: "#545351",
  };
    return (
    <div className="setting">
           <div className='setting_side'>
                      <div className='setting_side-header'>
                       <GrFormPrevious />
                          <h2>Settings</h2>
                     </div> 
                     <div className='setting_side-profile'>         
                       <img src={person1} alt='profile'/>
                        <div className='setting_side-profile-description'>
                            <p className='name'>Roberto hacketo </p>
                            <p className='bio'> hey bruh Gym Bro</p>
                        </div> 
                 </div> 
                          <div className='setting_side-options'>
                        {settingsLinks.map((link,i)=>(
                          <NavLink to={ link.to }
                                   key={ i }
              style={({ isActive }) => (isActive ? selectedObj : null)}
                                   className='setting_side-options-type'
                          >
                                {link.icon}
                                <p> {link.title}</p>
                        </NavLink >
                    ) )}
                      </div> 
          </div> 
          <div className='setting_Content'>
              <Outlet />
           </div>
    </div>
  )
}

export default SettingsLayout