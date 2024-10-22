import  { useEffect, useState } from "react";
import { RiTeamLine } from "react-icons/ri";
import "./teamMembers.css";
import BoxHeader from "../../boxHeader/BoxHeader";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../redux/slices/modalSlice";
import ProfileModal from "../../Modals/ProfileModal/ProfileModal";
const TeamMembers = () => {
  const dispatch = useDispatch()
  const members = "http://localhost:3500/members";
  const {modalType,toggled}=useSelector(state=>state.modal)
  const [member, setMember] = useState([]);
  useEffect(() => {
    async function fetchMembers() {
      const data = await fetch(members);
      const res = await data.json();
      setMember(res);
    }
    fetchMembers();
  }, []);
  const Onclick =  () => dispatch( openModal( { modalType: "memberProfile", toggled: true } ) ) 

  return (
   <>
    <div className="TeamDirectory">
 
      <BoxHeader icon={<RiTeamLine />} header="Team Directories"  />
      
      <div className="TeamDirectory__members element-with-scroll">
        {member?.map((member, i) => (
          <div onClick={Onclick} className="TeamDirectory__members__member" key={i}>
            <img src={member.profile} alt="team-directory" />
            <div className="TeamDirectory__members__member--description">
              <h3>{member.name}</h3>
              <p>{member.jobCatagory}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     { modalType === "memberProfile" && toggled === true &&
          <ProfileModal />
      }
    </>
    
  );
};

export default TeamMembers;
