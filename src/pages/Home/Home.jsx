import { toast, ToastContainer } from "react-toastify";
import Dashboard from "../../Componentes/Dashboard/Dashboard";
import Header from "../../Componentes/header/Header";
 import { notifications, Notificaton } from "../../Componentes/Modals/Notifications/Notifications";
 
 import "./home.css"
 

function Home() {
  
    const onClick = () =>
    {
      notifications.map( ( notification, i ) => (
                toast(<Notificaton index={i} notification={notification } />)
              ) )   
    }

    window.onload = () =>
    {
         onClick()
     }
  return (
    <>
      <Header title="Welcome, Abel ! 👋" />
      <Dashboard />
      <ToastContainer limit={ 10 } />

    </>
  );
}
export default Home;
