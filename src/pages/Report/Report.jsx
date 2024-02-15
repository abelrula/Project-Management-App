import { useState } from "react";
//  import ProjectCatagories from "../../Componenets/ProjectCatagories/ProjectCatagories";
 import ProjectStatus from "../../Componentes/ProjectStatus/ProjectStatus";
import InfoCard from "../../Componentes/InfoCard/InfoCard";
import TeamMembers from "../../Componentes/teamMembers/TeamMembers";

// ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import "./report.css"
import Header from "../../Componentes/Header/Header";

const Report = () => {
  
 

  return (
     <>
      <Header title="Report" />
     <div className="Reports">
        <div className="TotalProjectsMemberes">
          <div className="totals">
            <InfoCard
              title="Total Projects"
              amount={50}
              buttonTitle="Add New Projects"
            />
            <InfoCard
              title="Team size"
              buttonTitle="Add New Members"
              amount={16}
            />
          </div>
          <ProjectStatus />
          <TeamMembers />
          </div>
      </div>
      </>
  )
}

export default Report