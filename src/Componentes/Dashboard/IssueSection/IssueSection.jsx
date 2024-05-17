import React, { useState } from "react";
import "./issueSection.css";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
const IssueSection = ({title}) => {
  
  const [ selectedType, setSelectedType ] = useState("All")
  const [ filterActive, setfilterActive ] = useState(false)
  const filterTypes=["All open","Closed","Upcoming","Over due","Completed"]     

  return (
    <div className="issueSection">
      <div className="issueSection_header"><h3><PiDotsSixVerticalBold fontSize={20} color="black" />{title}</h3>
      <MdKeyboardArrowRight />
      <div className="tableHeader">
            <div className="tableHeader_filter">
             <label className="tableHeader_filter-selected"  onClick={()=>setfilterActive(true)}> {selectedType} <IoMdArrowDropdown />
</label>
             {filterActive &&  
              <ul className="tableHeader_filter-types">
              {filterTypes.map((item,i)=>(
              <li key={i} onClick={()=>{setSelectedType(item);setfilterActive(false)}}>{item}</li>
             ))}
             </ul>}
              </div>
            </div>
      </div>
      <div className="issueSection_issues">
        <div className="issueSection_issues-projectIssue">
          <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="avatar"
          />
          <span>
            <h6>elon musk from buisness and analytics</h6>
            <p>hey i think something is wrong</p>
          </span>
        </div>
        <div className="issueSection_issues-projectIssue">
          <img
            src="https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
          />
          <span>
            <h6>elon musk from buisness and analytics</h6>
            <p>hey i think something is wrong</p>
          </span>
        </div>
        <div className="issueSection_issues-projectIssue">
          <img
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="avatar"
          />
          <span>
            <h6>elon musk from buisness and analytics</h6>
            <p>hey i think something is wrong</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IssueSection;
