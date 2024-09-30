import React, { useState } from 'react'
import {defaults} from "chart.js/auto";
import {Doughnut, Pie} from "react-chartjs-2"
import "./pieChart.css"
import { useLocation } from 'react-router-dom';
import BoxHeader from '../boxHeader/BoxHeader';
import { FaTasks } from "react-icons/fa";
defaults.maintainAspectRatioa=false
defaults.responsive = true

export const TaskPieChart = () => {
      
  const {pathname}=useLocation()
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
       responsive: true,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
      
    return (
        <div className="taskCompletion_graph-doghnutGraph"  style={{height: pathname === "/" ?"300px": "250px"}} >
          <BoxHeader icon={<FaTasks />} header="Task Status"   />
            <Pie data={data} options={options}  />
          </div>
  )
}

export const OverviewTaskPieChart = ({projectTitle}) => {
      
  const {pathname}=useLocation()
   const  data= {
          labels: ["Total Task", "Total Task Done", "OverDue","Not Started"],
          datasets: [   
            {
              data: [30, 5, 25,200],
              backgroundColor: [
                "#d5d52a",
                "#26d988",
               "rgb(159, 159, 227)",
                "rgb(59, 159, 227)",
              ],
            },
          ],
        }
        const  options= {
       responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
      
    return (
        <div className="taskCompletion_graph-doghnutGraph"  style={{height: pathname === "/" ?"600px": "600px"}} >
        <BoxHeader icon={ <FaTasks /> } header={`${projectTitle}  Task Status`}   />
            <Pie data={data} options={options}  />
          </div>
  )  
}
export const IssuePieChart = () =>{
  
  const {pathname}=useLocation()
  const [ selectedType, setSelectedType ] = useState( "All" );
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
      responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
 const chartsOptions=["pie chart","Dougnut Chart"]
    return (
        <div className="taskCompletion_graph-doghnutGraph" style={{height:"250px",width:"320px" }}>
        <BoxHeader icon={<FaTasks />} header="Task Status" filterTypes={chartsOptions} selectedType={selectedType} setSelectedType={setSelectedType}  />
        { selectedChart === "pie chart" ? <Pie data={ data } options={ options } /> : <Doughnut  data={data} options={options}  style={ width="305px"}  />
        }
         </div>
    )
  }