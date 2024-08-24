import React, { useState } from "react";
import { HiCalendar } from "react-icons/hi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
 import { IoCloseCircleOutline } from "react-icons/io5";
import ReactQuill from 'react-quill';
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
import { projectTypes, statusData } from "../../../lib/data";
import 'react-quill/dist/quill.snow.css';
import "./assignTaskForm.css";

  
const AssignTaskForm = () => {
  const date = new Date();
  const dispatch =useDispatch()
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndate] = useState(date);
  const [description, setDescription] = useState("");
  const [selectedProject,setSelectedProject]=useState("")
  const [selectedEmployee,setSelectedEmployee]=useState("")
  const [openProject,  setOpenProject]=useState(false)
  const [openEmployee,setOpenEmployee]=useState(false)
  const [jobCatagory,setJobCatagory]=useState("")
  const [ priority, setPriority ] = useState( "" );
  const [attachedDocuments,setAttachedDocuments]=useState(null)
  
   const members = "http://localhost:3500/members";
  const [ value, setValue ] = useState( '' );
   const [ selected, setSelected ] = useState( null );
  const [member, setMember] = useState([]);
  
  // fetching memeber from json
  
   
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3500/AssignedProjects",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
       task:description,
       project:selectedProject,
       assignedTo: selectedEmployee,
       jobCatagory: jobCatagory,
       document:attachedDocuments,
       startDate,
       endDate,
       priority,
       status:"not Started",
       duration:"",
       progressPercent:""
      })
    })
   }

  return (
    <div className="modal">
  <form className="Form" onSubmit={ handleSubmit }>
        <header>
           <h6>Assign New Task          
         </h6>
           <IoCloseCircleOutline className="icon" onClick={()=> dispatch(closeModal()) } /> 
       </header>
         <div className="employeContainer">
            <label>Select Employee you want to assign 
            { !openEmployee && <FaArrowDown className="icon"
              onClick={ () =>
              {
                setOpenEmployee( true );
                setOpenProject( false )
              } } /> }
            { openEmployee && <FaArrowUp className="icon"
              onClick={ () => setOpenEmployee( false ) } /> }
            </label>
          <div className="employeContainer_members"> 
           <span
           onClick={ () => setOpenEmployee((prev)=>!prev)}
           >{ selectedEmployee !== null  ? `${selectedEmployee}: ${jobCatagory}`  : "selected employee none"}</span> 
          { openEmployee && member.map((employee,i)=>(
           <div
             key={ i } 
              onClick={ () =>{
                setSelectedEmployee( employee.name );
                setOpenEmployee( false );
                setJobCatagory(employee.jobCatagory)
              } }
              className="employeContainer_members-employe"
           >
              <div>
                <img src={ employee.profile } alt="profile" />
            <h4>
              {employee.name}
            </h4>
            </div>
            <p>{employee.jobCatagory}</p>
            </div>
        ) ) }
          </div>
        </div>
        <div className="project">
            <label>select a project you want to assign 
            {!openProject &&<FaArrowDown className="icon" onClick={ () => {setOpenProject(true); setOpenEmployee(false)}} />}
            {openProject &&<FaArrowUp className="icon" onClick={ () => setOpenProject(false)} />}
            </label>
          <div className="project_types"> 
           <span 
           onClick={ () => setOpenProject((prev)=>!prev)}
           >{ selectedProject !== null  ? selectedProject  : "selected project none"}</span> 
          { openProject && projectTypes.map((item,i)=>(
           <div
             key={ i } 
              onClick={ () => { setSelectedProject( item.title ); setOpenProject(false)
}}
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
        <div className="Form__textArea">
          <label>Add Task Discription</label>
           <ReactQuill theme="snow" value={value} onChange={setDescription} />
        </div>
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
        <div className="Form__priorities">
          <label>Select The Priority</label>
          <div className="Form__priorites">
            { statusData.map( ( item, i ) => (
          <span
           onClick={()=>setSelected(item.status)}
            className={ `Form__priorites-priority ${ item.status }` }
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
        <FormSubmitButton buttonName="Assign Task"/>
      </form>
     </div>
  );
};

export default AssignTaskForm;
