 import { BrowserRouter, Route, Routes } from "react-router-dom"
  import { GantChart, Home, Overview, Report, Schedules, VideoChat } from "./pages";
  import './App.css'
import MessageLayout from "./Componentes/Layouts/MessageLayout";
import Layout from "./Componentes/Layouts/Layout";
import SettingsLayout from "./Componentes/Layouts/SettingsLayout";
import Setting from "./Componentes/Setting/Setting";
import MessagesConvoversation from "./Componentes/messages/MessagesConvoversation/MessagesConvoversation";
import MessageListheader from "./Componentes/messages/MessageListheader/MessageListheader";
import Projects from "./Componentes/Table/Projects";
  

const App=() =>{
 
  return (
         <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={ <Home /> } />
           <Route path="schedule" element={<Schedules />} />
            <Route path="projects" element={<Overview />} >
                <Route path=":id" element={<Projects />} >
                  <Route path="description" element={<ProjectsDescriiption />} />
                </Route>
            </Route>
           <Route path="report" element={<Report />} />
           <Route path="team" element={<GantChart />} />
           <Route path="message" element={<MessageLayout />}>
              <Route index element={<MessageListheader />} />
             <Route path=":id" element={<MessagesConvoversation />} />
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
