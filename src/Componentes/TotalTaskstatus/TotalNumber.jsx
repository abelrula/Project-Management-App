import React from "react";
import "./totalNumber.css";
const TotalNumber = ({ title, value }) => {
  return (
    <div className="totalTaskStatus">
      <div>
        <h5>{title}</h5>
        <span>...</span>
      </div>
      <span>{value}</span>
    </div>
  );
};

export default TotalNumber;
