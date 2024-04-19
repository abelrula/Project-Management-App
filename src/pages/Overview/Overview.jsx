       
 import Header from "../../Componentes/header/Header";
 // import ProjectsDescriiption from "../../Componentes/ProjectsDescriiption/ProjectsDescriiption";
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
            
           
            
          
   
            
             