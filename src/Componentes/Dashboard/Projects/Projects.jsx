 import "./project.css";
import { MdOutlineAppRegistration } from "react-icons/md";
 import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
 import { VscProject } from "react-icons/vsc";
 import { GrProjects } from "react-icons/gr"
import projectTypes from "../../../data/projectTypes";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import AddButton from "../../AddButton/AddButton";
import BoxHeader from "../../boxHeader/BoxHeader";
const Projects = () => {
   return (
    <div className="projectCatagories">
      <BoxHeader icon={<VscProject />} header="Projects Directories"   />
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
       <AddButton name="Projects"/>
    </div>
   );
};

export default Projects;
// element-with-scroll
