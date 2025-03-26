import React, { useState } from "react";
 import { IoCloseCircleSharp } from "react-icons/io5";
import { closeModal } from "../../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import "./schedulesForm.css";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import ColorTags from "../../Form_small_componenets/Color_tags/ColorTags";
import DateRange from "../../Form_small_componenets/completion_date/DateRange";
import FormType from "../../Form_small_componenets/form_Type/FormType";
 
  const formType = [ "Buisness", "Personal" ]

const SchedulesForm = () => {
   const date = new Date();
  const dispatch = useDispatch()
     const [startDate, setStartDate] = useState(date);
      const [selectedFormType,setSelectedFormType]=useState("Buisness")
   const [endDate, setEndate] = useState(date);
   const [description, setDescription] = useState("");
   const [schedualType, setSchedualType] = useState(false);
   const [tagColor, setTagColor] = useState(""); 
  
   // post method for schedual form
  function handleSubmit ( e )
  {
    e.preventDefault();
    fetch( "http://localhost:3500/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {
        title:description,
        start:startTime,
        end: endTime,
        type:schedualType
      } )
    } )
    setEndTime("")
    setStartTime("")
    setDescription("")
    setTagColor("")
    setSchedualType(false)
  }

  return (
    <>
      <div className="modal">
        <form className="Form" onSubmit={ handleSubmit }>
        <header  >
        <h6>Add New Scheduals</h6>
        <IoCloseCircleSharp fontSize={27}  className="icon" onClick={() => dispatch(closeModal())}/>
        </header>
       
       {/* schedule decription using react quill text editor */}
          <div className="Form__textArea">
          <label>Add Scheduals desc</label>
           <ReactQuill theme="snow" value={description} onChange={setDescription} />
          </div>
         
      
       {/* scheduale  date */}
          <DateRange dateType="datetime-local" setEndate={ setEndate } setStartDate={ setStartDate } />
         
        {/* types of schedual for myself or work */}
                <FormType  formType={formType} setSelectedFormType={setSelectedFormType} selectedFormType={selectedFormType} />
           
         {/* select tag color */ }
          <ColorTags tagColor={tagColor} setTagColor={ setTagColor } />
          
        <FormSubmitButton buttonName="Add To Scheduals"/>
      </form>
      </div>
     </>
  );
};

export default SchedulesForm;
