import React from "react";
import "./totalNumber.css";
 import { GrLinkNext } from "react-icons/gr";
import LineChart from "../Charts/LineChart";

const TotalNumber = ({ title, value,setOpen,setOpenTitle,color }) => {
  return (
    <div className="totalTaskStatus">
      <div>
        <h5>{title}</h5>
      </div>
      <span>{value}</span>
      <LineChart color={color} />
    </div>
  );
};

export default TotalNumber;
