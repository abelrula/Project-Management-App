 import "./project.css";
import { MdOutlineAppRegistration } from "react-icons/md";
 import { VscProject } from "react-icons/vsc";
  import BoxHeader from "../../boxHeader/BoxHeader";
import AddButton from "../../Buttons/AddButton/AddButton";
import { projectTypes } from "../../../lib/data";
import AddProjectForm from "../../Forms/AddProjectForm/AddProjectForm"
import { openModal } from "../../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
const Projects = () => {
  const {modalType,toggled}=useSelector(state=>state.modal)
  const dispatch = useDispatch()
const onClick = () => dispatch( openModal( { modalType: "AddProject", toggled: true } ) )

  return (
    <>
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
       <AddButton Onclick={onClick} name="Projects"/>
    </div>
    { modalType === "AddProject" && toggled === true && <AddProjectForm />}
    </>
   );
};

export default Projects;
// element-with-scroll
