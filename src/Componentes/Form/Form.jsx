import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
 import "./calander.css";
import { nanoid } from "@reduxjs/toolkit";
import { IoCloseCircleSharp } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import "./form.css";
import Calendar from "react-calendar";
import moment from "moment";
const Form = ({setActive}) => {
  const date = new Date();
  const [value, onChange] = useState(date);
   const [title, setTitle] = useState("");
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndate] = useState("");
  const [description, setDescription] = useState("");
  const [low, setLow] = useState(false);
  const [high, setHigh] = useState(false);
  const [medium, setMedium] = useState(false);
  
 const [selected, setSelected] = useState(null);
  const [tagColor, setTagColor] = useState(""); 
  const colors = ["#FFD801", "#F6BE00", "#B5EAAA", "#FAFAD2", "#FFDB58"];
  //  const dateFormat = parseISO( value )
  //  const timePeriod = formatDistanceToNow( dateFormat )
  //  console.log(medium,low,postTodo,value,title,description);
  // console.log(value.toString().slice(0, 16));
  console.log(moment(startDate).toDate());
  console.log(moment(endDate).toDate());
  // useEffect( () =>
  // {
  //      async function fetchTodo (){
  //      const response = await fetch( "http://localhost:3500/todo" )
  //      const data = await response.json()
  //      setTodos(data)
  //   }
  //   fetchTodo()
  //   },[todo])

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const id = todos.length ? todo[todos.length - 1].id+ 1 : 1;
  //   fetch( "http://localhost:3500/todo", {
  //        method: "POST",
  //        headers:{"Content-Type": "application/json" },
  //     body: JSON.stringify( {
  //         id:nanoid(),
  //         todo,
  //         completed:false,
  //         date: new Date().toISOString()
  //     } ),
  //        })
  //   setTodo("")
  // }
  //     function handleSubmit(e) {
  //     e.preventDefault()
  //   // const id = todos.length ? todo[todos.length - 1].id+ 1 : 1;
  //    postTodo({id:nanoid(),todo,completed:false})
  //    setTodo("")
  // }
  function handleSubmit(e) {
    e.preventDefault();
    // postTodo({
    //   id: nanoid(),
    //   title: title,
    //   description: description,
    //   low: low,
    //   buisness: medium,
    //   completed: false,
    //   tagColor: tagColor,
    //   date: value.toString().slice(0, 16),
    //   createdAt: new Date(),
    // });
  //   const {name,value} =e.target
  //   setForm( ( prev ) =>
  //   (
  //     {...prev,
  //     [name]:value
  //     })
  //   )
  }

  return (
    <>
      <form className="Form" onSubmit={ handleSubmit }>
        <h2>Add New Scheduals</h2>
        {/* <div>
          <input
            type="text"
            value={title}
            id="title"
            className="Form__input"
            onChange={(e) => setTitle(e.target.value)}
            placeholder=""
          />
        </div> */}
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
              setLow((prev) => !prev);
              setMedium(false);
              setHigh(false);
              setSelected("low");
            }}
            className="Form__type-all Form__type-low"
            style={{
              background: selected === "low" && "#ddd461",
              color: selected === "low" && "white",
            }}
          >
            Low
          </div>
          <div
            onClick={() => {
              setMedium((prev) => !prev);
              setSelected("medium");
              setHigh(false);
              setLow(false);
            }}
            className="Form__type-all Form__type-medium"
            style={{
              background: selected === "medium" && "#708aff",
              color: selected === "medium" && "white",
            }}
          >
            Medium
          </div>
           <div
            onClick={() => {
              setHigh((prev) => !prev);
              setSelected("high");
              setMedium(false);
              setLow(false);
            }}
            className="Form__type-all Form__type-high"
            style={{
              background: selected === "high" && "#ff0000",
              color: selected === "high" && "white",
            }}
          >
            High
          </div>
        </div>
        <div className="Form__date">
          <Calendar value={value} onChange={onChange} />
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

export default Form;
