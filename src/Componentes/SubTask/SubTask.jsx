import React from 'react'
import "./subTask.css"
import { IoIosClose } from 'react-icons/io'
import { statusData } from '../../lib/data'

const SubTask = ({subTask,deleteSubTask,updateSubTask}) => {
 
   
  return (
    <div className="Form__Subtasks__inputs">
                <IoIosClose className="Form__Subtasks__inputs-closeIcon" onClick={()=>deleteSubTask(subTask.id)} />
              <div >
                <label htmlFor="">task { subTask.id }<textarea value={subTask.task} name='task' onChange={(e)=>updateSubTask(e,subTask.id)}></textarea></label>
             <span>
                 <label htmlFor="">start on<input value={subTask.startDate} type="date" name='startDate' onChange={(e)=>updateSubTask(e,subTask.id)} /></label>
                <label htmlFor="">end date<input value={subTask.endtDate} type="date" name="endtDate"  onChange={(e)=>updateSubTask(e,subTask.id)}/></label>
              </span>
                </div>
              <div >
                <label htmlFor="">status</label> 
        < select
             name='priority'
             value={ subTask.priority }
             onChange={ ( e ) => updateSubTask( e, subTask.id ) }
        >
          <option  >select priority</option>    
              { statusData.map( ( item, i ) => (
                   <option
                     value={ item.status }
                     key={ i }                 
                    >
                       {item.status}
                   </option> 
                  ))}
          </select>
        </div>
              </div>
  )
}

export default SubTask
          
        