import React, { useState } from 'react'
import {Chart,defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import BoxHeader from '../boxHeader/BoxHeader';
defaults.maintainAspectRatioa = false
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
      {
        label: "$ Total Revenue",
        data: [7000, 5000, 10000, 1000, 8000],
        backgroundColor: "#cf4077",
        borderRadius: 5,
        //  borderColor:"beige"
      },
    ],
  };
  const options = {
      responsive: true,

  };
    return (
            <div className="bar">
          <BoxHeader icon={<LiaMoneyCheckAltSolid />} header="Task Revenue"    />
            <Bar data={data} options={options} />
            </div>
  )
}

export default TotalRevenue