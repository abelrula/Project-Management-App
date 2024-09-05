import React, { useState,useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
 import { IoCloseCircleSharp } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import { nanoid } from "@reduxjs/toolkit";
import "./todoForm.css";
import moment from "moment";
 import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
const TodoForm = ({setActive}) => {
  const date = new Date();
  const dispatch = useDispatch()
   const [startDate, setStartDate] = useState("");
   const [description, setDescription] = useState("");
  const [ value, setValue ] = useState( '' );
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
     fetch( "http://localhost:3500/todo", {
      method: "POST",
     headers:{"Content-Type": "application/json" },
     body: JSON.stringify( {
       id: nanoid(),
         description,
         selected,
         tagColor,
         completed:false,
         status:"" || false,
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
   const todoType=["business","personal"]
  return (
    <>
      <form className="TodoForm" onSubmit={ handleSubmit }>
         <div  className="Form-header">
          <h2>Add New Task</h2>
          <IoCloseCircleSharp fontSize={ 27 } onClick={ () => dispatch( closeModal() ) } />
         </div>
         <div>
          <label>Add Todos</label>
                     <ReactQuill theme="snow" value={value} onChange={setValue} />
         </div>
        <div className="TodoForm__type">
          <div
            onClick={() => {
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
              setSelected("buisness");
            }}
            className="TodoForm__type--all TodoForm__type--buisness"
            style={{
              background: selected === "buisness" && "red",
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
          <label>Select Tag :</label>
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
        <FormSubmitButton buttonName="Assign Task" />
      </form>
      {/* <Outlet /> */}
    </>
  );
};

export default TodoForm;
