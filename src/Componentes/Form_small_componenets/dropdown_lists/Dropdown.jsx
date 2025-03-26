import React from 'react'
import "./dropdown.css"
import { IoChevronDownSharp } from 'react-icons/io5';
  import useFetchData from '../../../hooks/useFetchData';
import "./dropdown.css"

export const DropdownProject = ({setSelectedProject,selectedProject}) => {
 
  const { data: projectTypes } =useFetchData("http://localhost:3500/project")
 console.log(projectTypes);
 
  return (
   <div className="project">
            <label htmlFor='project'>select a project you want to assign 
            </label>
         <select id="project"  value={ selectedProject }
          onChange={ ( e ) =>{
                setSelectedProject( e.target.value )
              } }>
          { projectTypes.map( ( item, i ) => (
            <option
              key={ i }
              value={ item.projectName }
              className="project_types-type"
            >
              { item.projectName }
            </option>
            ) ) }
        </select>
         </div>
  )
}

export const DropdownMembers = ({ setOpenEmployee,openEmployee,selectedEmployee,setOpenProject,setSelectedEmployee,setJobCatagory,jobCatagory}) =>{
  
  const { data: members } =useFetchData("http://localhost:3500/members")
console.log(members);


  return(
     <div className="employeContainer">
            <label>Select Employee you want to assign 
            </label>
          <div className="employeContainer_members"> 
           <span
            onClick={ () => setOpenEmployee((prev)=>!prev)}
            >{ selectedEmployee !== null ?
            `${ selectedEmployee }:--${ jobCatagory.length > 17 ? `${jobCatagory.substring( 0, 17 )}...`:jobCatagory }` :
            "selected employee none" }
          <IoChevronDownSharp fontSize={24} className='dropdown_icon' />
          </span> 
        
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

// after slecting project realated to that project main tasks will be visible 
export const MainTaksDropwDown =({setSelectedMainTasks,selectedMainTasks,mainTasks}) =>{
  

  return (
       <div className="mainTasks">
              <label htmlFor='task'>select mainTasks you want to add Comment
              </label>
      <select id='task' 
      value={ selectedMainTasks }
        onChange={ ( e ) => { setSelectedMainTasks( e.target.value ) } }>
          {
            mainTasks?.map( ( project, i ) => (
                  <option
                    key={ i }
                    className="project_types-type"
                   >
                       { project?.mainTask.length > 60 ? project?.mainTask?.substring(0,40) :  project?.mainTask  }...
                    </option>
            ) )
          }
        </select>
               </div>
  )
}

 