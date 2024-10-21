import React, { useEffect, useState } from 'react'
import IssuesTable from '../../../Componentes/Table/IssuesTable'

const Issues = () => {
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
  
  return (
       <IssuesTable data={issueTracking} />
  )
}

export default Issues