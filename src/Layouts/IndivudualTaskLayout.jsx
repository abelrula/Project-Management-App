import React from 'react'
import { NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom';

const selectedObj = {
color: "white",
background: "rgb(161 111 0)",
borderRadius:"5px"
};
const IndivudualTaskLayout = () => {
   

    const projectContext=useOutletContext()
    
    const navLinks = [ "comments", "subtasks", "logHours", "documents", "issues" ]
    const { id:projectId } = useParams()
    
    return (
          <div className="projectDetail__routes">
            <nav>
                { navLinks.map( ( link, i ) => (
                                <NavLink end to={link}  style={({isActive})=> (isActive ?selectedObj : null) }  key={ i} className="link">{link }</NavLink>
                            ))}
                    </nav>
                    <div className="projectDetail__routes-outlet">
                        <Outlet context={projectContext} />
                    </div>
                </div>        
  )
}
export default IndivudualTaskLayout