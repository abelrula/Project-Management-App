import React from "react";
import "./totalNumber.css";
 import { GrLinkNext } from "react-icons/gr";

const TotalNumber = ({ title, value,setOpen,setOpenTitle }) => {
  return (
    <div className="totalTaskStatus">
      <div>
        <h5>{title}</h5>
        <GrLinkNext color="black" className="icon" onClick={ () => { setOpen( true ); setOpenTitle(title)}}  />
      </div>
      <span>{value}</span>
    </div>
  );
};

export default TotalNumber;
