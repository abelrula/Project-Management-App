import React, { useEffect, useState } from 'react'
import {defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { FaTasks } from "react-icons/fa";
import BoxHeader from '../boxHeader/BoxHeader';
import { Ri24HoursLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
defaults.maintainAspectRatioa=false
defaults.responsive=true

const TotalHour = ({dataset }) => {
  const [ value, setValue ] = useState( "monthly" )
  const [ selectedType, setSelectedType ] = useState( "All" );
  const [ labels, setLabels ] = useState( [] )
  const {pathname} =useLocation()
   const timeAlt=["week","month"]
 
     const month=[
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
  ] 
  useEffect( () =>
  {
    if ( value === "weekly" )
    {
     setLabels(weeksLabel )
    }
    else if ( value === "monthly" )
    setLabels(month)

  },[value])
  console.log(labels)
  const data = {
    labels,
    datasets:dataset
  };
  const options = {
      responsive: true,

  };

    return (
      <div className="bar" style={{width:pathname === "/overview" ? "450px" : "390px"}}>
        <BoxHeader icon={<Ri24HoursLine />} header="Task hours" filterTypes={timeAlt} selectedType={selectedType} setSelectedType={setSelectedType}      />
        <Bar data={data} options={options} />
    </div>
  )
}

export default TotalHour
