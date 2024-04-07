import React, {  useRef,useEffect } from 'react'
import Chart from "chart.js/auto";

const PieChart = () => {
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
                "rgb(81, 172, 215)",
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
  
    
 
    return (
        <div className="Dashboard_TaskCompletion-doghnutGraph">
           <canvas ref={chartref}  />
         </div>
  )
}

export default PieChart