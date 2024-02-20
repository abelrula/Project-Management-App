import { Fragment } from "react";
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
import { LuBoxSelect } from "react-icons/lu";
import ProgressBar from "../../Componentes/progressBar/ProgressBar";
 import Header from "../../Componentes/Header/Header";
 import "./overview.css"

const Overview = () => {
    const data = [
    {
      dataTitle: "building outer social life issues",
      allData: [
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "high",
          status: "not started",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={95} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "medium",
          status: "in progress",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={25} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "low",
          status: "finished",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={45} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "medium",
          status: "not started",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={15} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "high",
          status: "finsihed",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={45} bgcolor="blue" />,
        },
      ],
    },
    {
      dataTitle: "inner confidence building",
      allData: [
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "low",
          status: "in progress",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={70} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "low",
          status: "not started",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={45} bgcolor="blue" />,
        },
        {
          task: "completeing the dashboard",
          associate: "Not Assigned",
          owner: "simon jorge",
          priority: "medium",
          status: "in progress",
          startdate: "2023-25-12",
          duedate: "2023-25-12...",
          duration: "45 days",
          complete: <ProgressBar progress={45} bgcolor="blue" />,
        },
      ],
    },
  ];
  return (
 <>
      <Header title="Project Overview" />
      <table border="0">
        <thead>
          <tr>
            <th colspan="5">
              <select>
                <option value="All"> All</option>
                <option value="Open"> Open</option>
                <option value="Not Assigned"> Not Assigned</option>
                <option value="Finished"> Finished</option>
              </select>
            </th>
            <th colspan="2">
              <button>Add Task</button>
            </th>
            <th colspan="2">
              <select>
                <option value="Open"> classic</option>
                <option value="Not Assigned"> Ascending</option>
                <option value="Finished"> descending</option>
              </select>
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
          {data.map((item, i) => (
            <Fragment key={i}>
              <tr>
                <th colspan="9">{item.dataTitle}</th>
              </tr>
              {item.allData.map((descData, i) => (
                <tr key={i} className="data">
                  <td>
                    <LuBoxSelect />
                    {descData.task}
                  </td>
                  <td>{descData.associate} </td>
                  <td>{descData.owner}</td>
                  <td>
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
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </>  )
}

export default Overview
 