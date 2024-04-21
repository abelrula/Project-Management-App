import { FaResearchgate } from "react-icons/fa6";
import { MdOutlineAspectRatio } from "react-icons/md";
import { RiCustomerService2Fill, RiMarkPenFill } from "react-icons/ri";

const projectTypes = [
  {
    title: "Daniels Apartement",
    color: "rgb(94 145 151 / 67%)",
    icon: <FaResearchgate fill="red" className="icon" />
  },
  {
    title: "Software Developement",
    color: "rgb(205 137 95 / 57%)",
    icon: <RiCustomerService2Fill fill="black" />
  },
  {
    title: "Construction",
    color: "rgb(205 177 95 / 77%)",
    icon: <MdOutlineAspectRatio fill="green" />
  },
  {
    title: "Abel Apartemnt",
    color: "yellow",
    icon: <FaResearchgate />
  },
];
export default projectTypes;
