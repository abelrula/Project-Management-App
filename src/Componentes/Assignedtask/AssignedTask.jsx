import  { useState,useEffect } from "react";
import { MdDonutLarge, MdUpdate } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdRadioButtonUnchecked } from "react-icons/md";
 import "./assignedTasks.css";
import { useLocation } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import AddTodoForm from "../AddTodoForm/AddTodoForm"


 const AssignedTask = ({ title ,footer,setActive}) => {
  const [workProgress, setWorkProgress] = useState("Upcoming");
  const [active,setActive]=useState(false)
   const [todos,setTodos]=useState([])
   const location = useLocation()
   console.log(location);
   useEffect( () =>
   {
     const fetchTodos= async ()=> {
       const res = await fetch("http://localhost:3500/todo")
       const data= await res.json()
        setTodos(data)
      }
     
      fetchTodos()
    }, [])
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
  // console.log(workProgress);
  return (
    <div className="AssignedTask">
      <span><p>{ title }</p>
        { location.pathname === "/report" ?
          <IoCloseCircleOutline className="icon" onClick={ () => setActive( false ) } /> 
          : <CiLock />
      }</span>
      <div className="AssignedTask__situation">
        <>
          <div className="AssignedTask__situation-types">
            {progressTypes.map((type, i) => (
              <li
                className={workProgress === type.title && "workProgress"}
                onClick={() => setWorkProgress(type.title)}
                key={i}
              >
                {type.icon}
                <label>{type.title}</label>
              </li>
            ))}
          </div>
          <div className="AssignedTask__situation--description">
            {workProgress === "Upcoming" && (
              <>
                <div className="AssignedTask__situation--description--list">
                  <span>
                    <MdRadioButtonUnchecked className="icon" />
                    <p>Over all the risk of the project</p>
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="avatar"
                  />
                </div>
                <div className="AssignedTask__situation--description--footer">
                  <p>tasks you assigned will appear here</p>
                  <button>Assign Task</button>
                </div>
              </>
            )}
            {workProgress === "Overdue" && (
              <>
                <div className="AssignedTask__situation--description--list">
                  <span>
                    <MdRadioButtonUnchecked className="icon" />
                    <p>Over all the risk of the project</p>
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D"
                    alt="avatar"
                  />
                </div>
                <div className="AssignedTask__situation--description--footer">
                  <p>tasks you assigned will appear here</p>
                  <button>Assign Task</button>
                </div>
              </>
            )}
            {workProgress === "Completed" && (
              <>
                <div className="AssignedTask__situation--description--list">
                  <span>
                    <MdRadioButtonUnchecked className="icon" />
                    <p>Completed all the risk of the project</p>
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="avatar"
                  />
                </div>
                <div className="AssignedTask__situation--description--footer">
                  <p>tasks you assigned will appear here</p>
                  <button onClick={()=>setActive(true)}>{footer}</button>
                </div>
              </>
            )}
          </div>
        </>
      </div>
      <div className="modal">
        <AddTodoForm setActive={setActive} />
      </div>
    </div>
  );
};

export default AssignedTask;
