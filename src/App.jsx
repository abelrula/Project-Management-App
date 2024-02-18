 import { BrowserRouter, Route, Routes } from "react-router-dom"
  import { GantChart, Home, MyTask, Overview, Report, Schedules, VideoChat } from "./pages";
  import './App.css'
import Layout from "./Componentes/Layout";
import MessageLayout from "./Componentes/MessageLayout";

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
          </Route>
       </Routes>
     </BrowserRouter>
     
  )
}

export default App
