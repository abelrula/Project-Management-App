 import { BrowserRouter, Route, Routes } from "react-router-dom"
  import { GantChart, Home, MyTask, Overview, Report,Tasks, Schedules, VideoChat,AddTodo } from "./pages";
  import './App.css'
import MessageLayout from "./Componentes/Layouts/MessageLayout";
import Layout from "./Componentes/Layouts/Layout";
import SettingsLayout from "./Componentes/Layouts/SettingsLayout";
import Setting from "./Componentes/Setting/Setting";
import MessagesConvoversation from "./Componentes/messages/MessagesConvoversation/MessagesConvoversation";
import MessageListheader from "./Componentes/messages/MessageListheader/MessageListheader";
 

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
          <Route path="tasks" element={ <Tasks /> } >
            {/* <Route path=":id" element={<VideoChat />} /> */}
            </Route>
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
