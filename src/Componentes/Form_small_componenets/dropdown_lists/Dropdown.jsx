import React from 'react'
import "./dropdown.css"
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import useFetchData from '../../../hooks/useFetchData';
import "./dropdown.css"

export const DropdownProject = ({openProject,setOpenProject,setOpenEmployee,setSelectedProject,selectedProject}) => {
 
  const { data: projectTypes } =useFetchData("http://localhost:3500/project")
 console.log(projectTypes);
 
  return (
   <div className="project">
            <label>select a project you want to assign 
            {!openProject &&<FaArrowDown className="icon" onClick={ () => {setOpenProject(true); setOpenEmployee(false)}} />}
            {openProject &&<FaArrowUp className="icon" onClick={ () => setOpenProject(false)} />}
            </label>
          <div className="project_types"> 
           <span 
           onClick={ () => setOpenProject((prev)=>!prev)}
           >{ selectedProject !== null  ? selectedProject  : "selected project none"}</span> 
          { openProject && projectTypes.map((item,i)=>(
           <div
             key={ i } 
              onClick={ () => { setSelectedProject( item.projectName ); setOpenProject(false)
}}
              className="project_types-type"
           >
           <h4>
              {item.projectName}
            </h4>
          </div>
        ) ) }
         </div>
        </div>
  )
}

export const DropdownMembers = ({ setOpenEmployee,openEmployee,selectedEmployee,setOpenProject,setSelectedEmployee,setJobCatagory,jobCatagory}) =>{
  
  const { data: members } =useFetchData("http://localhost:3500/members")
console.log(members);


  return(
     <div className="employeContainer">
            <label>Select Employee you want to assign 
            { !openEmployee && <FaArrowDown className="icon"
              onClick={ () =>
              {
                setOpenEmployee( true );
                setOpenProject( false )
              } } /> }
            { openEmployee && <FaArrowUp className="icon"
              onClick={ () => setOpenEmployee( false ) } /> }
            </label>
          <div className="employeContainer_members"> 
           <span
           onClick={ () => setOpenEmployee((prev)=>!prev)}
           >{ selectedEmployee !== null  ? `${selectedEmployee}: ${jobCatagory}`  : "selected employee none"}</span> 
          { openEmployee && members?.map((employee,i)=>(
           <div
             key={ i } 
              onClick={ () =>{
                setSelectedEmployee( employee?.name );
                setOpenEmployee( false );
                setJobCatagory(employee.jobCatagory)
              } }
              className="employeContainer_members-employe"
           >
              <div>
                <img src={ employee.profile } alt="profile" />
            <h4>
              {employee.name}
            </h4>
            </div>
            <p>{employee.jobCatagory}</p>
            </div>
        ) ) }
          </div>
        </div>
  )

}