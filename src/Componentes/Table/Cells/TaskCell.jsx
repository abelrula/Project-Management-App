     import { useState,useEffect } from "react";
import DetailofProjects from "../../DetailofProjects/DetailofProjects";
import { NavLink } from "react-router-dom";
  
const TaskCell = ( {row} ) =>{
                
              
  return (
          <>
           <div className="taskInputCell"> 
            <div >
                  { row.original.mainTask.slice(0,50) }...
                     </div>
                 <NavLink to={`details/${row.original.id}`}>
                      <span>Open</span>
                     </NavLink >
                </div>
                </>
              )
}
export default TaskCell