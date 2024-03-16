import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";

const TotalHour = () => {
  const [ value, setValue ] = useState( "weekly" )
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
    if ( value === "Weekly" )
    {
     setLabels(week )
    }
    else if ( value === "Monthly" )
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
    ],
  };
  const options = {};

    return (
      <div className="bar">
        <select onChange={(e)=>setValue(e.target.value)}>
                <option value="Weekly"> Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            <Bar data={data} options={options} />
    </div>
  )
}

export default TotalHour