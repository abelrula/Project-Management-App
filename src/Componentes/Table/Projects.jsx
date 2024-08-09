import React, { useEffect, useState } from 'react'
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table"
import ProgressBar from "../../Componentes/progressBar/ProgressBar";
 import CheckedCell from "./Cells/CheckedCell"
import TaskCell from "./TaskCell"
import PriorityCell from "./Cells/PriorityCell"
import StatusCell from "./Cells/StatusCell"
           import { TbStatusChange, TbTimeDuration10 } from "react-icons/tb";
            import { TbTimeDuration0 } from "react-icons/tb";
            import { FaHourglassStart, FaLayerGroup } from "react-icons/fa";
            import { MdArrowDropDown, MdOutlineAssignmentInd } from "react-icons/md";
            import { FcDoughnutChart, FcHighPriority } from "react-icons/fc";
            import { MdOutlineLowPriority } from "react-icons/md";
            import {  BiCheckShield, BiPlus } from "react-icons/bi";
            import { GiClassicalKnowledge } from 'react-icons/gi';
            import { IoAddCircle } from 'react-icons/io5';
            import { IoMdArrowDropdown } from "react-icons/io";
            import { BsListTask, BsPersonCircle } from "react-icons/bs";
            import ProfileImage from "../ProfileImage/ProfileImage"
import AssignTaskForm from '../Forms/AssignTaskForm/AssignTaskForm';
import BoxHeader from '../boxHeader/BoxHeader';

const Projects = () => {
  const [ projectTasks, setProjectTasks ] = useState( [] )
  const [ issueTracking, setIssueTracking ] = useState( [] )
  
  //   {
  //     issues: "completeing the dashboard",
  //     project: "Marketing",
  //     reporter: "Fabio Lucas",
  //     assigne: "Fabio Lucas",
  //     jobCatagory: "Technical support specialist",
  //     startDate: "2024-02-25",
  //     status: "in progress"
  //   },
  //   {
  //     issues: "completeing the dashboard",
  //     project: "Marketing",
  //     reporter: "Fabio Lucas",
  //     assigne: "Fabio Lucas",
  //     jobCatagory: "Technical support specialist",
  //     startDate: "2024-02-25",
  //     status: "in progress"
  //   }
  //   ,{
  //     issues:"completeing the dashboard",
  //     project: "Marketing",
  //     reporter: "Fabio Lucas",
  //     assigne: "Fabio Lucas",
  //     jobCatagory: "Technical support specialist",
  //     startDate: "2024-02-25",
  //     status: "in progress"
  //   } ] )

              const [ active, setActive ] = useState( false )
              const [ checked, setChecked ] = useState()
              const [ selectedType, setSelectedType ] = useState("All")
              const [ filterActive, setfilterActive ] = useState(false)
              const columns=[
                {
                  accessorKey:"completed",
                  header:<p><BiCheckShield color="#3e5b5e" /></p>,
                  cell:CheckedCell
                } ,
                {
                  accessorKey:"task",
                  header:<p>Task <BsListTask color="#3e5b5e" /></p>,
                  cell:TaskCell
                },
                {
                  accessorKey:"assignedTo",
                  header:<p>assigned To <MdOutlineAssignmentInd color="#3e5b5e" /></p>,
                  cell: ( props ) => <span><ProfileImage name={props.getValue()} /> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </span>
                },
                // {
                //   accessorKey:"project",
                //   header: <p>project</p>,
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // },
                {
                  accessorKey:"priority",
                  header:<p>Priority <MdOutlineLowPriority color="#3e5b5e" /></p>,
                  cell:PriorityCell
                },
                {
                  accessorKey:"status",
                  header:<p>Status<TbStatusChange color="#3e5b5e" /></p>,
                  cell: StatusCell 
                }
                , { 
                  accessorKey:"startDate",
                  header:<p> Start Date <FaHourglassStart color="#3e5b5e" /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                { 
                  accessorKey:"endDate",
                  header:<p>duedate <FaHourglassStart color="#3e5b5e" /></p> ,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                }
                ,
                // { 
                //   accessorKey:"endDate",
                //   header:"EndDate",
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // },
                { 
                  accessorKey:"duration",
                  header:<p>Duration <FcDoughnutChart color="#3e5b5e" /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                {
                  accessorKey:"progressPercent",
                  header:<p>Complete <TbTimeDuration0 color="#3e5b5e" /></p>,
                  cell: ( props ) => <ProgressBar progress={ props.getValue() } />
                }
              ]
              // const columns2=[
              //   {
              //     accessorKey:"issues",
              //     header:<p>issues <BsListTask /></p>,
              //     cell: ( props ) => <p>{ props.getValue() }</p>
              //   },
              //   {
              //     accessorKey:"assigne",
              //     header:<p>assigne<MdOutlineAssignmentInd /></p>,
              //     cell: ( props ) => <p>{ props.getValue() }</p>
              //    } ,
              //   {
              //     accessorKey:"status",
              //     header:<p>Status<TbStatusChange /></p>,
              //     cell: ( props ) => <p>{ props.getValue() }</p>
              //   }
              //   , { 
              //     accessorKey:"startDate",
              //     header:<p> Start Date <FaHourglassStart /></p>,
              //     cell: ( props ) => <p>{ props.getValue() }</p>
              //   },
              //   { 
              //     accessorKey:"project",
              //     header:<p>project <FcDoughnutChart /></p>,
              //     cell: ( props ) => <p>{ props.getValue() }</p>
              //   },
              //   {
              //     accessorKey:"reporter",
              //     header:<p> <RiPercentFill />reporter <TbTimeDuration0 /></p>,
              //     cell: ( props ) => <p>{ props.getValue() }</p>
              //   }
              // ]
             
              useEffect( () =>{ 
                   async function  AssignedProjects(){
                    const res = await fetch( "http://localhost:3500/project" )
                    const data = await res.json()
                    setProjectTasks(data[0].projectTasks[0].subtasks)
                    setIssueTracking(data[0].issueTracking)
                  }
                  AssignedProjects()
              }, [] )
  
  
  
 console.log(issueTracking)

  const tableData = useReactTable( {
                data: projectTasks,
                columns,
                getCoreRowModel:getCoreRowModel() ,
                meta: {
                  updateData: ( rowIndex, columnId, value ) => (
                    setProjectTasks( ( prev ) =>
                      prev?.map( ( row, i ) =>
                        i === rowIndex ? { ...prev[rowIndex ]
                          ,[columnId ]: value
                        }
                          : row
                  ) ))
                }
  } )
  
  const filterTypes = [ "All open", "Closed", "Upcoming", "Over due", "Completed" ]    
  

    return (
           <div className='tableContainer'>
          
        <div className="tableHeader">
          <BoxHeader icon={ <FaLayerGroup /> } header="Group By Task List" filterTypes={ filterTypes } setSelectedType={ setSelectedType } selectedType={ selectedType } />
            <span onClick={()=>setActive(true)}>Add Tasks<IoAddCircle className="icon"/></span>
         </div>
                     <table>
             <thead>
             { tableData.getHeaderGroups().map( (headerGroup) =>(
                        <tr key={ headerGroup.id }>
                        {headerGroup.headers.map((header)=>(
                          <th key={header.id}>{header.column.columnDef.header}</th>
                        ))}
                      </tr>))}
                     </thead>
                      <tbody>
                      {
                     tableData.getRowModel().rows.map( row => <tr key={ row.id }>
                     { row.getVisibleCells().map( cell => <td key={ cell.id }>
                     {flexRender(cell.column.columnDef.cell,cell.getContext())}
                          </td>)}
                        </tr>)
                      }
                    </tbody>
                    </table>
                {active &&  <AssignTaskForm  setActive={setActive}/> }
      </div>
  )
}

export default Projects