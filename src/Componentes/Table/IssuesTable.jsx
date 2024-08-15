import React from 'react'
     import { Fragment,useState,useEffect } from "react";
            import { BsListTask, BsPersonCircle } from "react-icons/bs";
            import { TbStatusChange, TbTimeDuration10 } from "react-icons/tb";
            import { TbTimeDuration0 } from "react-icons/tb";
            import { FaHourglassStart } from "react-icons/fa";
            import { MdArrowDropDown, MdOutlineAssignmentInd } from "react-icons/md";
            import { CgAssign } from "react-icons/cg";
            import { TbCalendarDue } from "react-icons/tb";
            import { FcDoughnutChart, FcHighPriority } from "react-icons/fc";
            import { FcMediumPriority } from "react-icons/fc";
            import { FcLowPriority } from "react-icons/fc";
            import { MdOutlineLowPriority } from "react-icons/md";
            import { BiUpArrowAlt, BiDownArrowAlt, BiCheckShield, BiPlus } from "react-icons/bi";
            import img1 from "../../assets/worker2.jpg"
            import overView from "../../data/overView";
            import { Link, NavLink } from "react-router-dom";
             import ProgressBar from "../progressBar/ProgressBar";
             import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table"
            import CheckedCell from "./Cells/CheckedCell"
            import TaskCell from "./TaskCell"
            import PriorityCell from "./Cells/PriorityCell"
            import StatusCell from "./Cells/StatusCell"
            import { RiPercentFill } from "react-icons/ri";
            import { GiClassicalKnowledge } from 'react-icons/gi';
            import { IoAddCircle } from 'react-icons/io5';
import AssignTaskForm from '../Forms/AssignTaskForm/AssignTaskForm';
import ProfileImage from '../ProfileImage/ProfileImage';
import { IoMdArrowDropdown } from 'react-icons/io';
import BoxHeader from '../boxHeader/BoxHeader';
import { FaLayerGroup } from 'react-icons/fa6';

const IssuesTable = () => {
  const [ projectTasks, setProjectTasks ] = useState( [] )
  const [ issueTracking, setIssueTracking ] = useState( [] )
  const [ selectedType, setSelectedType ] = useState("All")
  const [ active, setActive ] = useState( false )
  const [ checked, setChecked ] = useState()
 const [ filterActive, setfilterActive ] = useState(false)
  
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
           
              const columns=[
                {
                  accessorKey:"completed",
                  header:<p><BiCheckShield /></p>,
                  cell:CheckedCell
                } ,
                 {
                  accessorKey:"task",
                  header:<p>Issues <BsListTask /></p>,
                  cell:TaskCell
                },
                { 
                  accessorKey:"startDate",
                  header:<p> Start Date <FaHourglassStart /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },{
                  accessorKey:"assignedTo",
                  header:<p>Reoprter <MdOutlineAssignmentInd /></p>,
                  cell: ( props ) => <span><ProfileImage name={props.getValue()} /> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </span>
                },
                {
                 accessorKey:"status",
                 header:<p>Status<TbStatusChange /></p>,
                 cell: StatusCell 
               }
                ,{
                  accessorKey:"assignedTo",
                  header:<p>Assigne <MdOutlineAssignmentInd /></p>,
                  cell: ( props ) => <span><ProfileImage name={props.getValue()} /> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </span>
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
                },[])
                      console.log(issueTracking)
                // console.log(projectTasks)
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
             })
  const filterTypes = [ "All open", "Closed", "Upcoming", "Over due", "Completed" ]    
              
    return (
      <div className='tableContainer'>
             <div className="tableHeader">
           <BoxHeader icon={ <FaLayerGroup /> } header="Group By Issue List" filterTypes={ filterTypes } setSelectedType={ setSelectedType } selectedType={ selectedType } />
            <button onClick={()=>setActive(true)}>Add Issues<IoAddCircle className="icon"/></button>
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

export default IssuesTable