import React from "react";
import "./InfoCard.css";
const InfoCard = ({ title, buttonTitle, amount }) => {
  return (
    <div className="card">
      <div className="Container">
        <div className="title">
          <h3>{title}</h3>
          <span>...</span>
        </div>
        <div className="Total">
          <span>{amount}</span>
        </div>
        <div className="Add">
          <button>{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
