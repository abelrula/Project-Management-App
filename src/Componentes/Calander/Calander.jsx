import React from 'react'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.css";
import { Calendar as BigCalander, momentLocalizer } from "react-big-calendar";
const Calander = (props) => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      start: moment("2024-02-13T07:00:00").toDate(),
      end: moment("2024-02-13T10:00:00").toDate(),
      title: "going to te gym",
      data: {
        type: "personal",
      },
    },
    {
      start: moment("2024-02-13T11:00:00").toDate(),
      end: moment("2024-02-13T13:00:00").toDate(),
      title: "going toveat foods",
      data: {
        type: "personal",
      },
    },
    {
      start: moment("2024-02-13T15:00:00").toDate(),
      end: moment("2024-02-13T18:00:00").toDate(),
      title: "paing the user for the usally gone through the dumbell",
      data: {
        type: "buisnes",
      },
    },
  ];
  const component = {
    event: (prop) => {
      const EventType = prop?.event?.data?.type;
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
  console.log(moment("2024-02-13T11:00:00").toDate());
  return (
    <div>
      <BigCalander
        defaultView="week"
        events={events}
        localizer={localizer}
        components={component}
        max={moment("2023-12-15T21:00:00").toDate()}
        min={moment("2023-12-15T07:00:00").toDate()}
      />
    </div>
  );
};

export default Calander

 