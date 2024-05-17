import  { Fragment, useEffect, useRef, useState } from "react";
import { useGetTodosQuery } from "../../api/apiSlice";
import "./dashboard.css";
import UrgentTask from "./urgentTask/UrgentTask";
import TeamMembers from "./teamMembers/TeamMembers";
import CommentSection from "./commentSection/CommentSection";
// import AssignedTask from "../Assignedtask/AssignedTask";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/src/Calendar.css";
  import { IoChevronBack } from "react-icons/io5";
import overView from "../../data/overView";
import AssignedTask from "../Assignedtask/AssignedTask";
 import { useLocation } from "react-router-dom";
import { IssuePieChart, TaskPieChart } from "../Charts/PieChart";
import { CiSquareCheck } from "react-icons/ci";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";
import { GiLevelEndFlag } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { RiPassExpiredLine } from "react-icons/ri";
import { MdOutlineTaskAlt } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import IssueSection from "./IssueSection/IssueSection";
import Events from "./Events/Events";
import TotalNumber from "./TotalTaskstatus/TotalNumber";
import Projects from "./Projects/Projects";
import TodoForm from "../Forms/TodoForm/TodoForm";

const Dashboard = () => {
  // const {  isLoading } = useGetTodosQuery();
    const [active,setActive]=useState(false)
const [open,setOpen]=useState(false)
  const [ openTitle, setOpenTitle ] = useState( null )
  const [ urgent, setUrgent ] = useState( false )
  const location=useLocation()
  const date = new Date();
  const icons=["BsListTask","MdOutlineTaskAlt","FaTasks","RiPassExpiredLine","GoIssueOpened","AiOutlineIssuesClose","GiLevelEndFlag","GiLevelEndFlag"]
  console.log(urgent)
  const data = [
    {
      title: "Open Tasks",
      value:17,
      color:"green",
      icon:<BsListTask className="icon"/>
    },
     {
      title: "Closed Tasks",
      value:45,
      color:"red",
      icon:<MdOutlineTaskAlt  className="icon"/>
    },
     
     {
      title: "Total Tasks",
      value:12,
      color:"black",
      icon:<FaTasks  className="icon"/>
    },
    {
      title: "OverDue Tasks",
      value:30,
      color:"blue",
      icon:<RiPassExpiredLine  className="icon"/>
    },
    {
      title: "Opened Issue",
      value:0,
      color:"black",
      icon:<GoIssueOpened  className="icon"/>
    }
    ,
     {
      title: "Closed Issue",
      value:12,
      color:"black",
      icon:<AiOutlineIssuesClose  className="icon"/>
    },
     {
      title: "Open Phase",
      value:7,
      color:"black",
      icon:<GiLevelEndFlag className="icon"/>
    }
    ,
     {
      title: "Close Phase",
      value:12,
      color:"black",
      icon:<GiLevelEndFlag className="icon"/>
    }
  ] 
  return (
    <>
      <div className="Dashboard">
      <div className="Dashboard_TaskCompletion-totalTaskCount">
      {data.map( ( item, i ) => (
        <TotalNumber
              key={ i }
              title={ item.title }
              value={ item.value }
              icon={ item.icon }
              setOpenTitle={ setOpenTitle }
              setOpen={ setOpen }
              color={item.color} />
         ) )}
         </div>
         </div>
         <div className="Dashboard_Status">
         <Calendar value={date} />
          { urgent ?
            <UrgentTask setUrgent={ setUrgent } /> :
            <AssignedTask setUrgent={ setUrgent } 
              setActive={ setActive }
              title="My tasks" footer="Add To Do" />
          }
            <IssuePieChart/>
            <CommentSection />
            <TeamMembers />
            <Events />
            <IssueSection  title="My Issue" />
            <Projects />
            <IssueSection title="All Issue" />
        </div>
      { active &&
       ( <div className="modal">
        <TodoForm  setActive={setActive}  />
        </div>)
      }
    </>
  );
};

export default Dashboard;
