import React, { useState ,useEffect} from "react";
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

const members = "http://localhost:3500/members";

const AddTodoForm = ({type}) => {
   
   const date = new Date();
   const [startDate, setStartDate] = useState(date);
   const [endDate, setEndate] = useState(date);
    const [selectedProject,setSelectedProject]=useState(null)
    const [description, setDescription] = useState("");
    const [openProject,  setOpenProject]=useState(false)
   const [ selected, setSelected ] = useState( null );
   const [selectedFormType,setSelectedFormType]=useState("Buisness")
   const [addSubTasksNum,setAddSubTasksNum]=useState(0)
   const [attachedDocuments,setAttachedDocuments]=useState(null)
   const dispatch=useDispatch()
    
   const [ subTasks, setSubTasks ] = useState( [{
       task: "",
       startDate: "",
       endDate: "",
       priority:""
      }
    ])
  
   function handleSubmit(e) {
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
           </div>}
       {/* main taskdecription usinf react quill text editor */}
          <div className="Form__textArea">
          <label>Add Main Task Discription</label>
           <ReactQuill theme="snow" value={description} onChange={setDescription} />
          </div>
       
       {/* subtasks inputs */}
          <div className="Form__Subtasks">
            <label>Add Subtaks <CiSquarePlus fontSize={ 23 } onClick={()=>setAddSubTasksNum((prev)=>prev + 1 )} /></label>
            {/* adding subtasks based on user clicking  the plus button */ }
            { Array.from( { length: addSubTasksNum } ).map( ( i ) => (
              <div className="Form__Subtasks__inputs">
                <IoIosClose className="Form__Subtasks__inputs-closeIcon" onClick={()=>setAddSubTasksNum(prev=>prev-1)} />
              <div >
                <label htmlFor="">task { addSubTasksNum }<textarea></textarea></label>
              <label htmlFor="">start on<input type="date" /></label>
              <label htmlFor="">end date<input type="date" /></label>
              </div>
              <div className="Form__Subtasks__priorites">
                <label htmlFor="">status</label> 
                { statusData.map( ( item, i ) => (
                <span
                   onClick={()=>setSelected(item.status)}
                   className={`Form__Subtasks__priorites-priority ${ item.status }` }
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
            ))}
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
