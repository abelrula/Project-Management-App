import React, { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlice'
import  "./timesheet.css";
  import Filter from '../../Filter/Filter';
import SetTimer from '../../Timer/SetTimer';
import CountDownTimer from '../../Timer/CountDownTimer';
import StopWatch from '../../Timer/StopWatch';
import { BiTask } from 'react-icons/bi';

 

 
const Timesheet = () => {
  const [projects,setProjects]=useState([])
    const dispatch = useDispatch()
   const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    
     useEffect(() => {
      const fetchProjectTask = async ()=>{
             const res = await fetch(" http://localhost:3500/project")
             const data = await res.json()
             setProjects(data)
         }
         fetchProjectTask()
    }, [])
    
    return (
      <>
        <form className="timeSheet__Form" onSubmit={(e)=>e.preventDefault()} >
            <header>
             <h6>My running timer</h6>
             <IoCloseCircleOutline className="icon" onClick={()=> dispatch(closeModal()) } /> 
                </header>
               <div className="timeSheet__Form-filter">
               <Filter description="Search your tasks/issue to start timers" />
                <select name="" id="">
               <option value="">All Matches</option>
               <option value="">Project</option>
             </select>
               </div>
               {/* <SetTimer expiryTimestamp={time} /> */}
                {/* <CountDownTimer expiryTimestamp={ time } /> */}
                <div className="timeSheet__Form__Project">
                     {
                   projects.length > 0  && projects[ 0 ]?.projectTasks.map( (project,i) => (
                        <div  key={i} className='timeSheet__Form__Project-timer'>
                           <p>
                               <span>
                                <BiTask />
                               { project.mainTask.substring( 0, 50 ) }...
                               </span>
                               <h6>{ projects[ 1 ].projectName }</h6>
                            </p>
                             <StopWatch />
                        </div>
                    ) )   
                    }
                     {
                   projects.length > 0  && projects[ 1 ]?.projectTasks.map( (project,i) => (
                        <div  key={i} className='timeSheet__Form__Project-timer'>
                           <p>
                               <span>
                                <BiTask />
                               { project.mainTask.substring( 0, 50 ) }
                               </span>
                               <h6>{ projects[ 1 ].projectName }</h6>
                            </p>
                             <StopWatch />
                        </div>
                    ) )   
                }
               </div>

        </form>
      </>
  )
}

export default Timesheet