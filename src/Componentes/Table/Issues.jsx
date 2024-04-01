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
            import Form from "../Form/Form";
            import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table"
            import CheckedCell from "./CheckedCell"
            import TaskCell from "./TaskCell"
            import PriorityCell from "./PriorityCell"
            import StatusCell from "./StatusCell"
            import { RiPercentFill } from "react-icons/ri";
            import { GiClassicalKnowledge } from 'react-icons/gi';
            import { IoAddCircle } from 'react-icons/io5';
const Issues = () => {
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
              const columns=[
                {
                  accessorKey:"completed",
                  header:<p><BiCheckShield /></p>,
                  cell:CheckedCell
                } ,
                {
                  accessorKey:"task",
                  header:<p>Task <BsListTask /></p>,
                  cell:TaskCell
                },
                {
                  accessorKey:"status",
                  header:<p>Status<TbStatusChange /></p>,
                  cell: StatusCell 
                }
                , { 
                  accessorKey:"startDate",
                  header:<p> Start Date <FaHourglassStart /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },{
                  accessorKey:"assignedTo",
                  header:<p>Reoprter <MdOutlineAssignmentInd /></p>,
                  cell: ( props ) => <p><BsPersonCircle /> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </p>
                },
                {
                  accessorKey:"assignedTo",
                  header:<p>Assigne <MdOutlineAssignmentInd /></p>,
                  cell: ( props ) => <p><BsPersonCircle /> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </p>
                },
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
              
    return (
      <div>
           <div className="tableFilter">
            <h4>All Open </h4>
          <div>
            <span ><GiClassicalKnowledge className="icon"/>Classics</span>
            <span>Add Tasks<IoAddCircle className="icon"/></span>
            </div>
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
                {active &&  <Form  setActive={setActive}/> }
      </div>
  )
}

export default Issues