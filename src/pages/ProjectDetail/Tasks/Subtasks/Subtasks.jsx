import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
 import TaskTable from '../../../../Componentes/Table/TaskTable';

const Subtasks = () => {
  const projectContext=useOutletContext()
  const subTaks=projectContext?.subtasks 
  console.log( projectContext.subtasks )
  console.log(  subTaks)
  // const [ issueTracking, setIssueTracking ] = useState( [] )
     
  //             useEffect( () =>{ 
  //                  async function  AssignedProjects(){
  //                   const res = await fetch( "http://localhost:3500/project" )
  //                   const data = await res.json()
  //                   setIssueTracking(data[0]?.issueTracking)
  //                 }
  //                 AssignedProjects()
  //             }, [] )
  
  // console.log(issueTracking);
  
  return (
       <TaskTable data={ subTaks} />
  )
}

export default Subtasks