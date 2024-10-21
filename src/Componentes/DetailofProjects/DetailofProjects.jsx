import React, { useEffect, useState } from 'react'
import { PiProjectorScreenDuotone } from 'react-icons/pi'
import ProfileImage from '../ProfileImage/ProfileImage'
import { IoCloseOutline } from 'react-icons/io5'
import { FaTasks } from 'react-icons/fa'
import { IndivudualTaskLayout } from '../../Layouts'
import "./detailofProjects.css"
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'


const DetailofProjects = ({setOpenModal}) => {
  
    const [ projects, setProjects ] = useState( [] )
  const { id } = useParams()
  const projectID = id.slice( 0, 13 )
  console.log(projectID);
const project=projects?.projectTasks?.find(project => project.id === id)
    
  useEffect( () =>{
      const   fetchApi = async () =>
         {
          
         try {
           const data = await fetch( `http://localhost:3500/project/${ projectID }` )
           const res = await data.json()
           setProjects( res ) 
           
         } catch (error) {
            
         }   
     }
     fetchApi()
     }, [] )
    console.log(project);
     console.log();
    
     return (
        // <div className="modal">
        //     <div className='projectDetail'>
        //         <NavLink
        //         to="..">
        //             <IoCloseOutline
        //             color={ "black" } fontSize={ 30 }
        //             style={ { position: "fixed", right: '30px', top: "10px" } } />
        //         </NavLink>
        //     <section className="projectDetail__side element-with-scroll">
        //         <header className="projectDetail__side-header">
        //             Basics of tasks a...
        //        </header>
        //         { projects[ 0 ]?.projectTasks?.map( ( project, i ) => (
        //         <NavLink to={project.id} className='projectDetail__side-projects'>
        //             <div><h6>EZ1-T19</h6><span>{ project.status }</span></div>
        //             <p>{ project.mainTask.substring(0,60) }</p>
        //             <h4>Abel zewdu</h4>
        //         </NavLink> ) ) }
        //    </section>
            <section className="projectDetail__sections element-with-scroll">
                <header>
                    <h6><FaTasks />Task <span>EZ1-T19</span></h6>
                    <h2>{ projects[ 0 ]?.projectTasks[0]?.mainTask }</h2>
                    <div className="">
                    <h6>Abel zewdu</h6>
                    <span><PiProjectorScreenDuotone /> Explore { projects[ 0 ]?.projectName }</span>
                    </div>
                </header>
                <div className="projectDetail__sections__TaskInformation">
                    <h4>Task Information</h4>
                         <ul>
                            <li>Owner <span><ProfileImage name="Abel Zewdu"/> Abel Zewdu</span></li>
                            <li>Status <span>{projects[ 0 ]?.projectTasks[0].status }</span></li>
                            <li>Due Date <span>{projects[ 0 ]?.projectTasks[0].startDate}</span></li>
                            <li>start Date<span>{projects[ 0 ]?.projectTasks[0].endDate}</span></li>
                            <li>Priority <span>{projects[ 0 ]?.projectTasks[0].endDate}</span></li>
                            <li>Duaration <span>{projects[ 0 ]?.projectTasks[0].duration}</span></li>
                            <li>Completion Percentage <span>{ projects[ 0 ]?.projectTasks[0].progressPercent}</span></li>
                            <li>Work hours <span>{ projects[ 0 ]?.projectTasks[0].progressPercent}</span></li>
                        </ul>
                 </div>
            <Outlet context={[project]} />
                 </section> 
        // </div>
        // </div>
  )
}

export default DetailofProjects