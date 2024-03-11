import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
 import { nanoid } from "@reduxjs/toolkit";
import { IoCloseCircleSharp } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import "./schedulesForm.css";
import { GiLevelTwo } from "react-icons/gi";
import Calendar from "react-calendar";
import moment from "moment";
const SchedulesForm = ({setActive}) => {
   const date = new Date();
   const [schedualTime, setSchedualTime] = useState("");
   const [startTime, setStartTime] = useState("");
   const [endTime, setEndTime] = useState("");
   const [description, setDescription] = useState("");
   const [tagColor, setTagColor] = useState(""); 
   const colors = [ "#ff6161", "#39a8f7","#5e9197ab","#cd895f91","#930cc29e","#cdb15fc4","yellow" ];
  //  console.log(moment(schedualTime).toDate())
  function handleSubmit ( e )
  {
    e.preventDefault();
    fetch( "http://localhost:3500/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {
        title:description,
        start:startTime,
        end:endTime,
      } )
    } )
    setActive(false)
    setEndTime("")
    setStartTime("")
    setDescription("")
    setTagColor("")
  }

  return (
    <>
      <form className="SchedualForm" onSubmit={ handleSubmit }>
        <div className="SchedualForm_header">
        <h2>Add New Scheduals</h2>
        <IoCloseCircleSharp fontSize={27}  className="icon" onClick={()=>setActive(false)}/>
        </div>
        <div>
          <label>Add Events</label>
          <textarea
            type="text"
            id="description"
            value={description}
            className="SchedualForm__textarea"
            onChange={(e) => setDescription(e.target.value)}
            placeholder=""
          />
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
        <button type="submit" className="SchedualForm__button">
          <p>Add To Do List</p>
          <div>
            <AiFillPlusCircle />
          </div>
        </button>
      </form>
      {/* <Outlet /> */}
    </>
  );
};

export default SchedulesForm;
