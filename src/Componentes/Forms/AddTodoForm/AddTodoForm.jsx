import React, { useState ,useEffect, useRef, useCallback} from "react";
import { HiCalendar } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import ReactQuill from 'react-quill';
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
 import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
 import { CiSquarePlus } from "react-icons/ci";
 import "./addTodoForm.css";
import 'react-quill/dist/quill.snow.css';
import PreviewFile from "../../PreviewFile/PreviewFile";
import usePreviewFile from "../../../hooks/usePreviewFile";
import SubTask from "../../Form_small_componenets/SubTask/SubTask";
import { randomeIdStringGenerator } from "../../../utility/randomeIdStringGenerator";
import Priority from "../../Form_small_componenets/priority/Priority";
import AttachDocs from "../../Form_small_componenets/attach_docs/AttachDocs";
import DateRange from "../../Form_small_componenets/completion_date/DateRange";
import { DropdownProject } from "../../Form_small_componenets/dropdown_lists/Dropdown";
import FormType from "../../Form_small_componenets/form_Type/FormType";

const members = "http://localhost:3500/members";

const AddTodoForm = ({type}) => {
   
  const [attachedDocuments,setAttachedDocuments]=useState(null)
  const [previewFileUrl,fileNames] =  usePreviewFile( attachedDocuments )
 
   const date = new Date();
   const [startDate, setStartDate] = useState(date);
   const [endDate, setEndate] = useState(date);
   const [selectedProject,setSelectedProject]=useState(null)
   const [description, setDescription] = useState("");
   const [selectedFormType,setSelectedFormType]=useState("Buisness")
  const [ idResult, setIdResult ] = useState( "[EZ]-[sofDev]-" )
  const [subTasks,setSubTasks]=useState([])
  const [ priority, setPriority ] = useState( "" );
  
   const dispatch=useDispatch()
   
 
  const newSubtask = {
    id:randomeIdStringGenerator(5,idResult),
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
 console.log(subTasks);
 
  const formType = [ "Buisness", "Personal" ]
   
  return (
    <>
       <div className="modal">
             <form className="Form element-with-scroll" onSubmit={ handleSubmit }>
             <header>
           <h6>Add New Task          
            </h6>
          {/* form types is it personal or business */}
                 <FormType  formType={formType} setSelectedFormType={setSelectedFormType} selectedFormType={selectedFormType} />
           
              <IoCloseCircleOutline className="icon" onClick={ () => dispatch( closeModal() ) } /> 
           </header>
       
          {/*available Projects to select*/ }
          {
          selectedFormType=="Buisness" && 
                 <DropdownProject
           setSelectedProject={ setSelectedProject }
          selectedProject={ selectedProject } />
             }
     
          {/* main taskdecription usinf react quill text editor */ }
          <div className="Form__textArea">
          <label>Add Main Task Discription</label>
           <ReactQuill theme="snow" value={description} onChange={setDescription} />
          </div>
       
       {/* subtasks inputs */}
          <section className="Form__Subtask">
            <label onClick={()=>addSubTask(newSubtask)} >Add Subtaks
              <CiSquarePlus
                fontSize={ 23 }
                />
             {/* { subTasks?.length > 0 && <span onClick={()=>setSubTasks([])}>clear all</span>} */}
            </label>
            <div className="Form__Subtask-Subtasks element-with-scroll">
            {/* adding subtasks based on user clicking  the plus button */ }
            {subTasks?.map( ( subTask,i ) => (
              <SubTask key={ i }   deleteSubTask={deleteSubTask} subTask={subTask} updateSubTask={updateSubTask}  />
            ))}
            </div>
          </section>
          
          {/*inputs a docs and attach to preview  */}
               <section className="Form__AttachDocuments">
                <AttachDocs setAttachedDocuments={ setAttachedDocuments } />
                {fileNames &&
                 <PreviewFile fileNames={ fileNames } setAttachedDocuments={ setAttachedDocuments } /> }
              </section>

          {/* task priorities */}
                 <Priority setPriority={setPriority} priority={priority} />

        
          {/* task completion date */}
          <DateRange setEndate={ setEndate } setStartDate={ setStartDate } />
        
        
          {/* submit form */ }
        <FormSubmitButton buttonName="Assign Task"/>
        </form>
        </div>
     </>
  );
}

export default AddTodoForm;
