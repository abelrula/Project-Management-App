import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
 import { IoCloseCircleSharp } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import { GiLevelTwo } from "react-icons/gi";
import { closeModal } from "../../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import "./schedulesForm.css";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";


const SchedulesForm = () => {
   const date = new Date();
  const dispatch = useDispatch()
   const [startTime, setStartTime] = useState("");
   const [endTime, setEndTime] = useState("");
   const [description, setDescription] = useState("");
   const [schedualType, setSchedualType] = useState(false);
   const [tagColor, setTagColor] = useState(""); 
   const colors = [ "#ff6161", "#39a8f7","#5e9197ab","#cd895f91","#930cc29e","#cdb15fc4","yellow" ];
  
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
        <form className="SchedualForm" onSubmit={ handleSubmit }>
        <div className="SchedualForm_header">
        <h2>Add New Scheduals</h2>
        <IoCloseCircleSharp fontSize={27}  className="icon" onClick={() => dispatch(closeModal())}/>
        </div>
       <div className="Form__textArea">
          <label>Add Scheduels desc</label>
           <ReactQuill theme="snow" value={description} onChange={setDescription} />
        </div>
        <div className="SchedualForm__date">
          {/* <Calendar value={value} onChange={onChange} /> */}
          <div>
            <label>
              <HiCalendar className="calanderIcon" />Start Time
            </label>
            <input type="datetime-local" onChange={ ( e ) => setStartTime( e.target.value ) } />
           </div>
           <GiLevelTwo size={20} />
             <div>
            <label>
              <HiCalendar className="calanderIcon" />End Time
            </label>
            <input type="datetime-local" onChange={ ( e ) => setEndTime( e.target.value ) } />
          </div>
        </div>
         <div className="TodoForm__type">
          <div
            onClick={() => {
              setSchedualType("personal");
            }}
            className="TodoForm__type--all SchedualForm__type--personal"
            style={{
              background: schedualType === "personal" && "#183de2",
              color: schedualType === "personal" && "white",
            }}
          >
            Personal
          </div>
          <div
            onClick={() => {
              setSchedualType("buisness");
            }}
            className="TodoForm__type--all TodoForm__type--buisness"
            style={{
              background: schedualType === "buisness" && "red",
              color: schedualType === "buisness" && "white",
            }}
          >
            Buisness
          </div>
        </div>
        <div className="SchedualForm__tags">
          <label>Select Tag :</label>
          <div>
          { colors.map( ( color ) => (
            <div className="SchedualForm__tag">
              <div
                className="tag"
                onClick={() => setTagColor(color)}
                style={{
                  background: `${color}`,
                  border: tagColor === color ? "2px solid black" : "none",
                }}
              ></div>
            </div>
          ))}
        </div>
        </div>
        <FormSubmitButton buttonName="Add To Scheduals"/>
      </form>
      </div>
     </>
  );
};

export default SchedulesForm;
