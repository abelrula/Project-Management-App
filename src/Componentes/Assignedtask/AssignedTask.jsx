import  { useState,useEffect } from "react";
import { MdDonutLarge, MdUpdate } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
 import { CiLock } from "react-icons/ci";
import img1 from "../../assets/worker1.jpg"
import ProfileImage from "../ProfileImage/ProfileImage";
import { useLocation } from "react-router-dom";
import "./assignedTasks.css";
import AddButton from "../Buttons/AddButton/AddButton";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../Forms/AddTodoForm/AddTodoForm";
import { openModal } from "../../redux/slices/modalSlice";
 


   const AssignedTask = ({title,setUrgent,footer,setActive}) => {
   const [todoStatus, setTodoStatus] = useState("Upcoming");
     const [ todos, setTodos ] = useState( [] )
     const {modalType,toggled}=useSelector(state=>state.modal)
     const { pathname } = useLocation()
     const dispatch =useDispatch()
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
    
     const Onclick = () => dispatch( openModal( { modalType: "AddTask", toggled: true } ) )
  // console.log(workProgress);
  return (
    <><div className="AssignedTask">
      <span className="AssignedTask__header">
        <h3>{ title } </h3>
        {pathname === "/report" ?
          <IoCloseCircleOutline  className="icon" onClick={ () => setActive( false ) } /> 
          : <CiLock className="icon" />
        } { pathname !== "/report"  && <button className="seeMorebutton"  onClick={()=>setUrgent(true)}> <span>see urgent</span> </button>}
      </span>
      <div className="AssignedTask__situation">
          <div className="AssignedTask__situation-types">
            {progressTypes.map((type, i) => (
              <li
                className={todoStatus === type.title ? "workProgress" : undefined}
                onClick={() => setTodoStatus(type.title)}
                key={ i }
              >
                {type.icon}
                <label>{type.title}</label>
              </li>
            ))}
          </div>
          <div className="AssignedTask__situation--description element-with-scroll">
              {todos?.map((item,i)=>(
                 <div className="AssignedTask__situation--description--list" key={i}>
                { location.pathname === "/report" ?
                  <img
                  src= {img1} 
                  alt="avatar"s
                  /> : <ProfileImage name="Abel Zewdu"/>}
                  <span>
                   <input type="checkbox" value={item.completed} onChange={(e)=>handleComplete(e,item.id)} />
                    <p>{item.description?.length > 32 ? `${item.description.substring(0,28)}...` : item.description }</p>
                  </span>
                  </div>
                  ))}
               <AddButton Onclick={Onclick} name={footer} />
           </div>
      </div>
    </div>
      {modalType==="AddTask" && toggled=== true && <AddTodoForm /> }
    </>
  );
};

export default AssignedTask;
