import React, { useEffect, useState } from 'react'
import {defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { FaTasks } from "react-icons/fa";
import BoxHeader from '../boxHeader/BoxHeader';
import { Ri24HoursLine } from "react-icons/ri";
defaults.maintainAspectRatioa=false
defaults.responsive=true

const TotalHour = () => {
  const [ value, setValue ] = useState( "monthly" )
  const [ selectedType, setSelectedType ] = useState( "All" );
  const [ labels, setLabels ] = useState( [] )
   const timeAlt=["week","month"]
  const week= [
      "Mon",
      "Tue",
      "Wend",
      "Thur",
      "Fri",
      "Sat",
      "Sun",
     ]
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
     setLabels(week )
    }
    else if ( value === "monthly" )
    setLabels(month)

  },[value])
  console.log(labels)
  const data = {
    labels,
    datasets: [
      {
        label: "Total Working Hours",
        data: [10,7,5,3,4,5,6,7,8,9,10],
        backgroundColor: "#d19f54",
        borderRadius: 5,
        //  borderColor:"beige"
      },
      {
        label: "Total Working Hours",
        data: [10,7,5,3,4,5,6,7,8,9,10],
        backgroundColor: "#d02f54",
        borderRadius: 5,
        //  borderColor:"beige"
      },
      {
        label: "Total Working Hours",
        data: [0,7,5,8,4,2,0,7,8,3,10],
        backgroundColor: "#d19f10",
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
        <BoxHeader icon={<Ri24HoursLine />} header="Task hours" filterTypes={timeAlt} selectedType={selectedType} setSelectedType={setSelectedType}      />
        <Bar data={data} options={options} />
    </div>
  )
}

export default TotalHour
