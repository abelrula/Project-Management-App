import React, { useState } from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  defaults
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { FaCheckCircle } from "react-icons/fa";
import { FcDeleteColumn, FcProcess } from "react-icons/fc";
import "./gantchart.css";
defaults.maintainAspectRatioa=false
defaults.responsive=true
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const GantChartComponenet = () => {

  const [ filter, setFilter ] = useState( "2024-01" );
  console.log(filter);
  console.log(filter.substring(0, 4));
  console.log(filter.substring(5, 7));
  // let [status, setStatus] = useState("");
  // const [forms, setForms] = useState({
  //   startdate: "",
  //   enddate: "",
  //   taskAssigne: "",
  //   taskName: "",
  // });
  // console.log(forms.startdate, forms.enddate, forms.taskAssigne);
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   data.datasets[0].data.push({
  //     x: [forms.startdate, forms.enddate],
  //     y: forms.taskName,
  //     name: forms.taskAssigne,
  //     status: parseInt(status),
  //   });
  //   forms.startdate = " ";
  //   forms.enddate = " ";
  //   forms.taskAssigne = " ";
  //   forms.taskName = " ";
  //   status = " ";
  // };
  // const handleFormState = (e) => {
  //   const { name, value } = e.target;
  //   setForms((prev) => ({ ...prev, [name]: [value] }));
  // };

  const colorsData = [
    "rgba(255, 26, 104, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
  ];
  const data = {
    datasets: [
      {
        label: "$ revenue",
        data: [
          {
            x: [ "2024-01-08", "2024-01-05" ],
            y: "Du15656",
            name: "Simon panda",
            status: "1",
            avatar:"https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            
          },
          {
            x: [ "2024-01-13", "2024-01-17" ],
            y: "Du2676",
            name: "Abel",
            status: "1",
            avatar:"https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D"
          },
          {
            x: [ "2024-01-18", "2024-01-20" ],
            y: "Du390",
            name: "Yosef",
            status: "2",
            avatar:"https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D"
          },
           {
            x: [ "2024-01-08", "2024-01-05" ],
            y: "Du1786",
            name: "Simon panda",
            status: "1",
            avatar:"https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
          },
          {
            x: [ "2024-01-13", "2024-01-17" ],
            y: "Du872",
            name: "Abel",
            status: "1",
            avatar:"https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
          },
          {
            x: [ "2024-01-18", "2024-01-20" ],
            y: "Du1212",
            name: "Yosef",
            status: "2",
            avatar:"https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          }, {
            x: [ "2024-01-08", "2024-01-05" ],
            y: "Du11213",
            name: "qimon panda",
            status: "1",
            avatar:"https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          },
          {
            x: [ "2024-01-13", "2024-01-17" ],
            y: "Du221",
            name: "wbel",
            status: "1",
            avatar:"https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          },
          {
            x: [ "2024-01-18", "2024-01-20" ],
            y: "Du21323",
            name: "Yosef",
            status: "2",
            avatar:"https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          },
          {
            x: [ "2024-01-21", "2024-01-26" ],
            y: "Du44",
            name: "lsehay",
            status: "0",
            avatar:"https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
          },
          {
            x: [ "2024-02-27", "2024-02-30" ],
            y: "Du15",
            name: "vand",
            status: "2",
            avatar:""
          },
          {
            x: [ "2024-02-18", "2024-02-20" ],
            y: "Du412",
            name: "rula",
            status: "2",
            avatar:"https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          },
          {
            x: [ "2024-01-21", "2024-02-26" ],
            y: "Du117",
            name: "biladen",
            status: "0",
            avatar:"https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
          },
          {
            x: [ "2024-02-27", "2024-03-30" ],
            y: "Du8213",
            name: "miko",
            status: "2",
            avatar:"https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          }, {
            x: [ "2024-01-21", "2024-01-26" ],
            y: "Du45",
            name: "lsehay",
            status: "0",
            avatar:"https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          },
          {
            x: [ "2024-02-27", "2024-02-30" ],
            y: "Du17",
            name: "vand",
            status: "2",
            avatar:"https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
          },
          {
            x: [ "2024-02-18", "2024-02-20" ],
            y: "Du412",
            name: "rula",
            status: "2",
            avatar:"https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
          },
          {
            x: [ "2024-01-21", "2024-02-26" ],
            y: "Du817",
            name: "biladen",
            status: "0",
            avatar:"https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
          },
          {
            x: [ "2024-02-27", "2024-03-30" ],
            y: "Du813",
            name: "miko",
            status: "2",
            avatar:"https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
          },
          
        ],

        backgroundColor: ( ctx ) =>
        {
          return colorsData[ ctx.raw.status ];
        },
        borderSkipped: false,
        borderRadius: 10,
        barPercentage: 0.7,
      },
    ],
  }

  // const icons = [<FaCheckCircle />, <FcDeleteColumn />, <FcProcess />];
  // config
  const todayLine = [
    {
      id: "todayLine",
      afterDatasetsDraw(chart, args, pluginOptions) {
        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right },
          scales: { x, y },
        } = chart;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgba(102, 26, 104, 1)";
        ctx.setLineDash([6, 6]);
        ctx.moveTo(x.getPixelForValue(new Date()), top);
        ctx.lineTo(x.getPixelForValue(new Date()), bottom);
        ctx.stroke();
        ctx.restore();

        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgba(102, 102, 102, 1)";
        ctx.fillStyle = "rgba(102, 102, 102, 1)";
        ctx.moveTo(x.getPixelForValue(new Date()), top + 3);
        ctx.lineTo(x.getPixelForValue(new Date()) - 6, top - 6);
        ctx.lineTo(x.getPixelForValue(new Date()) + 6, top - 6);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();

        ctx.font = "bold 12px sans-serif";
        ctx.fillStyle = "rgba(102, 102, 102, 1)";
        // ctx.textAlign = "center";
        ctx.fillText("Today", x.getPixelForValue(new Date()), bottom + 15);
        ctx.restore();
      },
    },
    {
      id: "AssignedTo",
      afterDatasetsDraw(chart, args, pluginOptions) {
        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right },
          scales: { x, y },
        } = chart;

        ctx.save();
        ctx.restore();

        ctx.font = "bolder 12px sans-serif";
        ctx.border = "solid 2px black";
        // ctx.textAlign = "left";
        // ctx.textBaseline = "middle";
        ctx.fillStyle = "black";
        data.datasets[0].data.forEach((dataPoint, i) => {
          ctx.fillText(dataPoint.name, 10, y.getPixelForValue(i));
        });
        ctx.fillText("Names", 10, top - 15);
        ctx.restore();
      },
    },
    {
      id: "weekend",
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right, width, height },
          scales: { x, y },
        } = chart;
        ctx.save();
        x.ticks.forEach((tick, index) => {
          const day = new Date(tick.value).getDay();
          if (day === 6 || day === 0) {
            ctx.fillStyle = "rgba(102,102,102,0.2)";
            ctx.fillRect(
              x.getPixelForValue(tick.value),
              top,
              x.getPixelForValue(new Date(tick.value).setHours(24)) -
                x.getPixelForValue(tick.value),
              height
            );
          }
        });
        // ctx.restore();
      },
    },
  ];

  const year = filter.substring(0, 4);
  const month = filter.substring(5, 7);
  const lastDay = (y, m) => {
    return new Date(y, m, 0).getDate();
  };
  const startDate = `${year}-${month}-01`;
  const endDate = `${year}-${month}-${lastDay(year, month)}`;
  const options = {
    indexAxis: "y",
    layout: {
      padding: {
        left: 100,
        bottom: 20,
      },
    },
    scales: {
      x: {
        position: "top",
        type: "time",
        time: {
          // unit: "day",
          displayFormats: {
            day: "d",
          },
        },
        min: startDate,
        max: endDate,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        yAlign: "bottom",
        callbacks: {
          label: (ctx) => {
            return " ";
          },
          title: (ctx) => {
            const startDate = new Date(ctx[0].raw.x[0]);
            const endDate = new Date(ctx[0].raw.x[1]);
            const formatteStartDate = startDate.toLocaleString([], {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            const formattedEndDate = endDate.toLocaleString([], {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return [
              <img className="avatar" src={ctx[0].raw.avatar}  />,
              ctx[0].raw.name,
              ctx[0].raw.y,
              `Task Deadline:- ${formatteStartDate} - ${formattedEndDate}`,
            ];
          },
        },
      },
    },
  };

  return (
   <div className="gantChart">
      <h2>tracking all the task</h2>
      <div className="chartColors">
        <div>
          <p className="completed">
            completed
            <span></span>
          </p>
          <p className="pending">
            pending
            <span></span>
          </p>
          <p className="delayed">
            delayed
            <span></span>
          </p>
        </div>
         <div>
        <h5>project date</h5>
        <input
            type="month"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      </div>
      <Bar data={data} plugins={todayLine} options={options} />
     </div>
  );
};

export default GantChartComponenet;
