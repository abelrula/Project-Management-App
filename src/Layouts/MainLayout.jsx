 import { Outlet } from 'react-router-dom'
import Sidebar from '../Componentes/Sidebar/Sidebar';

  const MainLayout = () => {
   return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout