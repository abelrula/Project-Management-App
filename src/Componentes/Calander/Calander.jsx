 import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./index.css";
import { Calendar as BigCalander, momentLocalizer } from "react-big-calendar";
const Calander = () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      start: moment("2024-01-13T07:00:00").toDate(),
      end: moment("2024-01-14T10:00:00").toDate(),
      title: "going to te gym",
    },
    {
      start: moment("2024-01-13T11:00:00").toDate(),
      end: moment("2024-01-13T13:00:00").toDate(),
      title: "going toveat foods",
    },
    {
      start: moment("2024-01-10T15:00:00").toDate(),
      end: moment("2024-01-10T18:00:00").toDate(),
      title: "paing the user for the usally gone through the dumbell",
    },
  ];
  const component = {
    event: (prop) => {
      console.log(prop);
      return null;
    },
  };
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

 