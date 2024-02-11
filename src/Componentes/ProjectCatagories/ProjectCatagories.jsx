 import "./projectCatagories.css";
import Projects from "../Projects/Projects";
const ProjectCatagories = () => {
  return (
    <div className="projectCatagory">
      <div className="projectCatagory__top">
        <span>Project Catagories</span>
        <span>see more </span>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectCatagories;
