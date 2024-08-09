import React, { useState } from "react";
import "./issueSection.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import AddButton from "../../AddButton/AddButton";
import BoxHeader from "../../boxHeader/BoxHeader";
const IssueSection = ({title}) => {
  
  const [ selectedType, setSelectedType ] = useState( "All" );
console.log(selectedType);

  const filterTypes=["All open","Closed","Upcoming","Over due","Completed"]     

  return (
    <div className="issueSection">
      <BoxHeader icon={<MdKeyboardArrowRight />} header={title } filterTypes={filterTypes} setSelectedType={setSelectedType} selectedType={selectedType} />
      <div className="issueSection__issues">
        <div className="issueSection__issues-projectIssue">
          <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="avatar"
          />
          <span>
            <h6>elon musk from buisness and analytics</h6>
            <p>hey i think something is wrong</p>
          </span>
        </div>
        <div className="issueSection__issues-projectIssue">
          <img
            src="https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
          />
          <span>
            <h6>elon musk from buisness and analytics</h6>
            <p>hey i think something is wrong</p>
          </span>
        </div>
        <div className="issueSection__issues-projectIssue">
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
                <AddButton name="Issue" />
    </div>
  );
};

export default IssueSection;
