import React, { useState } from 'react'
import LineChart from '../../Charts/LineChart'
import  { IssuePieChart, TaskPieChart } from '../../Charts/PieChart';
import TotalHour from '../../Charts/TotalHour'
import TotalRevenue from '../../Charts/TotalRevenue' 
import "./dashboard.css"
import { useLocation } from "react-router-dom";
 import { CiSquareCheck } from "react-icons/ci";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";
import { GiLevelEndFlag } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { RiPassExpiredLine } from "react-icons/ri";
import { MdOutlineTaskAlt } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import TotalNumber from '../../Dashboard/TotalTaskstatus/TotalNumber'
import UrgentTask from '../../Dashboard/urgentTask/UrgentTask';
const Dashoboard = () => {
   
  const [ openTitle, setOpenTitle ] = useState( null )
  const [open,setOpen]=useState(false)
  const data = [
    {
      title: "Open Tasks",
      value:17,
      color:"green",
      icon:<BsListTask className="icon"/>
    },
     {
      title: "Closed Tasks",
      value:45,
      color:"red",
      icon:<MdOutlineTaskAlt  className="icon"/>
    },
     
     {
      title: "Total Tasks",
      value:12,
      color:"black",
      icon:<FaTasks  className="icon"/>
    },
    {
      title: "OverDue Tasks",
      value:30,
      color:"blue",
      icon:<RiPassExpiredLine  className="icon"/>
    },
    {
      title: "Opened Issue",
      value:0,
      color:"black",
      icon:<GoIssueOpened  className="icon"/>
    }
    ,
     {
      title: "Closed Issue",
      value:12,
      color:"black",
      icon:<AiOutlineIssuesClose  className="icon"/>
    },
     {
      title: "Open Phase",
      value:7,
      color:"black",
      icon:<GiLevelEndFlag className="icon"/>
    }
    ,
     {
      title: "Close Phase",
      value:12,
      color:"black",
      icon:<GiLevelEndFlag className="icon"/>
    }
  ] 
    return (
    <div className='dashboard'>
      <div className="Dashboard_TaskCompletion-totalTaskCount">
        {data.map( ( item, i ) => (
        <TotalNumber
          key={ i }
          title={ item.title }
          value={ item.value }
          setOpenTitle={ setOpenTitle }
          setOpen={ setOpen }
          color={item.color} />
     ) )}
     </div>
     <div className="Dashboard_graphs">
      <TotalHour />
      <TotalRevenue />
      <IssuePieChart />
      <IssuePieChart />
      <UrgentTask />
      </div>
     </div>
  )
}

export default Dashoboard