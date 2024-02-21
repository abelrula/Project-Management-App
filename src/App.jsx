 import { BrowserRouter, Route, Routes } from "react-router-dom"
  import { GantChart, Home, MyTask, Overview, Report, Schedules, VideoChat } from "./pages";
  import './App.css'
import MessageLayout from "./Componentes/Layouts/MessageLayout";
import Layout from "./Componentes/Layouts/Layout";
import SettingsLayout from "./Componentes/Layouts/SettingsLayout";
import Setting from "./Componentes/Setting/Setting";

const App=() =>{
 
  return (
    
         <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="mytasks" element={<MyTask />} />
           <Route path="schedule" element={<Schedules />} />
           <Route path="overview" element={<Overview />} />
           <Route path="report" element={<Report />} />
           <Route path="team" element={<GantChart />} />
           <Route path="message" element={<MessageLayout />}>
           </Route>
           <Route path="videoChat" element={<VideoChat />} />
           <Route path="settings" element={ <SettingsLayout /> } >
             <Route path=":id" element={ <Setting /> } />
           </Route>
          </Route>
       </Routes>
     </BrowserRouter>
     
  )
}

export default App
