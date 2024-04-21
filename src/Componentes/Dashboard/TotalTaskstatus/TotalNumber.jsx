import React from "react";
import "./totalNumber.css";

const TotalNumber = ({ title, value,icon}) => {
 
  return (
    <div className="totalTaskStatus">
      <div>
       <span style={{color:value > 1 &&  value < 10 ? "0061c5" : value > 10 ? "#567799" : "red"}}>{value}</span>
        <h5>{title}</h5>
      </div>
         {icon}
    </div>
  );
};

export default TotalNumber;
