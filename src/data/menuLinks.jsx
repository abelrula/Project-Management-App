  import {  BiMessage, BiVideo } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import { MdLocalLibrary } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";
const menuLinks = [
  {
    title: "Home",
    to: "/",
    icon: <BiHomeAlt2 className="icon" fill="#ffa909" />,
  },
  // {
  //   title: "My Tasks",
  //   to: "myTasks",
  //   icon: <SiCodefactor className="icon" fill="#ffa909" />,
  // },
  {
    title: "Calander Schedules",
    to: "schedule",
    icon: <FaRegCalendarAlt className="icon" fill="#ffa909" />,
  },
  {
    title: "Project Overview",
    to: "overview",
    icon: <MdLocalLibrary className="icon" fill="#ffa909" />,
  },
  {
    title: "Report",
    to: "report",
    icon: <BsActivity className="icon" fill="#ffa909" />,
  },
  {
    title: "Team",
    to: "team",
    icon: <HiUserGroup className="icon" fill="#ffa909" />,
  },
  {
    title: "Message",
    to: "message",
    icon: <BiMessage className="icon" fill="#ffa909" />,
  },
  {
    title: "Video Conference",
    to: "videoconfrence",
    icon: <BiVideo className="icon" fill="#ffa909" />,
  },
  {
    title: "Add New Members",
    to: "addTodo",
    icon: <IoIosAddCircle className="icon" fill="tomato" />,
  },
];

export default menuLinks;
