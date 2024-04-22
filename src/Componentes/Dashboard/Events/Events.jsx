import React, { useEffect, useState } from "react";
import "./events.css";
import { MdEvent } from "react-icons/md";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import moment from "moment";
const Events = () => {
   const [ events, setEvents ] = useState()
  useEffect( () =>{
    const fetchEvents = async () =>{
      const res = await fetch( "http://localhost:3500/events" )
      if ( !res.ok )  console.log( "error occured" )
      const data= await res.json()
      const newData=data.map((data)=>{
        const startTime = moment( data.start ).toDate().toDateString()
        const endTime=moment(data.end).toDate().toDateString()
          return{
            ...data,
            start:startTime,
            end:endTime
          }
                  })
 setEvents(newData)
 console.log(events)
}
 fetchEvents()
}, [] ) 
console.log(events)


  return (
    <div className="evenetSection">
            <span> <PiDotsSixVerticalBold fontSize={20} color="black" /> <h3> My Events</h3> <MdEvent/></span>
      <div className="evenetSection_events element-with-scroll">
       {events?.map((event,i)=>(
        <div  className="evenetSection_events-event" key={i}>
          <input type="checkbox"/>
         <p>{event.title.length > 30 ?`${event.title.substring(0,30)} ...` : event.title}</p>
         <span>{event.start}</span>
        </div>
      )) }
      </div>
    </div>
  );
};

export default Events;
