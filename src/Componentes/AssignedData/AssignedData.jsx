import React, { useEffect } from 'react'
import "../Assignedtask/assignedTasks.css"
import { MdRadioButtonUnchecked } from "react-icons/md";
import { useParams } from 'react-router-dom'
const AssignedData = () => {
 
    const { id } = useParams()
    console.log(id);
    useEffect( () =>
    {
        async function fetchTask ()
        {
            const data =id=== Number && await fetch( "http://localhost:3500/todo" )
            const res = await data.json()
            
        }
        fetchTask()
    },[])
    return (
    <div className="AssignedTask__situation--description">
                <div className="AssignedTask__situation--description--list">
                  <span>
                    <MdRadioButtonUnchecked className="icon" />
                    <p>Over all the risk of the project</p>
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="avatar"
                  />
                </div>
                <div className="AssignedTask__situation--description--footer">
                  <p>tasks you assigned will appear here</p>
                  <button>Assign Task</button>
                </div>
          </div>
  )
}

export default AssignedData