import React from 'react'
import { Bar } from "react-chartjs-2";

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
            <Bar data={data} options={options} />
            </div>
  )
}

export default TotalRevenue