import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const IndivudualTaskLayout = () => {
    const selectedObj = {
    color: "white",
    background: "rgb(161 111 0)",
    borderRadius:"5px"
    };
    const navLinks = [ "comments", "subtasks", "logHours", "documents", "issues" ]
     
    return (
          <div className="projectDetail__routes">
                    <nav>
                            { navLinks.map( ( link, i ) => (
                                <NavLink end to={link}  style={({isActive})=> (isActive ?selectedObj : null) }  key={ i} className="link">{link }</NavLink>
                            ))}
                    </nav>
                    <div className="projectDetail__routes-outlet">
                        <Outlet />
                    </div>
                </div>        
  )
}
export default IndivudualTaskLayout