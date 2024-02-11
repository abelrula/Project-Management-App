import  { useEffect, useState } from "react";
import "./teamMembers.css";
const TeamMembers = () => {
  const members = "http://localhost:3500/members";
  const [member, setMember] = useState([]);
  useEffect(() => {
    async function fetchMembers() {
      const data = await fetch(members);
      const res = await data.json();
      setMember(res);
    }
    fetchMembers();
  }, []);
  return (
    <div className="TeamDirectory">
      <h5>Team-Directory</h5>
      <div className="TeamDirectory__members element-with-scroll">
        {member?.map((member, i) => (
          <div className="TeamDirectory__members__member" key={i}>
            <img src={member.profile} alt="team-directory" />
            <div className="TeamDirectory__members__member--description">
              <h3>{member.name}</h3>
              <p>{member.jobCatagory}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
