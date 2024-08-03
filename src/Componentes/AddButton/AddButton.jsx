import React from 'react'
import "./addbutton.css"
const AddButton = ({name}) => {
  return (
      <div className="footerButton">
                  <p>added {name} will appear here</p>
                  <button onClick={()=>setActive(true)}>Add {name} </button>
</div>
  )
}

export default AddButton