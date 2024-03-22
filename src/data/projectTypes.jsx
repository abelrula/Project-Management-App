import { FaResearchgate } from "react-icons/fa6";
import { MdOutlineAspectRatio } from "react-icons/md";
import { RiCustomerService2Fill, RiMarkPenFill } from "react-icons/ri";

const projectTypes = [
  {
    title: "Research",
    color: "rgb(94 145 151 / 67%)",
    icon: <FaResearchgate fill="red" className="icon" />
  },
  {
    title: "Software Developement",
    color: "rgb(205 137 95 / 57%)",
    icon: <RiCustomerService2Fill fill="black" />
  },
  {
    title: "Marketing",
    color: "rgb(147 12 194 / 62%)",
    icon: <RiMarkPenFill fill="brown" />
  },
  {
    title: "Operations",
    color: "rgb(205 177 95 / 77%)",
    icon: <MdOutlineAspectRatio fill="green" />
  },
  {
    title: "Daniel Apartemnt",
    color: "yellow",
    icon: <FaResearchgate />
  },
];
export default projectTypes;
