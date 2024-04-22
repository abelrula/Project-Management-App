import React, { useState } from 'react'
import {Chart,defaults} from "chart.js/auto";
import {Doughnut, Pie} from "react-chartjs-2"
import "./pieChart.css"
import { PiDotsSixVerticalBold } from "react-icons/pi";
import LineChart from './LineChart';

defaults.maintainAspectRatioa=false
defaults.responsive=true
export const TaskPieChart = () => {
      const  data= {
          labels: ["Total Task", "Total Task Done", "OverDue","Not Started"],
          datasets: [
            {
              data: [30, 5, 25,200],
              backgroundColor: [
                "rgb(25,00,132)",
                "rgb(163, 38, 38)",
                "rgb(159, 159, 227)",
                "rgb(59, 159, 227)",
              ],
            },
          ],
        }
        const  options= {
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
      
    return (
        <div className="taskCompletion_graph-doghnutGraph">
         <span><PiDotsSixVerticalBold  fontSize={20} color="black"/><h5>Task Status</h5></span>
            <Pie data={data} options={options}  />
          </div>
  )
}


export const IssuePieChart = () =>
{
  const [selectedChart,SetSelectedChart]=useState("pie chart")
    const data={
      labels: ["reopened", "in progress", "to be tested","closed" ,"todo" ,"open"],
      datasets: [
        {
          data: [30, 5, 25,200,70,150],
          backgroundColor: [
            "rgb(25,200,132)",
            "rgb(163,238, 88)",
            "rgb(163,138, 38)",
            "rgb(72 153 120)",
           "rgb(209 20 20)",
            "rgb(59, 159, 227)",
          ],
        },
      ],
    }
      const options={
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
 const chartsOptions=["pie chart","Dougnut Chart","Line chart",]
    return (
        <div className="taskCompletion_graph-doghnutGraph">
         <span><PiDotsSixVerticalBold  fontSize={20} color="black"/><h5>Task Status</h5></span>
         <div className='charts'>
         {chartsOptions.map((chart,i)=>( 
         <span className={`chart ${selectedChart === chart ? "active" : "none"}`} key={i} onClick={()=>{SetSelectedChart(chart)}}>{chart}</span>
         ))}
         </div>
          {selectedChart=== "pie chart" ? <Pie data={data} options={options}  /> :
                            selectedChart=== "Line chart" ? <LineChart /> :<Doughnut data={data} options={options}   />
        }
         </div>
    )
}