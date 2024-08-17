 import { BrowserRouter, Route, Routes } from "react-router-dom"
 import { MainLayout, MessageLayout, ProjectsDetailLayout, SettingsLayout } from "./Layouts";
  import { GantChart, Home, Overview, Schedules, Settings, VideoChat } from "./pages";
  import { ProjectDashboard, ProjectDocuments, ProjectGantChart, ProjectIssues, ProjectTasks,Comments,Subtasks,LogHours,Documents,Issues } from "./pages/ProjectDetail";
  import MessagesConvoversation from "./Componentes/messages/MessagesConvoversation/MessagesConvoversation";
  import MessageListheader from "./Componentes/messages/MessageListheader/MessageListheader";
  import './App.css'
 


// import ProjectsDescriiption from "./Componentes/ProjectsDescriiption/ProjectsDescriiption"
const App=() =>{
   return (
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={ <Home /> } />
              <Route path="schedule" element={<Schedules />} />
              <Route path="projects/:id" element={<ProjectsDetailLayout />} >
                      <Route index element={<ProjectDashboard />}  />
                    <Route path="tasks" element={ <ProjectTasks /> }>
                          <Route index path="comments" element={ <Comments /> }/>
                          <Route  path="subtasks" element={ <Subtasks /> }/>
                          <Route  path="logHours" element={ <LogHours /> }/>
                          <Route  path="documents" element={ <Documents /> }/>
                          <Route  path="issues" element={   <Issues /> }/>
                  </Route>
                      <Route path="gantChart" element={<ProjectGantChart />} />
                      <Route path="issues" element={ <ProjectIssues /> } />
                      <Route path="documents" element={<ProjectDocuments />} />
                       {/* <Route path="timesheets" element={<Timesheets />} /> */}
              </Route>
              <Route path="overview" element={<Overview />} />
              <Route path="team" element={<GantChart />} />
              <Route path="message" element={<MessageLayout />}>
                  <Route index element={<MessageListheader />} />
              <Route path=":id" element={<MessagesConvoversation />} />
              </Route>
              <Route path="videoChat" element={<VideoChat />} />
              <Route path="settings" element={ <SettingsLayout /> } >
                <Route path=":id" element={ <Settings /> } />
              </Route>
              </Route>
          </Routes>    
     </BrowserRouter>
     
  )
}

export default App
