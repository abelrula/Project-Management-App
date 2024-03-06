import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
 import { nanoid } from "@reduxjs/toolkit";
import { IoCloseCircleSharp } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import "./schedulesForm.css";
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
console.log(startTime,endTime)
console.log(moment(schedualTime).toDate())
  function handleSubmit ( e )
  {
    e.preventDefault();
    fetch( "http://localhost:3500/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {
        id: nanoid(),
        description,
        startTime,
        endTime,
        tagColor,
      } )
    } )
  }

  return (
    <>
      <form className="SchedualForm" onSubmit={ handleSubmit }>
        <div className="SchedualForm_header">
        <h2>Add New Scheduals</h2>
        <IoCloseCircleSharp fontSize={27}  className="icon" onClick={()=>setActive(false)}/>
        </div>
        <div>
          <h2>Add Events</h2>
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
              <HiCalendar className="calanderIcon" />On Date
            </label>
            <input type="date" onChange={ ( e ) => setSchedualTime( e.target.value ) } />
          </div>
          <div>
            <label>
              <HiCalendar className="calanderIcon" />Start Time
            </label>
            <input type="time" onChange={ ( e ) => setStartTime( e.target.value ) } />
          </div>
             <div>
            <label>
              <HiCalendar className="calanderIcon" />End Time
            </label>
            <input type="time" onChange={ ( e ) => setEndTime( e.target.value ) } />
          </div>
        </div>
        <div className="SchedualForm__tags">
          <h3>Select Tag :</h3>
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
