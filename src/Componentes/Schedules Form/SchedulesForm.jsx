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
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndate] = useState("");
  const [description, setDescription] = useState("");
  const [personal, setPersonal] = useState(false);
  const [buisnes, setBuisnes] = useState(false);
  
 const [selected, setSelected] = useState(null);
  const [tagColor, setTagColor] = useState(""); 
  const colors = ["#FFD801", "#F6BE00", "#B5EAAA", "#FAFAD2", "#FFDB58"];
  console.log(moment(startDate).toDate());
  console.log(moment(endDate).toDate());
  function handleSubmit(e) {
    e.preventDefault();
  
  }

  return (
    <>
      <form className="Form" onSubmit={ handleSubmit }>
        <div className="Form_header">
        <h2>Add New Scheduals</h2>
        <IoCloseCircleSharp fontSize={27}  className="icon" onClick={()=>setActive(false)}/>
        </div>
        <div>
          <textarea
            type="text"
            id="description"
            value={description}
            className="Form__textarea"
            onChange={(e) => setDescription(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="Form__type">
          <div
            onClick={() => {
              setPersonal((prev) => !prev);
              setBuisnes(false);
              setSelected("personal");
            }}
            className="Form__type--all Form__type--personal"
            style={{
              background: selected === "personal" && "#183de2",
              color: selected === "personal" && "white",
            }}
          >
            Personal
          </div>
          <div
            onClick={() => {
              setBuisnes((prev) => !prev);
              setSelected("buisness");
              setPersonal(false);
            }}
            className="Form__type--all Form__type--buisness"
            style={{
              background: selected === "buisness" && "#183de2",
              color: selected === "buisness" && "white",
            }}
          >
            Buisness
          </div>
        </div>
        <div className="Form__date">
          {/* <Calendar value={value} onChange={onChange} /> */}
          <div>
          <HiCalendar className="calanderIcon" />
            <label>start date</label> <input type="date" onChange={ ( e ) => setStartDate( e.target.value ) } />
          </div>
          <div>
           <HiCalendar className="calanderIcon" />
            <label>start date</label>  <input type="date" onChange={ ( e ) => setEndate( e.targt.value ) } />
          </div>
        </div>
        <div className="Form__tags">
          <h3>Select Tag :</h3>
          {colors.map((color) => (
            <div className="Form__tag">
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
        <button type="submit" className="Form__button">
          <p>Add To Do List</p>{" "}
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
