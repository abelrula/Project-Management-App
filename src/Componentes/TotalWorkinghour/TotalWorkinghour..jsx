import React, { useState } from "react";
import "./totalWorkinghour.css";
const TotalWorkinghour = ({
  sideData,
  underData,
  title,
  color,
  Total,
  avg,
}) => {
  const [dateSelection, setDateSelection] = useState();
  return (
    <div className="workHour">
      <div className="workHour__header">
        <h5 className="workHour__header-title">{title}</h5>
        <select onClick={(e) => setDateSelection(e.target.value)}>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Year</option>
        </select>
      </div>
      <div className="workHour__total">
        <h5
          className={
            title === "Total-Workings-Hour"
              ? "workHour__total-hour"
              : "workHour__total-revenue"
          }
        >
          {Total}
        </h5>
        <span
          className={
            title === "Total-Workings-Hour"
              ? "workHour__header-avg-hour"
              : "workHour__header-avg-revenue"
          }
        >
          Avg. {avg}/Month
        </span>
      </div>
      <div className="workHour__container">
        <div className="workHour__container-hours">
          {sideData.map((item, i) => (
            <span>{item}</span>
          ))}
        </div>
        <div className="workHour__container-contnet">
          {underData.map((item, i) => (
            <div className="hour" key={i}>
              <div
                className={
                  title === "Total-Workings-Hour" ? "fillHour" : "fillRevenue"
                }
              >
                <div
                  style={{
                    height: `${item.height}`,
                    width: "100%",
                    background: `${color}`,
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
              <span>{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalWorkinghour;
