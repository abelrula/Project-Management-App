import React from 'react'
import {Chart,defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { PiDotsSixVerticalBold } from 'react-icons/pi';
defaults.maintainAspectRatioa=false
defaults.responsive=true
const TotalRevenue = () => {
  
    const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apri",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ],
    
    datasets: [
      {
        label: "$ Total Revenue",
        data: [3000, 5000, 10000, 1000, 2000],
        backgroundColor: "#004077",
        borderRadius: 5,
        //  borderColor:"beige"
      },
    ],
  };
  const options = {};
    return (
            <div className="bar">
                       <h3><PiDotsSixVerticalBold  fontSize={20} color="black"/><p>Task Status</p></h3>
            <Bar data={data} options={options} />
            </div>
  )
}

export default TotalRevenue