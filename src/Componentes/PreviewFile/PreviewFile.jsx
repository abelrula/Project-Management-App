import React from 'react'
import { IoMdClose } from 'react-icons/io'
import  "./previewFile.css"
import { GrDocumentPdf } from 'react-icons/gr'

const PreviewFile = ({fileNames,setAttachedDocuments}) => {
 
 
  return (
    <div className="Form__AttachDocuments-selectedFiles element-with-scroll">
      {/* if therse selected files map through them */}
      { fileNames?.map( ( ( fileName ) => (
        <div className="Form__AttachDocuments-selectedFiles-file">
          <span>{ `${ fileName.substring( 0, 26 ) }...` }  <GrDocumentPdf className="icon" /></span>
          {/* onClick on close the file icon delete selected files  */}
          <IoMdClose
            className="closeIcon"
            onClick={ () => setAttachedDocuments( ( prev ) =>
                 Array.from( prev )
                .filter( file => file.name !== fileName ) ) } />
            </div>
            ) ) ) }
          </div>
  )
}

export default PreviewFile