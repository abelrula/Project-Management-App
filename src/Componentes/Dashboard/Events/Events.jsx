import React, { useEffect, useState } from "react";
import "./events.css";
import { MdEvent } from "react-icons/md";
 import moment from "moment";
import ProfileImage from "../../ProfileImage/ProfileImage";
import BoxHeader from "../../boxHeader/BoxHeader";
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
      <BoxHeader icon={<MdEvent />} header="My Events"   />
      <div className="evenetSection_events element-with-scroll">
       {events?.map((event,i)=>(
        <div  className="evenetSection_events-event" key={i}>
          <ProfileImage name="Abel Zewdu"/>
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
