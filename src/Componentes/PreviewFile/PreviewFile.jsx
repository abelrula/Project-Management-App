import React from 'react'
import { IoMdClose } from 'react-icons/io'
import  "./previewFile.css"

const PreviewFile = ({fileNames}) => {
  return (
    <div className="Form__AttachDocuments-selectedFiles element-with-scroll">
      {/* if therse selected files map through them */}
      { fileNames?.map( ( ( fileName ) => (
        <div className="Form__AttachDocuments-selectedFiles-file"><span>{ fileName }  <GrDocumentPdf className="icon" /></span>
          {/* onClick on close the file icon delete selected files  */}
                <IoMdClose className="closeIcon" onClick={()=>setAttachedDocuments(Array.from(attachedDocuments).filter(file=>file.name !== fileName))}/></div>
            ) ) ) }
          </div>
  )
}

export default PreviewFile