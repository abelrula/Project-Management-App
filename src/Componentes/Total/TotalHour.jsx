import React from 'react'
import { Bar } from "react-chartjs-2";

const TotalHour = () => {
 const data = {
    labels: [
      "Mon",
      "Tue",
      "Wend",
      "Thur",
      "Fri",
      "Sat",
      "Sun",
    ],
    datasets: [
      {
        label: "hours",
        data: [10,7,5,3,4,5,6,7,8,9,10],
        backgroundColor: "#d19f54",
        borderRadius: 5,
        //  borderColor:"beige"
      },
    ],
  };
  const options = {};

    return (
    <div className="bar">
            <h5>Total-Hours</h5>
            <Bar data={data} options={options} />
    </div>
  )
}

export default TotalHour