import  { useRef } from "react";
import "./project.css";
// import { MdOutlineAppRegistration } from "react-icons/md";
 import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import project from "../../data/projectTypes";
const Projects = () => {
  const listRef = useRef();
  function handleClick(direction) {
    if (direction === "right") {
      // listRef.current.style.transform = `translateX(200px)`;
    }
    if (direction === "left") {
      // listRef.current.style.transform = `translateX(-200px)`;
    }
  }
  console.log(listRef.current);
  return (
    <div className="projectCatagories">
      <BiArrowFromRight
        className="sliderArrow left"
        onClick={handleClick("left")}
      />
      <div className="projectCatagories__cards" ref={listRef}>
        {project?.map((item, i) => (
          <div
            className="projectCatagories__cards-card"
            key={i}
            style={{ background: `${item.color}` }}
          >
            <span className="iconWrapper">{item.icon}</span>
            <span className="title">{item.title}</span>
          </div>
        ))}
      </div>
      <BiArrowFromLeft
        className="sliderArrow right"
        onClick={handleClick("right")}
      />
    </div>
  );
};

export default Projects;
// element-with-scroll
