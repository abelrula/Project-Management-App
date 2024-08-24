       
 import { OverviewTaskPieChart, TaskPieChart } from "../../Componentes/Charts/PieChart";
import TotalHour from "../../Componentes/Charts/TotalHour";
import TotalRevenue from "../../Componentes/Charts/TotalRevenue";
import Header from "../../Componentes/header/Header";
import "./overview.css"  
const revenueDataset =[{
  label: "Constructions",
  data: [3000, 5000, 10000, 1000, 2000],
  backgroundColor: "#004077",
  //  borderColor:"beige"
},{
  label: "Abel Apartements",
  data: [3000, 5000, 10000, 1000, 2000],
        backgroundColor: "#002F5D",
        //  borderColor:"beige"
},{
        label: "Software Dvelopmenets",
        data: [3000, 5000, 10000, 1000, 2000],
        backgroundColor: "#EC7A08",
        //  borderColor:"beige"
}]
const hourDataset =[
  {
    label: "Constructions",
        data: [0,7,5,8,4,2,0,7,8,3,10],
        backgroundColor: "#d19f10",
        //  borderColor:"beige"
  },
  {
    label: "Abel Apartements",
        data: [0,7,5,8,4,2,0,7,8,3,10],
        backgroundColor: "#EC7A08",
         //  borderColor:"beige"
  },
  {
    label: "Software Dvelopmenets",
        data: [0,7,5,8,4,2,0,7,8,3,10],
        backgroundColor: "#5752D1",
         //  borderColor:"beige"
  }
  ]
  const revenueDatasetExpected =[{
  label: "Constructions",
  data: [2000, 7000, 4000, 7000, 2000],
  backgroundColor: "#004077",
  //  borderColor:"beige"
},{
  label: "Abel Apartements",
  data: [4000, 2000, 7000, 1000, 500],
        backgroundColor: "#002F5D",
        //  borderColor:"beige"
},{
        label: "Software Dvelopmenets",
        data: [3000, 5000, 10000, 1000, 2000],
        backgroundColor: "#EC7A08",
        //  borderColor:"beige"
}]
const hourDatasetExpected =[
  {
    label: "Constructions",
        data: [0,4,7,17,14,21,10,17,18,13,0],
        backgroundColor: "#d19f10",
        //  borderColor:"beige"
  },
  {
    label: "Abel Apartements",
        data: [0,4,7,17,14,21,10,17,18,13,0],
         backgroundColor: "#EC7A08",
         //  borderColor:"beige"
  },
  {
    label: "Software Dvelopmenets",
        data: [0,4,7,17,14,21,10,17,18,13,0],
        backgroundColor: "#5752D1",
         //  borderColor:"beige"
  }
  ]
 const Overview = () =>{
                     
              return (
                <>
                 <Header />
                  <div className="overview__container">                 
                    <div className="overview__expected">
                      <h2>expected</h2>
                      <TotalRevenue dataset={ revenueDataset } />
                      <TotalHour dataset={ hourDataset } />
                    </div>
                    <div className="overview__now">
                      <h2>now</h2>
                      <TotalRevenue dataset={ revenueDatasetExpected } />
                      <TotalHour dataset={ hourDatasetExpected } />
                     </div>
                  
                  </div>
                </>
              );
            }

  
            
    export default  Overview     
            
          
   
            
             