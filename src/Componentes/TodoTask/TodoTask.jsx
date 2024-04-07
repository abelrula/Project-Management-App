import  { Fragment, useEffect, useRef, useState } from "react";
import { useGetTodosQuery } from "../../api/apiSlice";
import "./todoTask.css";
import UrgentTask from "../urgentTask/UrgentTask";
import TeamMembers from "../teamMembers/TeamMembers";
import CommentSection from "../commentSection/CommentSection";
// import AssignedTask from "../Assignedtask/AssignedTask";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/src/Calendar.css";
import TotalNumber from "../TotalTaskstatus/TotalNumber";
import ProjectCatagories from "../ProjectCatagories/ProjectCatagories";
import { IoChevronBack } from "react-icons/io5";
import overView from "../../data/overView";
import AssignedTask from "../Assignedtask/AssignedTask";
import TodoForm from "../TodoForm/TodoForm";
import { useLocation } from "react-router-dom";
import PieChart from "../Charts/PieChart";

const TodoTask = () => {
  // const {  isLoading } = useGetTodosQuery();
    const [active,setActive]=useState(false)
const [open,setOpen]=useState(false)
  const [ openTitle, setOpenTitle ] = useState( null )
  const [ urgent, setUrgent ] = useState( false )
  const location=useLocation()
  const date = new Date();
  console.log(urgent)
   const data = [
    {
      title: "Completed Tasks",
      value:17
    },
     {
      title: "Incompleted Tasks",
      value:45
    },
     {
      title: "OverDue Tasks",
      value:30
    },
     {
      title: "Total Tasks",
      value:120
    }
  ] 
  return (
    <>
      <div className="Dashboard">
      <div className="Dashboard_TaskStatus">
        <Calendar value={date} />
          { urgent ?
            <UrgentTask setUrgent={ setUrgent } /> :
            <AssignedTask setUrgent={ setUrgent } 
              setActive={ setActive }
              title="My tasks" footer="Add To Do" />
          }
         <PieChart />
        <div className="Dashboard_TaskCompletion-totalTaskCount">
        {data.map( ( item, i ) => (
            <TotalNumber
              key={ i }
              title={ item.title }
              value={ item.value }
              setOpenTitle={ setOpenTitle }
              setOpen={ setOpen } />
         ) )}
        </div>
         <div className="Dashboard_TaskCompletion_Project">
          <div className="Dashboard_TaskCompletion_Project-Catagori">
            <ProjectCatagories />
            <CommentSection />
          </div>
          <TeamMembers />
        </div>
      </div>
    </div>
     { active &&
       ( <div className="modal">
        <TodoForm  setActive={setActive}  />
        </div>)
      }
    </>
  );
};

export default TodoTask;
