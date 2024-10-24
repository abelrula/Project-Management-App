  import React, { useEffect, useState } from "react";
import { HiCalendar } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import ReactQuill from 'react-quill';
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
 import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
import { projectTypes, statusData } from "../../../lib/data";

import "./addCommentForm.css"

const AddCommentForm = () => {
 
 const date = new Date();
    const [endDate, setEndate] = useState(date);
  const [ selectedProject, setSelectedProject ] = useState( null)
  const [ allProject, setAllProject ] = useState( [] )
  const [ mainTasks, setMainTasks ] = useState( [] )
  const [selectedMainTasks,setSelectedMainTasks]=useState({})
    const [subTasks,setSubTasks]=useState({})
    const [description, setDescription] = useState("");
    const [openProject,  setOpenProject]=useState("")
    const [ selected, setSelected ] = useState( null );
    const [attachedDocuments,setAttachedDocuments]=useState(null)
  const dispatch = useDispatch()
 
  useEffect( () =>{
    
    async function fetchAllProject (){
      const res = await fetch( "http://localhost:3500/project" )
      const data = await res.json()
  console.log(data);
       setAllProject(data)
    }
    
    fetchAllProject()
    
  }, [] )
   
  useEffect( () =>{
    
    async function fetchMainTaks (){
      const res = await fetch( "http://localhost:3500/project?id="+selectedProject?.id )
      const data = await res.json()
       console.log(data);
       setMainTasks(data[0]?.projectTasks)
       console.log( mainTasks  );
    }
    
    fetchMainTaks()
    
  }, [ selectedProject ] )
  
   console.log( mainTasks );
   console.log( selectedProject );
  
   
  return (
    <>
    <div className="modal">
      <form className="Form element-with-scroll" >
        <header>
            <h6>Add New Comment          
            </h6>
            <IoCloseCircleOutline className="icon" onClick={()=> dispatch(closeModal()) } />
       </header>
            {/* select a project which you want to add Comment on  */ }
        
        
          <section>
            
            
            {/*available Projects to add comment on*/ }
            <div className="project">
            <label>select on a project you want to add Comment
             </label>
            <div className="project_types"> 
           <span 
            onClick={ () => setOpenProject("projects")}
              >{ selectedProject !== null ? selectedProject.projectName : "selected project none" }
              </span> 
          { openProject === "projects" && allProject?.map((project,i)=>(
           <div
             key={ i } 
              onClick={ () => { setSelectedProject( project );   setOpenProject("")}}
             className="project_types-type"
           >
           <h4>
              {project?.projectName}
              
            </h4>
         </div>
        ) ) }
            </div>
            </div>
      
            {/*available mainTasks to add comment on*/}
            { mainTasks && <div className="project">
              <label>select mainTasks you want to add Comment
              </label>
              <div className="project_types">
                <span
                  onClick={ () => setOpenProject( "mainTasks" ) }
                >{ mainTasks !== null ? selectedMainTasks?.mainTask.substring(0,60) : "selected project none" }
                </span>
                { openProject === "mainTasks" && mainTasks?.map( ( project, i ) => (
                  <div
                    key={ i }
                    onClick={ () => { setSelectedMainTasks( project ); setOpenProject( "" ) } }
                    className="project_types-type"
                  >
                    <h4>
                      { project?.mainTask.substring(0,40) }
              
                    </h4>
                  </div>
                ) ) }
              </div>
            </div> }
           </section>

        {/* add comment using react quill text editor */}
          <div className="Form__textArea">
          <label>Add comment</label>
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
         
          {/* submit form */ }
        <FormSubmitButton buttonName="Add Comment"/>
        </form>
        </div>
     </>
  )
}

export default AddCommentForm