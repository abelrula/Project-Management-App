import React from 'react'
import { useOutletContext } from 'react-router-dom';

const LogHours = () => {
  const [ projectId ] = useOutletContext()
  console.log(projectId);
  return (
    <div>LogHours</div>
  )
}

export default LogHours