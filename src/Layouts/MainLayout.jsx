 import { Outlet } from 'react-router-dom'
import Sidebar from '../Componentes/Sidebar/Sidebar';
import { useState } from 'react';

  const MainLayout = () => {
     const [toggleSidebar,setToggleSidebar]=useState(false)
  
    return (
    <div className="container">
        <Sidebar
          toggleSidebar={ toggleSidebar }
          setToggleSidebar={setToggleSidebar} />
      <div className="content">
        <Outlet context={{toggleSidebar,setToggleSidebar}} />
      </div>
    </div>
  );
};
export default MainLayout