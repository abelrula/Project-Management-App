import React, {  useState } from "react";
   import { IoCloseCircleOutline } from "react-icons/io5";
import ReactQuill from 'react-quill';
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
import { projectTypes, statusData } from "../../../lib/data";
 import usePreviewFile from "../../../hooks/usePreviewFile";
import PreviewFile from "../../PreviewFile/PreviewFile";
import 'react-quill/dist/quill.snow.css';
import "./assignTaskForm.css";
import Priority from "../../Form_small_componenets/priority/Priority";
import AttachDocs from "../../Form_small_componenets/attach_docs/AttachDocs";
import DateRange from "../../Form_small_componenets/completion_date/DateRange";
import { DropdownMembers, DropdownProject } from "../../Form_small_componenets/dropdown_lists/Dropdown";

  
const AssignTaskForm = () => {
 
  
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
   const [ priority, setPriority ] = useState( "" );
  const [ endDate, setEndate ] = useState( date );
  const [ startDate, setStartDate ] = useState( date );
  const [ selected, setSelected ] = useState( undefined );
   
  
  return (
    <div className="modal">
     <form className="Form" onSubmit={(e)=>e.preventDefault()} >
        <header>
           <h6>Assign New Task          
         </h6>
           <IoCloseCircleOutline className="icon" onClick={()=> dispatch(closeModal()) } /> 
       </header>
        <DropdownMembers
          setOpenEmployee={ setOpenEmployee }
          openEmployee={ openEmployee }
          selectedEmployee={ selectedEmployee }
          setOpenProject={ setOpenProject }
          setSelectedEmployee={ setSelectedEmployee }
          setJobCatagory={ setJobCatagory }
          jobCatagory={ jobCatagory }
            />
        <DropdownProject
          openProject={ openProject }
          setOpenProject={ setOpenProject }
          setOpenEmployee={ setOpenEmployee }
          setSelectedProject={ setSelectedProject }
          selectedProject={ selectedProject } />
     
       {/* main taskdecription usinf react quill text editor */}
        <div className="Form__textArea">
          <label>Add Task Discription</label>
           <ReactQuill theme="snow" value={description} onChange={setDescription} />
        </div>
      
        {/* attachung documnet inputs */ }
          <div className="Form__AttachDocuments">
            <AttachDocs setAttachedDocuments={ setAttachedDocuments } />
            { fileNames &&
              <PreviewFile fileNames={ fileNames } setAttachedDocuments={ setAttachedDocuments } /> }
          </div>
        
        {/* task priorities */ }
        <Priority setPriority={ setPriority } priority={ priority } />

       {/* assigned task completion date */}
          <DateRange setEndate={ setEndate } setStartDate={ setStartDate } />
        

        <FormSubmitButton buttonName="Assign Task"/>
      </form>
     </div>
  );
};

export default AssignTaskForm;
