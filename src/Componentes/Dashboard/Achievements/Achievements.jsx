import React, { useEffect, useState } from "react";
import "./achievements.css";
import { MdEvent } from "react-icons/md";
 import moment from "moment";
import ProfileImage from "../../ProfileImage/ProfileImage";
import BoxHeader from "../../boxHeader/BoxHeader";
import { useDispatch } from "react-redux";
const Achievements = () => {
   
  const dispatch=useDispatch()
  const [ events, setEvents ] = useState()
  
  const Onclick = () => dispatch( openModal( { modalType: "", toggled: true } ) )
  
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
    <div className="acheivemntSection">
      <BoxHeader icon={<MdEvent />} header="Achievements"   />
      <div className="acheivemntSection__achivements element-with-scroll">
          <h3>No Achievemnts</h3>
      </div>
    </div>
  );
};

export default Achievements;
