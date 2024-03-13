import { useState } from "react";
  import InfoCard from "../../Componentes/InfoCard/InfoCard";
 import Header from "../../Componentes/Header/Header";
 import "./report.css"
import TeamMembers from "../../Componentes/teamMembers/TeamMembers";
import AddProjectForm from "../../Componentes/AddProjectForm/AddProjectForm";
import AddMemberForm from "../../Componentes/AddMemberForm/AddMemberForm";
import AssignedTask from "../../Componentes/Assignedtask/AssignedTask";
import ProjectStatus from "../../Componentes/ProjectStatus/ProjectStatus";
import TotalHour from "../../Componentes/Total/TotalHour";
import TotalRevenue from "../../Componentes/Total/TotalRevenue";

// import 'chart.js/auto'
const Report = () => {
  
  const [ openModal, setOpenModal ] = useState( true );
  const [ openModalType, setOpenModalType ] = useState( "" );
  const [ active, setActive ] = useState(false);
  

  
  return (
    <>
      <Header title="Report" />
      <div className="Reports">
        <div className="TotalProjectsMemberes">
          {!active && <button
            onClick={()=>setActive((prev)=>!prev)}>
            View Asssigned Task
          </button>}
          {active && 
           <div className="modal">
          <AssignedTask title="Employee Tasks" footer="Assign Tasks" setActive={setActive} />
           </div>
          }
          <div className="totals">
            <InfoCard
              title="Total Projects"
              amount={50}
              buttonTitle="Add New Projects"
              setOpenModal={setOpenModal}
              setOpenModalType={setOpenModalType}
            />
            <InfoCard
              title="Team size"
              buttonTitle="Add New Members"
              amount={16}
              setOpenModal={setOpenModal}
              setOpenModalType={setOpenModalType}
            />
          </div>
          { openModal && openModalType === "Add New Projects" ?
          <AddProjectForm setOpenModal={ setOpenModal } /> :
          openModal && openModalType === "Add New Members" ?
          <AddMemberForm setOpenModal={ setOpenModal } /> : null }
          <ProjectStatus active={active} />
          {/* <ProjectCatagories /> */}
          {/* <TeamMembers /> */}
        </div>
        {/* <AllprojectProgress /> */}
           <div className="totalRevenues">
          <TotalHour />
          <TotalRevenue />
           </div>
      </div>
    </>
  );
};

export default Report;

