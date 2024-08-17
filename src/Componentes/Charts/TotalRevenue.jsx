import React, { useState } from 'react'
import {Chart,defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import BoxHeader from '../boxHeader/BoxHeader';
defaults.maintainAspectRatioa = false
defaults.responsive=true
const TotalRevenue = ({dataset}) => {
  
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
    
    datasets:dataset
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