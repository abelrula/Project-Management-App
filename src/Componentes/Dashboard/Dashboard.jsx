import  {  useState } from "react";
 import UrgentTask from "./urgentTask/UrgentTask";
import TeamMembers from "./teamMembers/TeamMembers";
import CommentSection from "./commentSection/CommentSection";
import Calendar from "react-calendar";
import AssignedTask from "./Assignedtask/AssignedTask";
import { IssuePieChart } from "../Charts/PieChart";
import IssueSection from "./IssueSection/IssueSection";
import Events from "./Events/Events";
import TotalNumber from "./TotalTaskstatus/TotalNumber";
import Projects from "./Projects/Projects";
 import "../../../node_modules/react-calendar/src/Calendar.css";
import "./dashboard.css";
import { TotalAccompishedNumber } from "../../lib/data";

const Dashboard = () => {
  // const {  isLoading } = useGetTodosQuery();
   const [ urgent, setUrgent ] = useState( false )
     const date = new Date();
 
 
  return (
    <>
      <div className="Dashboard">
      <div className="Dashboard_TaskCompletion-totalTaskCount">
      {TotalAccompishedNumber.map( ( item, i ) => (
        <TotalNumber
              key={ i }
              title={ item.title }
              value={ item.value }
              icon={ item.icon }
               />
         ) )}
         </div>
         </div>
         <div className="Dashboard_Status">
         <Calendar value={date} />
          { urgent ?
            <UrgentTask setUrgent={ setUrgent } /> :
          <AssignedTask
            setUrgent={ setUrgent } 
             title="My tasks" />
          }
            <IssuePieChart/>
            <CommentSection />
            <TeamMembers />
            <Events />
            <IssueSection  title="My Issue" />
            <Projects />
            <IssueSection title="All Issue" />
      </div>
      
     
    </>
  );
};

export default Dashboard;
