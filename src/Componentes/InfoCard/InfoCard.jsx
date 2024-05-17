import React from "react";
import "./InfoCard.css";
import { PiDotsNine } from "react-icons/pi";
const InfoCard = ({ title, setOpenModalType,buttonTitle, amount,setOpenModal }) => {
 
  return (
    <div className="card">
      <div className="Container">
        <div className="title">
          <h3>{title}</h3>
          <PiDotsNine />   
        </div>
        <div className="Total">
          <span>{amount}</span>
        </div>
        <div className="Add">
          <button
           className="Add"
            onClick={ () =>
            {
              setOpenModal( true )
              setOpenModalType(buttonTitle)
            }}
          >{ buttonTitle }</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
