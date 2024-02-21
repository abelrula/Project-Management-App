        
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import { FaThemeisle } from "react-icons/fa6";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdOutlineWallpaper } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";      
const settingsLinks = [ 
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
  }
]
export default settingsLinks