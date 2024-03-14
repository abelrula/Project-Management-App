import  { useState,useEffect } from "react";
import { MdDonutLarge, MdUpdate } from "react-icons/md";
import { RiCheckboxCircleFill, RiProfileFill } from "react-icons/ri";
import { MdRadioButtonUnchecked } from "react-icons/md";
 import "./assignedTasks.css";
import { useLocation } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import AddTodoForm from "../AddTodoForm/AddTodoForm"
import img1 from "../../assets/worker1.jpg"
import {AiFillRightCircle, AiOutlineProfile } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

   const AssignedTask = ({title,setUrgent,footer,setActive}) => {
   const [todoStatus, setTodoStatus] = useState("Upcoming");
   const [todos,setTodos]=useState([])
     const location = useLocation()
     let filterdData="completed"
   useEffect( () =>
   {
     const fetchTodos= async ()=> {
       const res = await fetch("http://localhost:3500/todo")
       const data = await res.json()
       console.log(data);
       todoStatus === "Completed" ? filterdData = data.filter( ( item ) => item.completed === true ):
        todoStatus === "Overdue"  ?  filterdData=data.filter((item)=> new Date(`${item.date}`).getTime() < new Date().getTime()) :
        filterdData=data.filter((item)=>new Date(`${item.date}`).getTime() > new Date().getTime())
        setTodos(filterdData)
      }
      fetchTodos()
    }, [todoStatus])
    console.log(todos);
  const progressTypes = [
    {
      icon: <MdUpdate fill="#d7a66f" />,
      title: "Upcoming",
    },
    {
      icon: <MdDonutLarge fill="#d7a66f" />,
      title: "Overdue",
    },
    {
      icon: <RiCheckboxCircleFill fill="#d7a66f" />,
      title: "Completed",
    },
  ];
  function handleComplete (e,id){
     
    e.preventDefault();
     fetch( `http://localhost:3500/todo/${id}`, {
      method: "PATCH",
      headers:{"Content-Type": "application/json" },
      body: JSON.stringify( {
          completed:e.target.checked,
      } )
    })
  }
  // console.log(workProgress);
  return (
    <><div className="AssignedTask">
      <span>
        <p>{ title } </p>
        { location.pathname === "/report" ?
          <IoCloseCircleOutline className="icon" onClick={ () => setActive( false ) } /> 
          : <CiLock />
        } <button className="AssignedTask_Button" onClick={()=>setUrgent(true)}>see urgent <AiFillRightCircle className="icon" /></button>
      </span>
      <div className="AssignedTask__situation">
          <div className="AssignedTask__situation-types">
            {progressTypes.map((type, i) => (
              <li
                className={todoStatus === type.title && "workProgress"}
                onClick={() => setTodoStatus(type.title)}
                key={ i }
              >
                {type.icon}
                <label>{type.title}</label>
              </li>
            ))}
          </div>
          <div className="AssignedTask__situation--description">
              {todos?.map((item,i)=>(
                 <div className="AssignedTask__situation--description--list" key={i}>
                  <span>
                   <input type="checkbox" value={item.completed} onChange={(e)=>handleComplete(e,item.id)} />
                    <p>{item.description?.length > 26 ? `${item.description.substring(0,26)}...` : item.description }</p>
                  </span>
                { location.pathname === "/report" ?
                  <img
                    src= {img1} 
                    alt="avatar"s
                  /> : <IoPersonOutline />}
                  </div>
                  ))}
                <div className="AssignedTask__situation--description--footer">
                  <p>tasks you assigned will appear here</p>
                  <button onClick={()=>setActive(true)}>{footer}</button>
                </div>
           </div>
      </div>
    </div>
    </>
  );
};

export default AssignedTask;
