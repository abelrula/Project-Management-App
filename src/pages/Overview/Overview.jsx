import { Fragment,useState } from "react";
import { BsListTask } from "react-icons/bs";
import { TbStatusChange } from "react-icons/tb";
import { TbTimeDuration0 } from "react-icons/tb";
import { FaHourglassStart } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { CgAssign } from "react-icons/cg";
import { TbCalendarDue } from "react-icons/tb";
import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import { MdOutlineLowPriority } from "react-icons/md";
  import Header from "../../Componentes/Header/Header";
   import { Link } from "react-router-dom";
 import "./overview.css"
import overView from "../../data/overView";
import Form from "../../Componentes/Form/Form";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
 import img1 from "../../assets/worker2.jpg"

const Overview = () => {
  const [ active, setActive ] = useState(false)
   const [ checked, setChecked ] = useState()
  console.log(checked);
  return (
    <>
      <Header title="Project Overview" />
      <table >
        <thead>
          <tr className="data">
            <th >
              <BiUpArrowAlt className="icon"/>
              <BiDownArrowAlt className="icon"/>
            </th>
            <th  >
              <select>
                <option value="All"> All</option>
                <option value="Open"> Open</option>
                <option value="Not Assigned"> Not Assigned</option>
                <option value="Finished"> Finished</option>
              </select>
            </th>
             <th colspan="8">
              <button className="link"  onClick={()=>setActive(true)} >Assign Task</button>
            </th>
          </tr>
          <tr>
            <th>
              <span>
                Task
                <BsListTask />
              </span>
            </th>
            <th>
              <span>
                Associate <CgAssign />
              </span>
            </th>
            <th>
              <span>
                Owner
                <MdOutlineAssignmentInd />
              </span>
            </th>
            <th>
              <span>
                Priority
                <MdOutlineLowPriority />
              </span>
            </th>
            <th>
              <span>
                Status
                <TbStatusChange />
              </span>
            </th>
            <th>
              <span>
                Start Date <FaHourglassStart />
              </span>
            </th>
            <th>
              <span>
                Due Date <TbCalendarDue />
              </span>
            </th>
            <th>
              <span>Duaration</span>
            </th>
            <th>
              <span>
                %Complete <TbTimeDuration0 />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
              {overView.map((descData, i) => (
                <tr key={i} className="data">
                  <td>
                    <input type="checkbox" onClick={(e)=>setChecked(e.target.checked)} />
                    {descData.task}
                  </td>
                  <td>{descData.associate} </td>
                  <td className="assignedTo">
                    <img src={ img1 } alt="person" />
                    <span>{ descData.owner }</span>
                    </td>
                  <td >
                    <span>
                      {descData.priority === "high" ? (
                        <FcHighPriority />
                      ) : descData.priority === "medium" ? (
                        <FcMediumPriority />
                      ) : (
                        <FcLowPriority />
                      )}
                      {descData.priority}
                    </span>
                  </td>
                  <td>
                    <span
                      className="status"
                      style={{
                        background:
                          descData.status === "not started"
                            ? "#2d6ba1"
                            : descData.status === "in progress"
                            ? "#5c6621"
                            : "#796a19",
                      }}
                    >
                      {descData.status}
                    </span>
                  </td>
                  <td>{descData.startdate}</td>
                  <td>{descData.duedate}</td>
                  <td>{descData.duration}</td>
                  <td>{descData.complete}</td>
                </tr>
            ))  }
        </tbody>
      </table>
    {active &&  <Form  setActive={setActive}/> }
    </>
  );
}

export default Overview
 