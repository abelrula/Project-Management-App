import React, { useRef } from 'react'
import "./attachDocs.css"
  
 const AttachDocs = ({setAttachedDocuments}) => {
   
   // targeting Documents inputs to open onclick purpose
   const fileUpload = useRef()
   
   return (
     <>
      <label>Attach Documents</label>
            <button onClick={ ()=>fileUpload.current.click()} className="seeMoreButton"><span>Upload File</span></button>
          <input
              type="file"
              id="documents"
              ref={fileUpload}
             onChange={ ( e ) => setAttachedDocuments( e.target?.files ) }
              style={ { display: "none" } }
              multiple
       />
     </>
  )
 }
 
 export default AttachDocs