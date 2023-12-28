import React from "react";
import "./allprojectProgress.css";
import { months } from "../../data/hour&month";
const AllprojectProgress = () => {
  const progressStyle = {
    width: "100%",
    height: "15px",
    background: "aliceblue",
    borderRadius: "10px",
  };
  const progressStyleInner = {
    height: "100%/12",
    width: "50%",
    backgroundColor: "beige",
    alignItems: "center",
    display: "flex",
    borderRadius: 20,
  };
  return (
    <div className="projectProgress">
      <div className="projectProgress__side">
        <p>marketing</p>
        <p>research</p>
        <p>operation</p>
        <p>delivery</p>
      </div>
      <div className="projectProgress__content">
        <div className="projectProgress__content-top">
          {months.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
        <div className="projectProgress__content-data">
          <div style={progressStyle}>
            <span style={progressStyleInner}></span>
          </div>
          <div style={progressStyle}>
            <span style={progressStyleInner}></span>
          </div>
          <div style={progressStyle}>
            <span style={progressStyleInner}></span>
          </div>
          <div style={progressStyle}>
            <span style={progressStyleInner}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllprojectProgress;
