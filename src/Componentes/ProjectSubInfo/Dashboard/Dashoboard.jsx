import React, { useState } from 'react'
import LineChart from '../../Charts/LineChart'
import TotalNumber from '../../TotalTaskstatus/TotalNumber'
import "./dashboard.css"
const Dashoboard = () => {
   
  const [ openTitle, setOpenTitle ] = useState( null )
  const [open,setOpen]=useState(false)
  const data = [
        {
          title: "Completed Tasks",
          value:17,
          color:"green"
        },
         {
          title: "Incompleted Tasks",
          value:45,
          color:"red"
        },
         {
          title: "OverDue Tasks",
          value:30,
          color:"blue"
        },
         {
          title: "Total Tasks",
          value:12,
          color:"black"
        }
      ] 
    return (
    <div className='dashboard'>
        {data.map( ( item, i ) => (
        <TotalNumber
          key={ i }
          title={ item.title }
          value={ item.value }
          setOpenTitle={ setOpenTitle }
          setOpen={ setOpen }
          color={item.color} />
     ) )}</div>
  )
}

export default Dashoboard