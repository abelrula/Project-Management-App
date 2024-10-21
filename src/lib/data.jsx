 import { TbTimeDuration0 } from "react-icons/tb";
import { MdOutlineAssignmentInd, MdOutlineTaskAlt } from "react-icons/md";
import { FcDoughnutChart } from "react-icons/fc";
import { MdOutlineLowPriority } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
 import { TbStatusChange } from "react-icons/tb";
import { FaHourglassStart, FaTasks } from "react-icons/fa";
import { RiPassExpiredLine, RiPercentFill } from "react-icons/ri";
 import {  BiMessage } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";
import { FaResearchgate } from "react-icons/fa6";
import { MdOutlineAspectRatio } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import { FaThemeisle } from "react-icons/fa6";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdOutlineWallpaper } from "react-icons/md";
import {  BiTask } from "react-icons/bi";
import { BsBarChartSteps } from "react-icons/bs";
import {  IoDocumentTextOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { VscIssues } from "react-icons/vsc";
import { IoHelpCircleOutline } from "react-icons/io5";      
 import ProfileImage from "../Componentes/ProfileImage/ProfileImage"
import ProgressBar from "../Componentes/progressBar/ProgressBar";
 import CheckedCell from "../Componentes/Table/Cells/CheckedCell"
import TaskCell from "../Componentes/Table/Cells/TaskCell" 
 import StatusCell from "../Componentes/Table/Cells/StatusCell"
import PriorityCell from "../Componentes/Table/Cells/PriorityCell"
import { AiOutlineIssuesClose } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";
import { GiLevelEndFlag, GiTimeSynchronization } from "react-icons/gi";
import AssignedToCell from "../Componentes/Table/Cells/AssignedToCell";
 

export const projectTypes = [
  {
    title: "Daniels Apartement",
    color: "rgb(94 145 151 / 67%)",
    icon: <FaResearchgate fill="red" className="icon" />,
    TeamMembers:[
      {
          "name": "simon Jorge",
          "profile": "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
          "jobCatagory": "project manager",
          "progress": "80"
        },
        {
          "name": "Tmarcus Brown",
          "profile": "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D",
          "jobCatagory": "UX Designer",
          "progress": "40"
        },
        {
          "name": "Fabio Lucas",
          "profile": "https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D",
          "jobCatagory": "Technical support specialist",
          "progress": "70"
        },
        {
          "name": "Christina Ryoji",
          "profile": "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
          "jobCatagory": "Sales engineer.",
          "progress": "25"
        },
    ]
  },
  {
    title: "Software Developement",
    color: "rgb(205 137 95 / 57%)",
    icon: <RiCustomerService2Fill fill="black" />,
    TeamMembers:[
      {
      "name": "Fabio Lucas",
      "profile": "https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D",
      "jobCatagory": "Technical support specialist",
      "progress": "70"
    },
    {
      "name": "Christina Ryoji",
      "profile": "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Sales engineer.",
      "progress": "25"
    },
    {
      "name": "Ashely jhonson",
      "profile": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Database administrator",
      "progress": "50"
    },
    {
      "name": "Tmarcus Brown",
      "profile": "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D",
      "jobCatagory": "UX Designer",
      "progress": "40"
    },
    ]
  },
  {
    title: "Construction",
    color: "rgb(205 177 95 / 77%)",
    icon: <MdOutlineAspectRatio fill="green" />,
    TeamMembers:[ {
      "name": "Christina Ryoji",
      "profile": "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Sales engineer.",
      "progress": "25"
    },
    {
      "name": "Ashely jhonson",
      "profile": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Database administrator",
      "progress": "50"
    }]
  
  },
  {
    title: "Abel Apartemnt",
    color: "yellow",
    icon: <FaResearchgate />,
    TeamMembers:[ {
      "name": "Ashely jhonson",
      "profile": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Database administrator",
      "progress": "50"
    },
    {
      "name": "Tmarcus Brown",
      "profile": "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D",
      "jobCatagory": "UX Designer",
      "progress": "40"
    },
    {
      "name": "Fabio Lucas",
      "profile": "https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D",
      "jobCatagory": "Technical support specialist",
      "progress": "70"
    },
  ]
  },
];
export const overView = [
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "high",
          status: "not started",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={95} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "medium",
          status: "in progress",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={25} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "low",
          status: "finished",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={45} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "medium",
          status: "not started",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={15} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "high",
          status: "finsihed",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={45} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "low",
          status: "in progress",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={70} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "low",
          status: "not started",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={45} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "medium",
          status: "in progress",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={45} bgcolor="blue" />,
        },
]

// links that that used for navigaion the use onclick to wanted route
export const menuLinks = [
  {
    title: "Home",
    to: "/",
    icon: <BiHomeAlt2 className="icon" fill="#ffa909" />,
  },
  {
    title: "Schedules",
    to: "schedule",
    icon: <FaRegCalendarAlt className="icon" fill="#ffa909" />,
  },
  // {
  //   title: "Gant Chart",
  //   to: "team",
  //   icon: <HiUserGroup className="icon" fill="#ffa909" />,
  // },
 
  // {
  //   title: "OverView",
  //   to: "overview",
  //   icon: <BsActivity className="icon" fill="#ffa909" />,
  // },
  {
    title: "Message",
    to: "message",
    icon: <BiMessage className="icon" fill="#ffa909" />,
  },
  // {
  //   title: "Video Meeting",
  //   to: "videoChat",
  //   icon: <BiVideo className="icon" fill="#ffa909" />,
  // }
];
export const settingsLinks = [ 
    {
    title: "Notification",
    to: "notification",
    icon: <IoIosNotificationsOutline color="black" className="icon"  />,
  },
  {
    title: "Privacy",
    to: "privacy",
    icon: <SiGnuprivacyguard color="black" className="icon"  />,
  },
  {
    title: "Security",
    to: "security",
    icon: <IoKeyOutline  className="icon"  />,
  },
  {
    title: "Themes",
    to: "themes",
    icon: <FaThemeisle  className="icon"  />,
  },
  {
    title: "Chat Wallpaper",
    to: "chatWallpaper",
    icon: <MdOutlineWallpaper  className="icon"  />,
  },
  {
    title: "Request Info",
    to: "requestInfo",
    icon: <MdOutlineRequestPage  className="icon"  />,
  },
  {
    title: "Help",
    to: "help",
    icon: <IoHelpCircleOutline  className="icon" fill="tomato" />,
  },
  
]
export const ProjectDetailNavLinks = [
  { name: "Dashboard", icon: <MdDashboard />, to: "."},
  { name:"Tasks", icon:<BiTask />,to:"tasks"},
  { name: "Documents", icon: <IoDocumentTextOutline />, to: "documents" },
  { name: "Gant Charts", icon: <BsBarChartSteps />, to: "gantChart" },
  { name: "Issues", icon: <VscIssues />, to: "issues" },
  { name: "Timesheets", icon: <GiTimeSynchronization />, to: "timesheets" }
]
export const statusData = [
            {
             status:"low",
             background:"#675f00",
            },
             {
               status:"medium",
             classname:"Form__type-medium",
             background:"#0531f3",
            },
             {
            status:"high",
            background:"#ff0000",
            },
]
// dashboard top componenets total accomplised in number
 export const TotalAccompishedNumber = [
    {
      title: "Open Tasks",
      value:17,
      color:"green",
      icon:<BsListTask className="icon"/>
    },
     {
      title: "Closed Tasks",
      value:45,
      color:"red",
      icon:<MdOutlineTaskAlt  className="icon"/>
    },
     
     {
      title: "Total Tasks",
      value:12,
      color:"black",
      icon:<FaTasks  className="icon"/>
    },
    {
      title: "OverDue Tasks",
      value:30,
      color:"blue",
      icon:<RiPassExpiredLine  className="icon"/>
    },
    {
      title: "Opened Issue",
      value:0,
      color:"black",
      icon:<GoIssueOpened  className="icon"/>
    }
    ,
     {
      title: "Closed Issue",
      value:12,
      color:"black",
      icon:<AiOutlineIssuesClose  className="icon"/>
    },
     {
      title: "Open Phase",
      value:7,
      color:"black",
      icon:<GiLevelEndFlag className="icon"/>
    }
    ,
     {
      title: "Close Phase",
      value:12,
      color:"black",
      icon:<GiLevelEndFlag className="icon"/>
    }
  ] 

// table columns for tanstack
export const IssuecolumnsDef = [
                {
                  accessorKey:"issues",
                  header:<p>issues <BsListTask /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                {
                  accessorKey:"assigne",
                  header:<p>assigne<MdOutlineAssignmentInd /></p>,
                  cell: ( props ) => <span><ProfileImage name={props.getValue()} /> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </span>
                 } ,
                {
                  accessorKey:"status",
                  header:<p>Status<TbStatusChange /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                }
                , { 
                  accessorKey:"startDate",
                  header:<p> Start Date <FaHourglassStart /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                { 
                  accessorKey:"project",
                  header:<p>project <FcDoughnutChart /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                {
                  accessorKey:"reporter",
                  header:<p> <RiPercentFill />reporter <TbTimeDuration0 /></p>,
                                    cell: ( props ) => <span><ProfileImage name={props.getValue()} /> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </span>
                }
]
export const TaskcolumnDef = [
                {
                  accessorKey:"completed",
                  header:<p><BiCheckShield color="#3e5b5e" /></p>,
                  cell:CheckedCell
                } ,
                {
                  accessorKey:"task",
                  header:<p>Task <BsListTask color="#3e5b5e" /></p>,
                  cell:({cell,row})=><TaskCell row={row} />
                },
                {
                  accessorKey:"assignedTo",
                  header:<p>assigned To <MdOutlineAssignmentInd color="#3e5b5e" /></p>,
                  cell: AssignedToCell
                },
                // {
                //   accessorKey:"project",
                //   header: <p>project</p>,
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // },
                {
                  accessorKey:"priority",
                  header:<p>Priority <MdOutlineLowPriority color="#3e5b5e" /></p>,
                  cell:PriorityCell
                },
                {
                  accessorKey:"status",
                  header:<p>Status<TbStatusChange color="#3e5b5e" /></p>,
                  cell: StatusCell 
                }
                , { 
                  accessorKey:"startDate",
                  header:<p> Start Date <FaHourglassStart color="#3e5b5e" /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                { 
                  accessorKey:"endDate",
                  header:<p>duedate <FaHourglassStart color="#3e5b5e" /></p> ,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                }
                ,
                // { 
                //   accessorKey:"endDate",
                //   header:"EndDate",
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // },
                { 
                  accessorKey:"duration",
                  header:<p>Duration <FcDoughnutChart color="#3e5b5e" /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                {
                  accessorKey:"progressPercent",
                  header:<p>Complete <TbTimeDuration0 color="#3e5b5e" /></p>,
                  cell: ( props ) => <ProgressBar progress={ props.getValue() } />
                }
]

//  filter types
export const filterTypes = [ "All open", "Closed", "Upcoming", "Over due", "Completed" ]    
 

//  charts data 
export const weeklyData = [
  {
    day: "Mon",
    completion: "10%",
  },
  {
    day: "Tue",
    completion: "100%",
  },
  {
    day: "Wed",
    completion: "70%",
  },
  {
    day: "Thu",
    completion: "80%",
  },
  {
    day: "Fri",
    completion: "10%",
  },
  {
    day: "Sat",
    completion: "60%",
  },
  {
    day: "Sun",
    completion: "50%",
  },
];
export const Month = [
  {
    day: "Jan",
    height: "50%",
  },
  {
    day: "Feb",
    height: "100%",
  },
  {
    day: "Mar",
    height: "70%",
  },
  {
    day: "Apr",
    height: "80%",
  },
  {
    day: "Jun",
    height: "10%",
  },
  {
    day: "Jul",
    height: "60%",
  },
  {
    day: "Aug",
    height: "50%",
  },
  {
    day: "Sep",
    height: "50%",
  },
  {
    day: "Nov",
    height: "50%",
  },
  {
    day: "Dec",
    height: "50%",
  },
];
export const hours = ["0 hr", "2 hr", "4 hr", "6 hr", "8 hr"];
export const Revenue = ["$1000", "$2000 ", "$3000", "$4000", "$5000"];
export const months=[
      "Jan",
      "Feb",
      "Mar",
      "Apri",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
]
export const weeksLabel= [
      "Mon",
      "Tue",
      "Wend",
      "Thur",
      "Fri",
      "Sat",
      "Sun",
     ]