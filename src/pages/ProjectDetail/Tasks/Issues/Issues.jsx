import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import IssuesTable from '../../../../Componentes/Table/IssuesTable';

const Issues = () => {
  const [ projectId ] = useOutletContext()
  const [ issueTracking, setIssueTracking ] = useState( [] )
     
              useEffect( () =>{ 
                   async function  AssignedProjects(){
                    const res = await fetch( "http://localhost:3500/project" )
                    const data = await res.json()
                    setIssueTracking(data[0].issueTracking)
                  }
                  AssignedProjects()
              }, [] )
  
  console.log(issueTracking);
  console.log(projectId);
  return (
    <div style={{}}>
       <IssuesTable data={ issueTracking } />
   </div>
  )
}

export default Issues