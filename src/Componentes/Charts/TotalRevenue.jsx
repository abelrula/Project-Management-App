import React, { useState } from 'react'
import {Chart,defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import BoxHeader from '../boxHeader/BoxHeader';
import { useLocation } from 'react-router-dom';
defaults.maintainAspectRatioa = false
defaults.responsive=true
const TotalRevenue = ({dataset }) => {
  const {pathname} =useLocation()
  
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
  console.log(pathname);
  
    return (
      <div className="bar" style={{width:pathname === "/overview" ? "450px" : "390px"}}>
             <BoxHeader icon={<LiaMoneyCheckAltSolid />} header="Task Revenue"    />
            <Bar data={data} options={options} />
            </div>
  )
}

export default TotalRevenue