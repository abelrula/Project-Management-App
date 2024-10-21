import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Documents = () => {
  const [ projectId ] = useOutletContext()
  console.log(projectId);
  return (
    <div>Documents</div>
  )
}

export default Documents