 import "./project.css";
import { MdOutlineAppRegistration } from "react-icons/md";
 import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
 import { VscProject } from "react-icons/vsc";
 import { GrProjects } from "react-icons/gr"
import projectTypes from "../../../data/projectTypes";
import { PiDotsSixVerticalBold } from "react-icons/pi";
const Projects = () => {
   return (
    <div className="projectCatagories">
  <div className="projectCatagories_header">
  <span>
     <PiDotsSixVerticalBold fontSize={20} color="black" /> 
     <h3>Projects Directories</h3>
      <VscProject/>
     </span>
  </div>
      <div className="projectCatagories__cards" >
        {projectTypes?.map((item, i) => (
        <div>
            <span
          className="projectCatagories__cards-card"
          key={i}>
          <MdOutlineAppRegistration/>
          <p className="title">{item.title}</p>
          </span>
          <span>
            {item.TeamMembers.map((team,i)=>(
             <img src={team.profile} />
            ))}
          </span>
          </div>
        ))}
      </div>
    </div>
   );
};

export default Projects;
// element-with-scroll
