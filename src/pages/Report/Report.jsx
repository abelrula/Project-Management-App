import { useState } from "react";
  import InfoCard from "../../Componentes/InfoCard/InfoCard";
  import Header from "../../Componentes/header/Header";
  import "./report.css"
import AddProjectForm from "../../Componentes/Forms/AddProjectForm/AddProjectForm";
import AddMemberForm from "../../Componentes/Forms/AddMemberForm/AddMemberForm";
import AssignedTask from "../../Componentes/Assignedtask/AssignedTask";
import ProjectStatus from "../../Componentes/ProjectStatus/ProjectStatus";
import TotalRevenue from "../../Componentes/Charts/TotalRevenue";
import TotalHour from "../../Componentes/Charts/TotalHour";
import LineChart from "../../Componentes/Charts/LineChart";

// import 'chart.js/auto'
const Report = () => {
  
  const [ openModal, setOpenModal ] = useState( true );
  const [ openModalType, setOpenModalType ] = useState( "" );
  const [ active, setActive ] = useState(false);
 
  return (
    <>
      <Header title="Report" />
      <div className="reports">
        <div className="TotalProjectsMemberes">
          {/* {!active && <button

          
            onClick={()=>setActive((prev)=>!prev)}>
            View Asssigned Task
          </button>}
          {active && 
           <div className="modal">
          <AssignedTask title="Employee Tasks" footer="Assign Tasks" setActive={setActive} />
           </div>
          } */}
          <div className="totals">
            <InfoCard
              title="Total Projects"
              amount={50}
              buttonTitle="Add New Projects"
              setOpenModal={setOpenModal}
              setOpenModalType={setOpenModalType}
            />
            <InfoCard
              title="All Member"
              buttonTitle="Add New Members"
              amount={16}
              setOpenModal={setOpenModal}
              setOpenModalType={setOpenModalType}
            />
             <InfoCard
              title="All Teams"
              buttonTitle="Add New Team"
              amount={16}
              setOpenModal={setOpenModal}
              setOpenModalType={setOpenModalType}
            />  
             <InfoCard
              title="All Teams"
              buttonTitle="Add New Team"
              amount={16}
              setOpenModal={setOpenModal}
              setOpenModalType={setOpenModalType}
            />  
          </div>
          { openModal && openModalType === "Add New Projects" ?
          <AddProjectForm setOpenModal={ setOpenModal } /> :
          openModal && openModalType === "Add New Members" ?
          <AddMemberForm setOpenModal={ setOpenModal } /> : null }
          {/* <ProjectStatus active={active} /> */}
          {/* <ProjectCatagories /> */}
          {/* <TeamMembers /> */}
        </div>
        {/* <AllprojectProgress /> */}
          <TotalRevenue />
          <TotalHour  />
          {/* <LineChart color="black" /> */}
      </div>
    </>
  );
};

export default Report;

