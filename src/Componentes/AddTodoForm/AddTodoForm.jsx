import React, { useState ,useEffect} from "react";
 import "./addTodoForm.css";
import { HiCalendar } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
   import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import projectTypes from "../../data/projectTypes";
const AddTodoForm = ({setOpenModal}) => {
  const date = new Date();
     const [startDate, setStartDate] = useState(date);
   const [endDate, setEndate] = useState(date);
  const [description, setDescription] = useState("");
  const [selectedProject,setSelectedProject]=useState(null)
  const [selectedEmployee,setSelectedEmployee]=useState(null)
  const [openProject,  setOpenProject]=useState(false)
  const [openEmployee,setOpenEmployee]=useState(false)
 const [jobCatagory,setJobCatagory]=useState(null)
  const [ selected, setSelected ] = useState( null );
  const [attachedDocuments,setAttachedDocuments]=useState(null)
  
   const members = "http://localhost:3500/members";
  const [member, setMember] = useState([]);
  useEffect(() => {
    async function fetchMembers() {
      const data = await fetch(members);
      const res = await data.json();
      setMember(res);
    }
    fetchMembers();
  }, []);
   j
  function handleSubmit(e) {
    e.preventDefault();
  }
 const data=[
            {
              status:"low",
            classname:"Form__type-low",
            background:"#ddd461",
            },
             {
               status:"medium",
            classname:"Form__type-medium",
            background:"#708aff",
            },
             {
               status:"high",
            classname:"Form__type-high",
            background:"#ff0000",
            },
  ]
   console.log(selectedProject)
   console.log(selectedProject)
  return (
    <>
      <form className="Form" onSubmit={ handleSubmit }>
         <h2>Assign New Task          
           <IoCloseCircleOutline className="icon" onClick={ () => setOpenModal( false ) } /> 
</h2>
         <div className="employeContainer">
            <label>select which Employee you want to assign 
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
           >{ selectedEmployee !== null  ? `${selectedEmployee} :--    ${jobCatagory}`  : "---------------"}</span> 
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
            <label>select In which project you want to assign 
            {!openProject &&<FaArrowDown className="icon" onClick={ () => {setOpenProject(true); setOpenEmployee(false)}} />}
            {openProject &&<FaArrowUp className="icon" onClick={ () => setOpenProject(false)} />}
            </label>
          <div className="project_types"> 
           <span 
           onClick={ () => setOpenProject((prev)=>!prev)}
           >{ selectedProject !== null  ? selectedProject  : "---------------"}</span> 
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
          <textarea
            type="text"
            id="description"
            value={description}
             onChange={(e) => setDescription(e.target.value)}
            placeholder=""
          />
        </div>
          <div className="Form__AttachDocuments">
          <label>Attach Documents</label>

          <input
            type="file"
            id="documents"
            value={attachedDocuments}
             onChange={(e) => setAttachedDocuments(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="Form__type">
          <label>Select The Priority</label>
        { data.map( ( item, i ) => (
          <div
           onClick={()=>setSelected(item.status)}
            className={`Form__type-all ${ item.classname }` }
            key={i}
            style={ {
              background: selected ===item.status && item.background,
              color:selected ==item.status && "white" }} >
             {item.status}
       </div>
       ))}
        </div>
        <div className="Form__date">
          {/* <Calendar value={value} onChange={onChange} /> */}
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
        
        <button type="submit" className="Form__button">
          <p>Assign Task</p>
        </button>
      </form>
     </>
  );
};

export default AddTodoForm;
