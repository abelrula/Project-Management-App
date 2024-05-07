import React, { useEffect, useState } from 'react'
import {Chart,defaults} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { PiDotsSixVerticalBold } from 'react-icons/pi';
defaults.maintainAspectRatioa=false
defaults.responsive=true

const TotalHour = () => {
  const [ value, setValue ] = useState( "monthly" )
  const [ labels, setLabels ] = useState( [] )
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
  const options = {};

    return (
      <div className="bar">
                       <h3 style={{display:"flex",gap:"10px"}}><PiDotsSixVerticalBold  fontSize={20} color="black"/><p>Task Status</p></h3>
        <select onChange={(e)=>setValue(e.target.value)}>
                <option value="monthly">monthly</option>
                <option value="weekly"> weekly</option>
              </select>
            <Bar data={data} options={options} />
    </div>
  )
}

export default TotalHour
