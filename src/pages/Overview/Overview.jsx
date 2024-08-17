       
 import TotalHour from "../../Componentes/Charts/TotalHour";
import TotalRevenue from "../../Componentes/Charts/TotalRevenue";
import Header from "../../Componentes/header/Header";
       import "./overview.css"  
const revenueDataset = [
        {
        label: "$ Total Revenue",
        data: [3000, 5000, 10000, 1000, 2000],
        backgroundColor: "#004077",
        borderRadius: 5,
        //  borderColor:"beige"
      },
      {
        label: "$ Total Revenue",
        data: [7000, 5000, 10000, 1000, 8000],
        backgroundColor: "#cf4077",
        borderRadius: 5,
        //  borderColor:"beige"
      }
      ]       
  const hourDataset=       [
      {
        label: "Total Working Hours",
        data: [10,7,5,3,4,5,6,7,8,9,10],
        backgroundColor: "#d19f54",
        borderRadius: 5,
        //  borderColor:"beige"
      },
      {
        label: "Total Working Hours",
        data: [10,7,5,3,4,5,6,7,8,9,10],
        backgroundColor: "#d02f54",
        borderRadius: 5,
        //  borderColor:"beige"
      },
      {
        label: "Total Working Hours",
        data: [0,7,5,8,4,2,0,7,8,3,10],
        backgroundColor: "#d19f10",
        borderRadius: 5,
        //  borderColor:"beige"
      },
    ]
 const Overview = () =>{
                     
              return (
                <>
                 <Header />
                  <div className="overview__container">
                     <TotalRevenue dataset={ revenueDataset } />
                      <TotalHour dataset={hourDataset} />
                 </div>
                </>
              );
            }

  
            
    export default  Overview     
            
          
   
            
             