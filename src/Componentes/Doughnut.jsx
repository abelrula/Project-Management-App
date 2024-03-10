import React, {  useRef,useEffect } from 'react'
import Chart from "chart.js/auto";

const Doughnut = () => {
   const chartref = useRef(null);
  const chartInstance = useRef(null);
    
    useEffect(() => {
        if ( chartInstance.current )
        {
        chartInstance.current.destroy();
        }
        const myChartref = chartref.current.getContext("2d");
        chartInstance.current = new Chart(
        myChartref,
      {type: "doughnut",
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
    
 
    return (
        <div className="Dashboard_TaskCompletion-doghnutGraph">
           <canvas ref={chartref}  />
         </div>
  )
}

export default Doughnut