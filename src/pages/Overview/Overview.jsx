       
              import Header from "../../Componentes/Header/Header";
            import "./overview.css"
             import { Outlet } from 'react-router-dom'
             
        
            const Overview = () => {
             
              return (
                <>
                  <Header />
                   <Outlet />
                </>
              );
            }

export default Overview
            
           
            
          
   
            
             