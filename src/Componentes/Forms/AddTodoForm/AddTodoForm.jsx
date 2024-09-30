 import React, { useState ,useEffect, useRef, useCallback} from "react";
 
import { HiCalendar } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import ReactQuill from 'react-quill';
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
 import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
import { projectTypes, statusData } from "../../../lib/data";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import "./addTodoForm.css";
import 'react-quill/dist/quill.snow.css';
 import PreviewFile from "../../PreviewFile/PreviewFile";
import usePreviewFile from "../../../hooks/usePreviewFile";
import SubTask from "../../SubTask/SubTask";
 
const members = "http://localhost:3500/members";

const AddTodoForm = ({type}) => {
   
   const [attachedDocuments,setAttachedDocuments]=useState(null)
  const [previewFileUrl,fileNames] =  usePreviewFile( attachedDocuments )
   const fileUpload=useRef()

   const date = new Date();
   const [startDate, setStartDate] = useState(date);
   const [endDate, setEndate] = useState(date);
   const [selectedProject,setSelectedProject]=useState(null)
   const [description, setDescription] = useState("");
   const [openProject,  setOpenProject]=useState(false)
   const [ selected, setSelected ] = useState( null );
   const [selectedFormType,setSelectedFormType]=useState("Buisness")
   const [ addSubTasksNum, setAddSubTasksNum ] = useState( 0 )
   const dispatch=useDispatch()
   const [subTasks,setSubTasks]=useState([])
   
  const randomeIdStringGenerator = ( length ) =>
  {    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    let result="ea1";
    for ( let i = 0; i < length; i++ ){
      result += chars.charAt( Math.floor( Math.random() * chars.length ) )    
    }
    return result;
  }
  const newSubtask = {
    id:randomeIdStringGenerator(5),
    task: "",
    endDate: "",
    startDate: "",
    priority: "",
   }
  
  const addSubTask = (task) =>{  
     setSubTasks([...subTasks,task])
  }
  const updateSubTask = ( e, id ) =>{
     const updatedSubTask = subTasks.map( ( task, i ) => (
      task.id === id ? {
        ...task,
       [e.target.name]:e.target.value
    }:task
  ))
    setSubTasks( updatedSubTask )    
  }

  const deleteSubTask = ( id ) =>{  
    setSubTasks(subTasks.filter(task=>task.id !== id))
  }
     
  
  function handleSubmit ( e ){
   
     e.preventDefault();
  }
 
  const formType = [ "Buisness", "Personal" ]
 
   return (
    <>
       <div className="modal">
      <form className="Form element-with-scroll" onSubmit={ handleSubmit }>
        <header>
           <h6>Add New Task          
            </h6>
            <span >
              { formType.map( ( type, i ) => (
                <button
                  onClick={()=>setSelectedFormType(type)}
                  key={ i }
                  style={ {background: selectedFormType === type  && "#2d55af",
                color:selectedFormType === type && "white" }} >{type}</button>
              ))
            }<IoCloseCircleOutline className="icon" onClick={()=> dispatch(closeModal()) } /> 
            </span>
       </header>
        {/* select a project which you want to add task on  */}
          {
           selectedFormType=="Buisness" && <div className="project">
            <label>select on a project you want to add  the task
              { !openProject && <FaArrowDown className="icon" onClick={ () =>  setOpenProject( true )  } />}
               {openProject &&<FaArrowUp className="icon" onClick={ () => setOpenProject(false)} />}
              </label>
              
          {/*available Projects*/}
            <div className="project_types"> 
             <span 
              onClick={ () => setOpenProject((prev)=>!prev)}
             >{ selectedProject !== null  ? selectedProject : "selected project none"}</span> 
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
           </div>}
       {/* main taskdecription usinf react quill text editor */}
          <div className="Form__textArea">
          <label>Add Main Task Discription</label>
           <ReactQuill theme="snow" value={description} onChange={setDescription} />
          </div>
       
       {/* subtasks inputs */}
          <div className="Form__Subtasks">
             <label onClick={()=>addSubTask(newSubtask)} >Add Subtaks
              <CiSquarePlus
                fontSize={ 23 }
                />
             {/* { subTasks?.length > 0 && <span onClick={()=>setSubTasks([])}>clear all</span>} */}
            </label>
            {/* adding subtasks based on user clicking  the plus button */ }
            {subTasks?.map( ( subTask,i ) => (
              <SubTask key={ i }   deleteSubTask={deleteSubTask} subTask={subTask} updateSubTask={updateSubTask}  />
 
            ))}
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
          
          {/* task priorities */}
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
 
           {/* task completion date */}
          <div className="Form__date">
           <div>
            <label>
               <HiCalendar className="calanderIcon" />
              task need to start</label>
            <input type="date" onChange={ ( e ) => setStartDate( e.target.value ) } />
          </div>
          <div>
            <label>
           <HiCalendar className="calanderIcon" />
              to be submitted date</label>  <input type="date" onChange={ ( e ) => setEndate( e.targt.value ) } />
          </div>
          </div>
        
          {/* submit form */ }
        <FormSubmitButton buttonName="Assign Task"/>
        </form>
        </div>
     </>
  );
}

export default AddTodoForm;
