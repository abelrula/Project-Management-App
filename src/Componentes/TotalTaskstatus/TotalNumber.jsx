import React from "react";
import "./totalNumber.css";
import { BsArrow90DegRight } from "react-icons/bs";
const TotalNumber = ({ title, value }) => {
  return (
    <div className="totalTaskStatus">
      <div>
        <h5>{title}</h5>
      <BsArrow90DegRight />
      </div>
      <span>{value}</span>
    </div>
  );
};

export default TotalNumber;
