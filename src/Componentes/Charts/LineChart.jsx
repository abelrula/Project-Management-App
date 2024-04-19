import {Chart,defaults} from "chart.js/auto";
import {Line} from "react-chartjs-2"
defaults.maintainAspectRatioa=false
defaults.responsive=true
 const LineChart = ({color}) => {
 
  const data={
          labels: ["Jan", "Feb","Mar","Apri","May","Jun","Jul","Aug","Sep","Nov","Dec"],
          datasets: [{
            label:"Total",
            data: [125, 329, 340, 148, 456, 157, 40],
            // borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor:"rgb(0 0 0 / 92%)",
            borderColor:color,
            pointBorderWidth:0.3,
            pointBorderColor:"white",
            pointRadius:1.2,
            fill:color
          }]
        }
   return (
         <Line data={data} />
 )
}
export default LineChart