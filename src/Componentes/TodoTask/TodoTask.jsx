import  { useEffect, useRef } from "react";
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
// import { Doughnut } from "react-chartjs-2";

const TodoTask = () => {
  const {  isLoading } = useGetTodosQuery();

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
          labels: ["red", "yellow", "blue"],
          datasets: [
            {
              data: [30, 5, 25],
              backgroundColor: [
                "rgb(25,00,132)",
                "rgb(54,162,235)",
                "rgb(255,205,86)",
              ],
            },
          ],
        },
          options: {
                plugins: {
                    legend: {
                        position: 'right'
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
  }, []);
  return (
    <div className="Dashboard">
      {isLoading && <h1> Loading...</h1>}
      <div className="Dashboard_TaskStatus">
        <Calendar value={date} />
        <UrgentTask />
        <div className="Dashboard_TaskCompletion-doghnutGraph">
          <h5>Task completion status by this month</h5>
          <canvas ref={chartref}  />
        </div>
        {/* <AssignedTask title="Task I've Assigned" /> */}
        <div className="Dashboard_TaskCompletion-totalTaskCount">
          <TotalNumber title="Completed tasks" value={17} />
          <TotalNumber title="Incompleted tasks" value={45} />
          <TotalNumber title="Overdue tasks" value={30} />
          <TotalNumber title="Total tasks" value={120} />
        </div>
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
