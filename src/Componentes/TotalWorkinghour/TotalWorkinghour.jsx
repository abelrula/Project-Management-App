import React, { useState } from "react";
import "./totalWorkinghour.css";
import { week, hours } from "../../data/hour&month";
const TotalWorkinghour = () => {
  const [dateSelection, setDateSelection] = useState();
    return (
 <div className="workHour">
      <div className="workHour__header">
        <h5 className="workHour__header-title">Total-Workings-Hour</h5>
        <select onClick={(e) => setDateSelection(e.target.value)}>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Year</option>
        </select>
      </div>
      <div className="workHour__total">
        <h5
          className= "workHour__total-hour"
        >
          37 hours
        </h5>
        <span
          className="workHour__header-avg-hour" >
          Avg. 148 Hr/Month
        </span>
      </div>
      <div className="workHour__container">
        <div className="workHour__container-hours">
          {hours.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
        <div className="workHour__container-contnet">
          {week.map((item, i) => (
            <div className="hour" key={i}>
              <div className="fillHour">
                <div
                  style={{
                    height: `${item.height}`,
                    width: "100%",
                    background: "#d59566",
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
              <span>{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>  )
}

export default TotalWorkinghour
 
