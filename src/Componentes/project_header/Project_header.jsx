import React from 'react'
import "./project_header.css" 
import { ProjectDetailNavLinks } from '../../lib/data'
import { NavLink } from 'react-router-dom'

  const selectedObj = {
    color: "white",
    background: "rgb(221 161 42 / 86%)",
    borderRadius:"5px"
};
  
const Project_header = () =>
{
  return (
     <div className="Overview_header">
          <div className="Overview_header-ProjectName">
             <h1>daniels apartement </h1>
             <span>open details</span>
            </div> 
           <nav className="Overview_header-links" >
              { ProjectDetailNavLinks.map( ( link, i ) => (
                <NavLink  end className="link" style={({isActive})=>isActive ? selectedObj : null} to={link.to}>{link.name} { link.icon}
                </NavLink>      
              ))              
            }              
          </nav>
         </div>
  )
}

export default Project_header