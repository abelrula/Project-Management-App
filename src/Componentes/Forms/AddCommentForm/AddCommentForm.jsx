  import React, { useEffect, useRef, useState } from "react";
 import { IoCloseCircleOutline } from "react-icons/io5";
import ReactQuill from 'react-quill';
  import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
 
import "./addCommentForm.css"
import PreviewFile from "../../PreviewFile/PreviewFile";
import usePreviewFile from "../../../hooks/usePreviewFile";
import { DropdownMembers, DropdownProject } from "../../Form_small_componenets/dropdown_lists/Dropdown";

const AddCommentForm = () => {
    
  const [ attachedDocuments, setAttachedDocuments ] = useState( null )
  const [previewFileUrl,fileNames] =  usePreviewFile( attachedDocuments )
   const fileUpload=useRef()

 const date = new Date();
    const [endDate, setEndate] = useState(date);
  const [ selectedProject, setSelectedProject ] = useState( "--")
   const [ mainTasks, setMainTasks ] = useState( [] )
  const [selectedMainTasks,setSelectedMainTasks]=useState({})
    const [subTasks,setSubTasks]=useState({})
    const [description, setDescription] = useState("");
    const [openProject,  setOpenProject]=useState("")
    const [ selected, setSelected ] = useState( null );
   const dispatch = useDispatch()
 

  useEffect( () =>{
    
    async function fetchMainTaks (){
      const res = await fetch( "http://localhost:3500/project?projectName="+selectedProject)
      const data = await res.json()
       console.log(data);
       setMainTasks(data[0]?.projectTasks)
       console.log( mainTasks  );
    }
    
    fetchMainTaks()
    
  }, [ selectedProject ] )
  
  console.log(selectedProject);
  console.log(mainTasks);
    
   
  return (
    <>
    <div className="modal">
      <form className="Form__comment element-with-scroll" >
        <header>
            <h6>Add New Comment          
            </h6>
            <IoCloseCircleOutline className="icon" onClick={()=> dispatch(closeModal()) } />
       </header>
            {/* select a project which you want to add Comment on  */ }
        
        
          <section>
            
            
            {/*available Projects to add comment on*/ }
            <DropdownProject
          openProject={ openProject }
          setOpenProject={ setOpenProject }
           setSelectedProject={ setSelectedProject }
          selectedProject={ selectedProject } />
      
            {/*available mainTasks to add comment on*/}
            { mainTasks && <div className="project">
              <label>select mainTasks you want to add Comment
              </label>
              <div className="project_types">
                <span
                  onClick={ () => setOpenProject( "mainTasks" ) }
                >{ mainTasks !== null ? selectedMainTasks?.mainTask?.substring(0,60) : "selected project none" }
                </span>
                { openProject === "mainTasks" && mainTasks?.map( ( project, i ) => (
                  <div
                    key={ i }
                    onClick={ () => { setSelectedMainTasks( project ); setOpenProject( "" ) } }
                    className="project_types-type"
                    style={{zIndex:openProject === "mainTasks" ?"999" :"100"}}
                  >
                    <h4>
                      { project?.mainTask?.substring(0,40) }
              
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
            <button onClick={ ()=>fileUpload.current.click()} className="seeMoreButton"><span>Upload File</span></button>
          <input
              type="file"
              id="documents"
              ref={fileUpload}
             onChange={ ( e ) => setAttachedDocuments( e.target?.files ) }
              style={ { display: "none" } }
              multiple
          />
          { fileNames && <PreviewFile  fileNames={fileNames} setAttachedDocuments={setAttachedDocuments}/>}
          </div>
         
          {/* submit form */ }
        <FormSubmitButton buttonName="Add Comment"/>
        </form>
        </div>
     </>
  )
}

export default AddCommentForm