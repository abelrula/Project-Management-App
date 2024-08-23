import React from 'react'
import "./addbutton.css"
import { useLocation } from 'react-router-dom'
const AddButton = ({name,Onclick}) => {
  const { pathname } = useLocation()
  console.log(pathname);
  
  return (
      <div className="footerButton">
                {pathname !== "/schedule" && <p>added {name} will appear here </p> }
                  <button onClick={Onclick}> <span>Add {name}</span> </button>
       </div>
  )
}

export default AddButton