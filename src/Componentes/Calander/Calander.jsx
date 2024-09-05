import React, { useState,useEffect,useCallback } from 'react'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.css";
import withDragAndDrop, { withDragAndDropProps } from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { Calendar as BigCalander, momentLocalizer } from "react-big-calendar";
 import SchedulesForm from '../Forms/Schedules Form/SchedulesForm';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/slices/modalSlice';
import AddButton from '../Buttons/AddButton/AddButton';
 
 const DndCalendar=withDragAndDrop(BigCalander)

 const Calander = (props) => {
  const {modalType,toggled} = useSelector( state => state.modal )
   const dispatch = useDispatch()
   const localizer = momentLocalizer( moment );
        const [ events, setEvents ] = useState()
      
   // fetching events from json-servor
   useEffect( () =>
   {
          const fetchEvents = async () =>{
            const res = await fetch( "http://localhost:3500/events" )
            if ( !res.ok )  console.log( "error occured" )
            const data= await res.json()
            const newData=data.map((data)=>{
              const startTime = moment( data.start ).toDate()
              const endTime=moment(data.end).toDate()
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
  
  const component = {
    event: (prop) => {
      const EventType = prop?.event?.type;
      console.log(prop)
      console.log(EventType)
      switch (EventType) {
        case "buisnes":
          return (
            <div
              style={{
                background: "#57a3a4",
                height: "100%",
                color: "white",
                padding: "5px",
              }}
            >
              {prop.title}
            </div>
          );
        case "personal":
          return (
            <div
              style={{
                background: "rgb(66 178 233)",
                height: "100%",
                color: "white",
                padding: "5px",
              }}
            >
              {prop.title}
            </div>
          );
        default:
          return null;
      }
    },
   };
   
   const Onclick = () => dispatch( openModal( { modalType: "AddEvents", toggled: true } ) )
   
  // console.log( moment( "2024-02-13T11:00:00" ).toDate() );
  // const onChangeEventsTime=useCallback((start,end,appointementId) => {
  //   setEvents(( event ) =>event?.data?.appointements?.id === appointementId ? {
  //         ...event,
  //      start, end
  //   } : event
  //   )
  // console.log(events)
  return (
    <div className='scheduals'>
      { modalType === "" && toggled === false && <AddButton Onclick={ Onclick } name="Add New Scheduals" /> }
      <div className='scheduals_schedualsList'>
      <DndCalendar
        defaultView="week"
        events={events}
        localizer={localizer}
        components={ component }
         max={moment("2023-12-15T21:00:00").toDate()}
         min={ moment( "2023-12-15T07:00:00" ).toDate() }
        //  onDragStart={(props)=>console.log(props )}
        // onEventDrop={ ( props ) =>
        // {
        //   const{ start, end}=props
        //   // console.log( "start", start, "end", end )
        //   console.log(props )
        //   // console.log( props )
        //   const appointementId= props?.event?.data?.appointements?.id
        //    onChangeEventsTime( start, end, appointementId )
        // }}
        // onEventResize={ (props ) =>
        // {
        //    const{ start, end}=props
        //   console.log( "start", start, "end", end )
        //   // console.log( props )
        //   const appointementId= props?.event?.data?.appointements?.id
        //    onChangeEventsTime( start, end, appointementId )
        // } }
      />
     { 
     modalType === "AddEvents" && toggled === true && <SchedulesForm />}
    </div>
    </div>
  );
};

export default Calander

 