  import { BrowserRouter, Route ,Routes} from "react-router-dom"
import Layout from "./Componenets/Layout"
 import { Home, MyTask } from "./pages";
 import AddTodo from "./pages/AddTodo/AddTodo";
 import CalanderSchedules from "./pages/calanderSchedules/CalanderSchedules";
 import Report from "./pages/report/Report";
 import Videoconfrence from "./pages/videoConfrence/Videoconfrence";
 import Team from "./pages/team/Team";
 import ProjectOverview from "./pages/projectOverView/ProjectOverview";
 import MessageLayout from "./Componenets/MessageLayout";
 import MessagesConvoversation from "./Componenets/messages/MessagesConvoversation/MessagesConvoversation";
 import MessageListheader from "./Componenets/messages/MessageListheader/MessageListheader";
 const App = () => {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="mytasks" element={<MyTask />} />
           <Route path="schedule" element={<CalanderSchedules />} />
           <Route path="overview" element={<ProjectOverview />} />
           <Route path="report" element={<Report />} />
           <Route path="team" element={<Team />} />
           <Route path="message" element={<MessageLayout />}>
             <Route index element={<MessageListheader />} />
             <Route path=":id" element={<MessagesConvoversation />} />
           </Route>
           <Route path="videoconfrence" element={<Videoconfrence />} />
           <Route path="addTodo" element={<MyTask />} />
         </Route>
       </Routes>
     </BrowserRouter>
   );
 };

export default App