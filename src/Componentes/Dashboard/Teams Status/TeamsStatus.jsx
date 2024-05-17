import React from 'react'
import "./teamsStatus.css"
import { PiDotsSixVerticalBold } from "react-icons/pi";
import ProfileImage from "../../ProfileImage/ProfileImage"
const TeamsStatus = () => {
    return (
        <div className="teamstatus">
          <div className="teamstatus_header"> <PiDotsSixVerticalBold fontSize={20} color="black" /> <h3>Teams Status</h3></div>
        <table>
            <thead>
                <tr className='teamstatus__tableRow'>
                     <th colSpan={3}>Users
                    </th>
                    <th colSpan={3} className="tasks">Tasks
                    </th>
                    <th colSpan={3} className="issue">Issues
                    </th>
                </tr>
                <tr>
                    <th colSpan={3}>
                    </th>
                    <th className="tasks">Ov...
                    </th>
                    <th className="tasks">Tod...
                    </th>
                    <th className="tasks">All..
                    </th>
                    <th className="issue">Ov...
                    </th>
                    <th className="issue">Tod...
                    </th>
                    <th className="issue">All..
                    </th>
                </tr>
            </thead>
            <tbody>
           <tr> 
                    <td colSpan={3}>
                        <span><ProfileImage name="simon Jorge" className="issue"/>simon Jorge  </span>
                    </td>
                    <td className="tasks">15</td>
                    <td className="tasks">10</td>
                    <td className="tasks">20</td>
                    <td className="issue">0</td>
                    <td className="issue">60</td>
                    <td className="issue">20</td></tr>
                    <tr> <td colSpan={3}><span><ProfileImage name="Christina Ryoji" className="issue"/>Christina Ro... </span></td>
                    <td className="tasks">15</td>
                    <td className="tasks">10</td>
                    <td className="tasks">20</td>
                    <td className="issue">0</td>
                    <td className="issue">60</td>
                    <td className="issue">20</td></tr>
                    <tr> <td colSpan={3}><span><ProfileImage name="Ashely jhonson" className="issue"/>Ashely jhonson  </span></td>
                    <td className="tasks">15</td>
                    <td className="tasks">10</td>
                    <td className="tasks">20</td>
                    <td className="issue">0</td>
                    <td className="issue">60</td>
                    <td className="issue">20</td></tr>
                    <tr> <td colSpan={3}><span><ProfileImage name="Tmarcus Brown" className="issue"/>Tmarcus Brown  </span></td>
                    <td className="tasks">15</td>
                    <td className="tasks">10</td>
                    <td className="tasks">20</td>
                    <td className="issue">0</td>
                    <td className="issue">60</td>
                    <td className="issue">20</td></tr>
            </tbody>
        </table>
        </div>
      );
}

export default TeamsStatus