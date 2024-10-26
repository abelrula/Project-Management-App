import React from 'react'
import "./priority.css"
import { statusData } from '../../../lib/data'


 
const Priority = ({priority,setPriority}) => {
  return (
    <div className="Form__priorities">
          <label>Select The Priority</label>
          <div className="Form__priorites">
            { statusData.map( ( item, i ) => (
          <span
           onClick={()=>setPriority(item.status)}
            className={ `Form__priorites-priority ${ item.status }` }
            key={i}
            style={ {
              background: priority ===item.status && item.background,
                color:priority ==item.status && "white" }} 
              >
             {item.status}
       </span>
       ))}
        </div>
        </div>
  )
}

export default Priority