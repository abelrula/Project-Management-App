import  { useEffect, useRef, useState } from "react";
import { useGetTodosQuery } from "../../api/apiSlice";
import "./todoTask.css";
import UrgentTask from "../urgentTask/UrgentTask";
import TeamMembers from "../teamMembers/TeamMembers";
import CommentSection from "../commentSection/CommentSection";
// import AssignedTask from "../Assignedtask/AssignedTask";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/src/Calendar.css";
import Chart from "chart.js/auto";
// import UserProgress from "../userProgress/UserProgress";
import TotalNumber from "../TotalTaskstatus/TotalNumber";
import ProjectCatagories from "../ProjectCatagories/ProjectCatagories";
import { IoChevronBack } from "react-icons/io5";

const TodoTask = () => {
  // const {  isLoading } = useGetTodosQuery();
const [open,setOpen]=useState(false)
const [openTitle,setOpenTitle]=useState("null")
  const date = new Date();
  const chartref = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartref = chartref.current.getContext("2d");
    chartInstance.current = new Chart(
      myChartref,
      {
        type: "doughnut",
        data: {
          labels: ["Total Task", "Total Task Done", "OverDue","Not Started"],
          datasets: [
            {
              data: [30, 5, 25,200],
              backgroundColor: [
                "rgb(25,00,132)",
                "rgb(54,16,235)",
                "rgb(255,205,86)",
                "rgb(125,84,16)",
              ],
            },
          ],
        },
          options: {
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
      },
      []
     );
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [] );
  const data = [
    {
      title: "Completed tasks",
      value:17
    },
     {
      title: "Incompleted tasks",
      value:45
    },
     {
      title: "Overdue tasks",
      value:30
    },
     {
      title: "Total tasks",
      value:120
    }
  ]
  return (
    <div className="Dashboard">
      <div className="Dashboard_TaskStatus">
        <Calendar value={date} />
        <UrgentTask />
        <div className="Dashboard_TaskCompletion-doghnutGraph">
           <canvas ref={chartref}  />
        </div>
        {/* <AssignedTask title="Task I've Assigned" /> */}
          { !open ? (
        <div className="Dashboard_TaskCompletion-totalTaskCount">
        {  data.map( ( item, i ) => (
            <TotalNumber
              key={ i }
              title={ item.title }
              value={ item.value }
              setOpenTitle={ setOpenTitle }
              setOpen={ setOpen } />
        ) )
            }
        </div>)
           : (
            <div className="Dashboard_TaskCompletion-differentStatus">
              <IoChevronBack
              onClick={ () =>setOpen( false )}
              className="icon"/>
              {
                data.map( ( data, i ) => (
                  <div className="TaskCompletion_List">
                    <p>{ data.title }</p>
                  </div>
                ) )
                }
            </div>)
          }
         <div className="Dashboard_TaskCompletion_Project">
          <div className="Dashboard_TaskCompletion_Project-Catagori">
            <ProjectCatagories />
            <CommentSection />
          </div>
          <TeamMembers />
        </div>
        {/* <UserProgress /> */}
      </div>
    </div>
  );
};

export default TodoTask;
