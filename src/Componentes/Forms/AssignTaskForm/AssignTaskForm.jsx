 import React, { useRef, useState } from "react";
import { HiCalendar } from "react-icons/hi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
 import { IoCloseCircleOutline } from "react-icons/io5";
import ReactQuill from 'react-quill';
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
import { projectTypes, statusData } from "../../../lib/data";
 import { useEffect } from "react";
import usePreviewFile from "../../../hooks/usePreviewFile";
import PreviewFile from "../../PreviewFile/PreviewFile";
 
import 'react-quill/dist/quill.snow.css';
import "./assignTaskForm.css";

  
const AssignTaskForm = () => {
  
  
  // targeting Documents inputs to open onclick purpose
  const docRef=useRef()
  const dispatch = useDispatch()

  const [ attachedDocuments, setAttachedDocuments ] = useState( [] )
  
  //hook returning selected files as Obj-Url and names of selected attachedDocuments 
  const [previewFileUrl,fileNames] =  usePreviewFile( attachedDocuments )
  
 
  const [selectedProject,setSelectedProject]=useState("")
  const date = new Date();
  const [selectedEmployee,setSelectedEmployee]=useState("")
  const [openProject,  setOpenProject]=useState(false)
  const [openEmployee,setOpenEmployee]=useState(false)
  const [jobCatagory,setJobCatagory]=useState("")
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([]);
  const [ priority, setPriority ] = useState( "" );
  const [ endDate, setEndate ] = useState( date );
  const [ startDate, setStartDate ] = useState( date );
  const [ selected, setSelected ] = useState( undefined );
  
  
  
   
  // console.log(previewFile);
  
  // fetching memeber from json
  useEffect( () =>
  {
    async function fetchMembers  ( e )
  {
    const res = await fetch( "http://localhost:3500/members" )
    const data = await res.json()
      setMembers( data )
   console.log(members);
      
    }
    fetchMembers()
 },[])
  //  console.log(members);
   
   
  
    
  
  return (
    <div className="modal">
     <form className="Form" onSubmit={(e)=>e.preventDefault()} >
 
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
           { openEmployee && members.map((employee,i)=>(
 
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
            <ReactQuill theme="snow" value={description} onChange={setDescription} />
        </div>
        <div className="Form__AttachDocuments">
          <label htmlFor="documents">Attach Documents</label>
          <button className="seeMoreButton" onClick={()=>docRef.current.click()}  ><span>Upload File</span></button>
          <input
            type="file"
            id="documents"
            ref={docRef}
            onChange={(e) =>setAttachedDocuments( e.target?.files)  }
            style={ { display: "none" } }
            multiple
          />
          {/*previewing selected files  */}
           <PreviewFile fileNames={fileNames} />
 
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
