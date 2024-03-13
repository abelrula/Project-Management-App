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
        label: "$ revenue",
        data: [3000, 5000, 10000, 1000, 2000],
        backgroundColor: "#004077",
        //  borderColor:"beige"
      },
    ],
  };
  const options = {};
    return (
            <div className="bar">
            <h5>Total-Revenue</h5>
            <Bar data={data} options={options} />
            </div>
  )
}

export default TotalRevenue