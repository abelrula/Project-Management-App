 import React, { useEffect, useState } from "react";
import { HiCalendar } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import ReactQuill from 'react-quill';
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
 import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
import { projectTypes, statusData } from "../../../lib/data";

import "./addIssueForm.css"
const AddIssueForm = () => {

    const date = new Date();
   const [endDate, setEndate] = useState(date);
    const [selectedProject,setSelectedProject]=useState(null)
    const [description, setDescription] = useState("");
    const [openProject,  setOpenProject]=useState(false)
   const [ selected, setSelected ] = useState( null );
   const [attachedDocuments,setAttachedDocuments]=useState(null)
   const dispatch=useDispatch()
 

    return (
        <>
    <div className="modal">
      <form className="Form element-with-scroll" >
        <header>
            <h6>Add New Issue          
            </h6>
            <IoCloseCircleOutline className="icon" onClick={()=> dispatch(closeModal()) } />
       </header>
            {/* select a project which you want to add Issue on  */ }
        
        <div className="project">
            <label>select on a project you want to add Issue
                            { !openProject ?
                                <FaArrowDown className="icon" onClick={ () => setOpenProject( true ) } /> :
                                <FaArrowUp className="icon" onClick={ () => setOpenProject( false ) } /> }
             </label>
              
        {/*available Projects*/}
            <div className="project_types"> 
           <span 
           onClick={ () => setOpenProject((prev)=>!prev)}
           >{ selectedProject !== null  ? selectedProject  : "selected project none"}</span> 
          { openProject && projectTypes.map((item,i)=>(
           <div
             key={ i } 
            onClick={ () => { setSelectedProject( item.title ); setOpenProject(false)}}
             style={ { background: `${ item.color }` } }
             className="project_types-type"
           >
           <h4>
              {item.title}
            </h4>
           {item.icon} 
         </div>
        ) ) }
            </div>
           </div>
       {/* main taskdecription usinf react quill text editor */}
          <div className="Form__textArea">
          <label>Add Main Issue Discription</label>
           <ReactQuill theme="snow" value={description} onChange={setDescription} />
          </div>
       
          {/* attachung documnet inputs */}
          <div className="Form__AttachDocuments">
          <label>Attach Documents</label>
          <button className="seeMoreButton"><span>Upload File</span></button>
          <input
            type="file"
            id="documents"
            value={attachedDocuments}
            onChange={ ( e ) => setAttachedDocuments( e.target.value ) }
            style={{display:"none"}}
          />

          </div>
          
          {/* Issue priorities */}
        <div className="Form__priorities">
          <label>Select The Priority</label>
          <div className="Form__priorites">
            { statusData.map( ( item, i ) => (
          <span
           onClick={()=>setSelected(item.status)}
            className={`Form__priorites-priority ${ item.status }` }
            key={i}
            style={ {
              background: selected ===item.status && item.background,
                color:selected ==item.status && "white" }} 
              >
             {item.status}
       </span>
       ))}
        </div>
        </div>
        
          {/* Issue completion date */}
          <div className="Form__date">
             <label>
              <HiCalendar className="calanderIcon" />
                            to be submitted date
                        </label>
                        <input type="date" onChange={ ( e ) => setEndate( e.targt.value ) } />
                     </div>
         
          {/* submit form */ }
        <FormSubmitButton buttonName="Assign Task"/>
        </form>
        </div>
     </>
  )
}

export default AddIssueForm