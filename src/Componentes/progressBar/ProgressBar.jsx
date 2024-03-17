// Filename - Progress_bar.js

import React from "react";
import "./proressBar.css";
const ProgressBar = ({  progress }) => {
  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#3535ff",
    borderRadius: 40,
    textAlign: "right",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
  };

  const progresstext = {
    padding: 10,
    color: "white",
  };

  return (
    <div className="parent">
      <div className="child" style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
