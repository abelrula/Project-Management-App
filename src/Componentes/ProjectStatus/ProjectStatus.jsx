import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { week, Month, hours, Revenue } from "../../data/hour&month";
import { Bar } from "react-chartjs-2";
 ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import "./projectStatus.css"
// import 'chartjs-adapter-moment';

const ProjectStatus = () =>
{
    const [filter, setFilter] = useState(new Date().toISOString());
  const colorsData = [
    "rgba(94, 145, 151, 0.67)",
    "rgba(147, 12, 194, 0.4)",
    "rgba(205, 137, 95, 1)",
    "rgba(205, 177, 95, 0.77)",
    "rgb(41 104 160)",
    "rgb(174 255 22)",
  ];
  const data1 = {
    // labels: [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Apri",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Nov",
    //   "Dec",
    // ],

    datasets: [
      {
        label: "Projects Status",
        data: [
          { x: ["2024-01-01", "2024-02-08"], y: "Management", status: "0" },
          { x: ["2024-01-01", "2024-02-08"], y: "Operations", status: "1" },
          { x: ["2024-01-21", "2024-04-10"], y: "Marketing", status: "2" },
          { x: ["2024-02-01", "2024-04-15"], y: "Colection", status: "3" },
          { x: ["2024-02-01", "2024-04-25"], y: "Spying", status: "4" },
          { x: ["2024-01-11", "2024-10-30"], y: "Collection", status: "5" },
        ],
        backgroundColor: (ctx) => {
          return colorsData[ctx.raw.status];
        },
        borderSkipped: false,
        borderRadius: 10,
        barPercentage: 0.8,
      },
    ],
  };
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
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(102, 102, 102, 1)";
        ctx.fillStyle = "rgba(102, 102, 102, 1)";
        ctx.moveTo(x.getPixelForValue(new Date()), top + 3);
        ctx.lineTo(x.getPixelForValue(new Date()) - 6, top - 6);
        ctx.lineTo(x.getPixelForValue(new Date()) + 6, top - 6);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();

        // ctx.font = "bold 12px sans-serif";
        // ctx.fillStyle = "rgba(102, 102, 102, 1)";
        // ctx.textAlign = "center";
        //ctx.fillText("Today", x.getPixelForValue(new Date()), bottom + 15);
        //ctx.restore();
      },
    },
  ];
  // config
  const year = filter.substring(0, 4);
  const month = filter.substring(5, 7);
  const lastDay = (y, m) => {
    return new Date(y, m, 0).getDate();
  };
  const startDate = `${year}-${month}-01`;
  const endDate = `${year}-${month}-${lastDay(year, month)}`;
  const options1 = {
    indexAxis: "y",
    // layout: {
    //   padding: {
    //     bottom: 20,
    //   },
    // },
    scales: {
      x: {
        position: "bottom",
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
              ctx[0].raw.y,
              `Task Deadline:- ${formatteStartDate} - ${formattedEndDate}`,
            ];
          },
        },
      },
    },
  };
    return ( 
       <>
     <div className="projectsStatusBar">
            {/* <h1>Projects Status</h1> */}
            <div>
              <h5>Project-Duaration</h5>
              <input
                type="date"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <Bar data={data1} plugins={todayLine} options={options1} />
          </div>
        </>
    )
  }
  
  export default ProjectStatus