            import { Fragment,useState,useEffect } from "react";
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
            import ProgressBar from "../../Componentes/progressBar/ProgressBar";
            import {useReactTable,flexRender,getCoreRowModel} from "@tanstack/react-table"
            const Overview = () => {
              const [ projectTasks, setProjectTasks ] = useState( [] )
              const [ active, setActive ] = useState( false )
              const [ checked, setChecked ] = useState()
              const columns=[
                {
                  accessorKey:"task",
                  header:<p>Task <BsListTask /></p>,
                  cell:TaskCell
                },
                {
                  accessorKey:"assignedTo",
                  header:<p>assignedTo <MdOutlineAssignmentInd /></p>,
                  cell: ( props ) => <p> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </p>
                },
                {
                  accessorKey:"project",
                  header: <p>project</p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                {
                  accessorKey:"priority",
                  header:<p>Priority <MdOutlineLowPriority /></p>,
                  cell:PriorityCell
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
                },
                // { 
                //   accessorKey:"duedate",
                //   header:"duedate",
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // }
                ,
                // { 
                //   accessorKey:"endDate",
                //   header:"EndDate",
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // },
                { 
                  accessorKey:"duration",
                  header:"Duration",
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                // ,{ 
                //   accessorKey:"document",
                //   header:"document",
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // },
                {
                  accessorKey:"progressPercent",
                  header:<p> %Complete <TbTimeDuration0 /></p>,
                  cell: ( props ) => <ProgressBar progress={ props.getValue() } />
                }
              ]
              useEffect( () =>
              { 
                  const AssignedProjects=async()=>{
                    const res = await fetch( "http://localhost:3500/AssignedProjects" )
                    const data = await res.json()
                    setProjectTasks(data)
                    console.log(data);
            }
                  AssignedProjects()

              },[])
              const tableData = useReactTable( {
                data: projectTasks,
                columns,
                getCoreRowModel:getCoreRowModel() ,
                metea: {
                  updateData:(rowIndex,columnId,value)=>setData(prev=>prev.map((row,i)=>
                    i === rowIndex ? {
                      ...prev[ rowIndex ],
                      [columnId]:value
                  }:row
                  ) )
                }
            })
            console.log(tableData.getHeaderGroups())
              return (
                <>
                  <Header title="Project Overview" />
                  {/* <table >
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
                          {projectTasks.map((descData, i) => (
                            <tr key={i} className="data">
                              <td>
                                <input type="checkbox" onClick={(e)=>setChecked(e.target.checked)} />
                                {descData.task}
                              </td>
                              <td className="assignedTo">
                                <img src={ img1 } alt="person" />
                                <span>{ descData.assignedTo }</span>
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
                              <td>{descData.startDate}</td>
                              <td>{descData.duration}</td>
                              <td><ProgressBar progress={descData.progressPercent} bgcolor="blue" /></td>
                            </tr>
                        ))  }
                    </tbody>
                  </table> */}
                  <div>
                    <table>
                      { tableData.getHeaderGroups().map( (headerGroup) =>(
                        <tr key={ headerGroup.id }>
                        {headerGroup.headers.map((header)=>(
                          <th key={header.id}>{header.column.columnDef.header}</th>
                        ))}
                      </tr>))}
                      {
                        tableData.getRowModel().rows.map( row => <tr key={ row.id }>
                          { row.getVisibleCells().map( cell => <td key={ cell.id }>
                                {flexRender(cell.column.columnDef.cell,cell.getContext())}
                          </td>)}
                        </tr>)
                      }
                    </table>
                </div>
                {active &&  <Form  setActive={setActive}/> }
                </>
              );
            }

            export default Overview
            
            
            export const TaskCell = ({getValue,row,column,table}) => {
              const initilaValue=getValue()
              const [value,setValue]=useState(initilaValue)
              console.log(value)
              function onBlur(){
                table.options.meta?.updateData(row.index,column.id,value)
              }
              useEffect( () =>
              {
             setValue(initilaValue)
            },[initilaValue])
              return (
               <> <input
                  type="checkbox"
                  onBlur={onBlur}
                  value={ value } />
                  <input
                  type="text"
                  onBlur={onBlur}
                  value={ value }
                  onChange={ ( e ) => setValue( e.target.value ) } />
                  </>
              )
            }
            
            const PriorityCell = ({getValue,row,column,table}) => {
              const [active,setActive]=useState(false)
              const [selectedValue,setSelectedValue]=useState("")
              const [selectedValueColor,setSelectedValueColor]=useState("")
              const Status = [
                {
                status:"High",
                color:"#f53210"
            },
             {
                status:"Medium",
                color:"#3fab1d"
            },
            {
                status:"Low",
                color:"#e1ff48"
            }
            ]
              console.log(selectedValue)
              return (
                <>
                  <div 
                  className="taskStatus"
                      style={{background:selectedValueColor}}
                    onClick={ () => setActive( true ) }>{ !active && !selectedValue ? "None" : selectedValue }
                  </div>
                 { active &&
                    <div className="taskStatus_menu">
                  { Status.map((status,i)=>(
                    <div
                    className="taskStatus_menu-item"
                      key={ i } 
                      // style={{background:status.color}}
                      onClick={()=> {
                      setSelectedValueColor(status.color)
                        setSelectedValue( status.status );
                        setActive( false )
                      } }>{ status.status }</div>
                     )
                      ) }
                    </div>
                  }
                </>
              )
            }
            
     const StatusCell = ({getValue,row,column,table}) => {
              const [active,setActive]=useState(false)
              const [selectedValue,setSelectedValue]=useState("")
              const [selectedValueColor,setSelectedValueColor]=useState("")
                 const Status = [
                {
                status:"in Progress",
                color:"#f53210"
                },
                {
                    status:"Open",
                    color:"#3fab1d"
                },
                {
                    status:"Finished",
                    color:"#e1ff48"
                },
                {
                    status:"not started",
                    color:"#e1ff48"
                },
            
            ]
              console.log(selectedValue)
              return (
                <>
                  <div 
                  className="taskStatus"
                      style={{background:selectedValueColor}}
                    onClick={ () => setActive( true ) }>{ !active && !selectedValue ? "None" : selectedValue }
                  </div>
                 { active &&
                    <div className="taskStatus_menu">
                  { Status.map((status,i)=>(
                    <div
                    className="taskStatus_menu-item"
                      key={ i } 
                       onClick={()=> {
                       setSelectedValueColor(status.color)
                        setSelectedValue( status.status );
                        setActive( false )
                      } }>{ status.status }</div>
                     )
                      ) }
                    </div>
                  }
                </>
              )
            }
            
             