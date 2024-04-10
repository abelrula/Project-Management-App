import React, {  useRef,useEffect } from 'react'
import Chart from "chart.js/auto";
import "./pieChart.css"
export const TaskPieChart = () => {
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
        type: "pie",
        data: {
          labels: ["Total Task", "Total Task Done", "OverDue","Not Started"],
          datasets: [
            {
              data: [30, 5, 25,200],
              backgroundColor: [
                "rgb(25,00,132)",
                "rgb(163, 38, 38)",
                "rgb(159, 159, 227)",
                "rgb(59, 159, 227)",
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
  }, [] );
  
    
 
    return (
        <div className="Dashboard_TaskCompletion-doghnutGraph">
          <h5>Task Status</h5>
           <canvas ref={chartref}  />
         </div>
  )
}

export const IssuePieChart = () =>
{
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
        type: "pie",
        data: {
          labels: ["reopened", "in progress", "to be tested","closed" ,"todo" ,"open"],
          datasets: [
            {
              data: [30, 5, 25,200,70,150],
              backgroundColor: [
                "rgb(25,200,132)",
                "rgb(163,238, 88)",
                "rgb(163,138, 38)",
                "rgb(72 153 120)",
               "rgb(209 20 20)",
                "rgb(59, 159, 227)",
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
  }, [] );
  
    
 
    return (
        <div className="Dashboard_TaskCompletion-doghnutGraph">
          <h5>Issue Status</h5>
           <canvas ref={chartref}  />
         </div>
    )
}