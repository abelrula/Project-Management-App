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
  import Timesheets from "./Componentes/ProjectSubInfo/Timesheets/Timesheets"
  import ProGantChart from "./Componentes/ProjectSubInfo/GantChart/GantChart"
  import Reports from "./Componentes/ProjectSubInfo/Reports/Reports"
  import Documents from "./Componentes/ProjectSubInfo/Documents/Documents"
import Issues from "./Componentes/Table/Issues";
// import ProjectsDescriiption from "./Componentes/ProjectsDescriiption/ProjectsDescriiption"
const App=() =>{
 
  return (
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={ <Home /> } />
              <Route path="schedule" element={<Schedules />} />
              <Route path="projects/:id" element={<Overview />} >
                      <Route index element={<Projects />}  />
                      <Route path="gantChart" element={<ProGantChart />} />
                      <Route path="issues" element={ <Issues /> } />
                      <Route path="documents" element={<Documents />} />
                      <Route path="report" element={<Reports />} />
                      <Route path="timesheets" element={<Timesheets />} />
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
