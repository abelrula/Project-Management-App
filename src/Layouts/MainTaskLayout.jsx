import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useOutletContext, useParams } from 'react-router-dom'
import Projects from '../Componentes/Dashboard/Projects/Projects'
import DetailofProjects from '../Componentes/DetailofProjects/DetailofProjects'
import { IoCloseOutline } from 'react-icons/io5'

const MainTaskLayout = () => {

  const {id}=useParams()
  console.log(id);
  
   const selectedObj = {
    color: "black",
    background: "#dda12a87",
    borderRadius:"5px"
  };
  const [ projects, setProjects ] = useState( [] )
  console.log(id)
     useEffect(() => {
      const   fetchApi = async () =>
         {
          
         try {
           const data = await fetch( "http://localhost:3500/project" )
             const res = await data.json()
             setProjects(res) 
         } catch (error) {
            
         }   
     }
     fetchApi()
     }, [] )
  return (
      < >
        {/* { Projects[ 0 ]?.projectTasks?.map( ( project, i ) => (
                    <NavLink key={ i }
                        className='projectDetail__side-projects'
                        style={ ( { isActive } ) => ( isActive ? selectedObj : null ) }
                        to={`tasks/${project.id}`}
                    >
                    <div><h6>EZ1-T19</h6><span>{ project.status }</span></div>
                    <p>{ project.mainTask?.substring(0,60) }</p>
                    <h4>Abel zewdu</h4>
            </NavLink> ) ) }    */}
           <div className="modal">
            <div className='projectDetail'>
                <NavLink
                to="..">
                    <IoCloseOutline
                    color={ "black" } fontSize={ 30 }
                    style={ { position: "fixed", right: '30px', top: "10px" } } />
                </NavLink>
            <section className="projectDetail__side element-with-scroll">
                <header className="projectDetail__side-header">
                    Basics of tasks a...
               </header>
                { projects[ 0 ]?.projectTasks?.map( ( project, i ) => (
                  <NavLink
                   style={({ isActive }) => (isActive ? selectedObj : null)}
                    to={ project.id }
                    className='projectDetail__side-projects'>
                    <div><h6>EZ1-T19</h6><span>{ project.status }</span></div>
                    <p>{ project.mainTask.substring(0,60) }</p>
                    <h4>Abel zewdu</h4>
                </NavLink> ) ) }
           </section>
        <Outlet />
          </div>
        </div>
      {/* <DetailofProjects /> */}
    </ >
  )
}

export default MainTaskLayout