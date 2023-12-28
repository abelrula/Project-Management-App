import React from "react";
import Header from "../../Componenets/Header/Header";
import InfoCard from "../../Componenets/InfoCard/InfoCard";
import "./report.css";
import { week, Month, hours, Revenue } from "../../data/hour&month";
import ProjectCatagories from "../../Componenets/ProjectCatagories/ProjectCatagories";
import TotalWorkinghour from "../../Componenets/TotalWorkinghour/TotalWorkinghour.";
import AllprojectProgress from "../../Componenets/AllprojectProgress/AllprojectProgress";
import TeamMembers from "../../Componenets/teamMembers/TeamMembers";
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
              backgroundColor="#ff103b"
            />
            <InfoCard
              title="Team size"
              buttonTitle="Add New Members"
              amount={16}
              backgroundColor="#29a03e"
            />
          </div>
          <ProjectCatagories />
          <TeamMembers />
        </div>
        {/* <AllprojectProgress /> */}
        <div className="totalRevenues">
          <TotalWorkinghour
            sideData={hours}
            underData={week}
            title="Total workings hour"
            color="#d59566"
            Total="37 hours"
            avg="148 Hr"
          />
          <TotalWorkinghour
            sideData={Revenue}
            underData={Month}
            title="Total Revenue"
            color="#3787db"
            Total="+ $25000"
            avg="$2000"
          />
        </div>
      </div>
    </>
  );
};

export default Report;
