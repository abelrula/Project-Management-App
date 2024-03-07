import React, { useState,useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
 import { IoCloseCircleSharp } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import { nanoid } from "@reduxjs/toolkit";
import "./todoForm.css";
 import moment from "moment";
const TodoForm = ({setActive}) => {
  const date = new Date();
   const [startDate, setStartDate] = useState("");
   const [description, setDescription] = useState("");
  const [personal, setPersonal] = useState(false);
  const [buisness, setBuisnes] = useState(false);
  const [todos,setTodos]=useState([])
 const [selected, setSelected] = useState(null);
  const [tagColor, setTagColor] = useState(""); 
   const colors = [ "#ff6161", "#39a8f7","#5e9197ab","#cd895f91","#930cc29e","#cdb15fc4","yellow" ];

  console.log(startDate)
  // console.log( moment( endDate ).toDate() );
    useEffect( () =>
  {
       async function fetchTodo (){
       const response = await fetch( "http://localhost:3500/todo" )
       const data = await response.json()
       setTodos(data)
    }
    fetchTodo()
    },[])
   
  function handleSubmit ( e )
  {
    e.preventDefault();
    const id = todos.length ? todos[todos.length - 1].id+ 1 : 1;
     fetch( "http://localhost:3500/todo", {
      method: "POST",
     headers:{"Content-Type": "application/json" },
     body: JSON.stringify( {
       id: nanoid(),
         description,
         buisness,
         personal,
         tagColor,
         completed:false,
         date:startDate,
         createdAt:startDate
      } )

    })
     setBuisnes ( null )
    setDescription ("" )
    setTagColor("")
    setStartDate("")
     
  }
   console.log(todos);
  return (
    <>
      <form className="TodoForm" onSubmit={ handleSubmit }>
        <div className="TodoForm_header">
        <h2>Add New Todo</h2>
        <IoCloseCircleSharp fontSize={27}  className="icon" onClick={()=>setActive(false)}/>
        </div>
        <div>
          <h2>Add Todos</h2>
          <textarea
            type="text"
            id="description"
            value={description}
            className="TodoForm__textarea"
            onChange={(e) => setDescription(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="TodoForm__type">
          <div
            onClick={() => {
              setPersonal((prev) => !prev);
              setBuisnes(false);
              setSelected("personal");
            }}
            className="TodoForm__type--all SchedualForm__type--personal"
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
            className="TodoForm__type--all TodoForm__type--buisness"
            style={{
              background: selected === "buisness" && "#183de2",
              color: selected === "buisness" && "white",
            }}
          >
            Buisness
          </div>
        </div>
        <div className="TodoForm__date">
            <label>
           Select Completion Date
            </label>
            <input type="date" onChange={ ( e ) => setStartDate( e.target.value ) } />
        </div>
        <div className="TodoForm__tags">
          <h3>Select Tag :</h3>
          <div>
          { colors.map( ( color ) => (
            <div className="TodoForm__tag">
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
        <button type="submit" className="TodoForm__button">
             <AiFillPlusCircle className="icon" />
         </button>
      </form>
      {/* <Outlet /> */}
    </>
  );
};

export default TodoForm;
