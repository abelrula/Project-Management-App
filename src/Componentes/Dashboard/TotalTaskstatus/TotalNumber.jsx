import React from "react";
import "./totalNumber.css";
import CountUp from 'react-countup';
const TotalNumber = ({ title, value,icon}) => {
 
  return (
    <div className="totalTaskStatus">
      <div>
       <span style={{color:value > 1 &&  value < 10 ? "0061c5" : value > 10 ? "#567799" : "red"}}><CountUp start={0} duration={4.75} end={value} /></span>
        <h5>{title}</h5>
      </div>
         {icon}
    </div>
  );
};

export default TotalNumber;
