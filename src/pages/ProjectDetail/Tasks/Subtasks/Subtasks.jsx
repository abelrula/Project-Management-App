import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import IssuesTable from '../../../../Componentes/Table/IssuesTable';

const Subtasks = () => {
const [ projectId ] = useOutletContext()
  const [ issueTracking, setIssueTracking ] = useState( [] )
     
              useEffect( () =>{ 
                   async function  AssignedProjects(){
                    const res = await fetch( "http://localhost:3500/project" )
                    const data = await res.json()
                    setIssueTracking(data[0]?.issueTracking)
                  }
                  AssignedProjects()
              }, [] )
  
  console.log(issueTracking);
  
  return (
       <IssuesTable data={issueTracking} />
  )
}

export default Subtasks