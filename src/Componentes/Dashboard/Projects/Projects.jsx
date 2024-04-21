 import "./project.css";
import { MdOutlineAppRegistration } from "react-icons/md";
 import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
 import { GrProjects } from "react-icons/gr"
import projectTypes from "../../../data/projectTypes";
import { PiDotsSixVerticalBold } from "react-icons/pi";
const Projects = () => {
   return (
    <div className="projectCatagories">
  <div className="projectCatagories_header">
  <span> <PiDotsSixVerticalBold fontSize={20} color="black" /> <h3>Projects</h3></span>
  </div>
      <div className="projectCatagories__cards" >
        {projectTypes?.map((item, i) => (
          <span
          className="projectCatagories__cards-card"
          key={i}>
              <MdOutlineAppRegistration/>
             <p className="title">{item.title}</p>
          </span>
        ))}
      </div>
    </div>
   );
};

export default Projects;
// element-with-scroll
