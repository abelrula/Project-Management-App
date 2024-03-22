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
              import Header from "../../Componentes/Header/Header";
              import { Link } from "react-router-dom";
            import "./overview.css"
            import overView from "../../data/overView";
            import Form from "../../Componentes/Form/Form";
            import { BiUpArrowAlt, BiDownArrowAlt, BiCheckShield } from "react-icons/bi";
            import img1 from "../../assets/worker2.jpg"
            import ProgressBar from "../../Componentes/progressBar/ProgressBar";
            import {useReactTable,flexRender,getCoreRowModel} from "@tanstack/react-table"
import { RiPercentFill } from "react-icons/ri";
            const Overview = () => {
              const [ projectTasks, setProjectTasks ] = useState( [] )
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
                  accessorKey:"assignedTo",
                  header:<p>assigned To <MdOutlineAssignmentInd /></p>,
                  cell: ( props ) => <p><BsPersonCircle /> { props.getValue() === "" ?  "Not Assigned" : props.getValue()} </p>
                },
                // {
                //   accessorKey:"project",
                //   header: <p>project</p>,
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // },
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
                  header:<p>Duration <FcDoughnutChart /></p>,
                  cell: ( props ) => <p>{ props.getValue() }</p>
                },
                // ,{ 
                //   accessorKey:"document",
                //   header:"document",
                //   cell: ( props ) => <p>{ props.getValue() }</p>
                // },
                {
                  accessorKey:"progressPercent",
                  header:<p> <RiPercentFill />Complete <TbTimeDuration0 /></p>,
                  cell: ( props ) => <ProgressBar progress={ props.getValue() } />
                }
              ]
              useEffect( () =>
              { 
                  const AssignedProjects=async()=>{
                    const res = await fetch( "http://localhost:3500/AssignedProjects" )
                    const data = await res.json()
                      setProjectTasks(data)
                  }
                  AssignedProjects()
                },[])
                console.log(projectTasks)
              const tableData = useReactTable( {
                data: projectTasks,
                columns,
                getCoreRowModel:getCoreRowModel() ,
                meta: {
                  updateData: ( rowIndex, columnId, value ) => (
                    setProjectTasks( ( prev ) =>
                      prev.map( ( row, i ) =>
                        i === rowIndex ? { ...prev[ rowIndex ]
                          ,[columnId ]: value
                        }
                          : row
                  ) ))
                }
            })
              
              return (
                <>
                  <Header title="Project Overview" />
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
            
            export const CheckedCell = ({getValue,row,column,table}) => {
              return (
               <input
                  type="checkbox"
                  />
              )
            } 
            export const TaskCell = ( { getValue, row, column, table } ) =>{
              const initilaValue = getValue()
              const [value,setValue]=useState(initilaValue)
              const onBlur=()=>{
                table.options.meta?.updateData(row.index,column.id,value)
              }
              useEffect( () =>{
              setValue(initilaValue)
              },[initilaValue])
              return (
               <> 
                  <input
                  type="text"
                  onBlur={onBlur}
                  value={ value }
                  onChange={ ( e ) => setValue( e.target.value ) } />
                  </>
              )
            }
            
            const PriorityCell = ({getValue,row,column,table}) => {
              const { name, value } = getValue() || {}
              const initilaValue = getValue()
              const [active,setActive]=useState(false)
              const [selectedValue,setSelectedValue]=useState(initilaValue)
              const [selectedValueColor,setSelectedValueColor]=useState("")
              const Status = [
                {
                status:"high",
                },
                 {
                    status:"medium",
                },
                {
                    status:"low",
                }
                ]
                
            useEffect(()=>{
           const values = Status.filter( ( item ) => item.status === initilaValue && item.color )
          setSelectedValueColor(values[0]?.color)
          console.log( values)    
       },[])  
              return (
                <>
                  <div
                  className="taskStatus"
                    style={ { background: selectedValueColor } }
                  onClick={ () => setActive( true ) }>
                    {  selectedValue }
                    <MdArrowDropDown />
                  </div>
                 { active &&
                    <div className="taskStatus_menu">
                  { Status.map((status,i)=>(
                    <div
                    className="taskStatus_menu-item"
                      key={ i } 
                      // style={{background:status.color}}
                      onClick={()=> {
                         table.options.meta?.updateData(row.index,column.id,status.status)
                        setSelectedValue( status.status );
                        setActive( false )
                      } }>
                      { status.status }</div>
                     )
                      ) }
                    </div>
                  }
                </>
              )
            }
            
     const StatusCell = ({getValue,row,column,table}) => {
              const { name, value } = getValue() || {}
              const initilaValue = getValue()
              const {updateData}=table.options.meta        
              const [ active, setActive ] = useState( false )
              const [selectedValue,setSelectedValue]=useState(initilaValue)
              const [ selectedValueColor, setSelectedValueColor ] = useState( {})
       
       
       const Status = [
                {
                  status:"in progress",
                  color:"#f59210"
                },
                {
                    status:"open",
                    color:"#3fab1d"
                },
                {
                    status:"finished",
                    color:"#e1ff48"
                },
                {
                    status:"not started",
                    color:"#ff6c6c"
                },
       ]
            useEffect(()=>{
           const values = Status.filter( ( item ) => item.status === initilaValue && item.color )
          setSelectedValueColor(values[0]?.color)
          console.log( values)    
       },[])    
              return (
                <>
                  <div 
                      className="taskStatus"
                    style={ {
                      background: selectedValueColor}}
                      onClick={ () => setActive( true ) }>
                    { !active && !selectedValue ? "None" : selectedValue }
                    <MdArrowDropDown />
                  </div>
                    { active &&
                    <div className="taskStatus_menu">
                    { Status.map((status,i)=>(
                    <div
                      className="taskStatus_menu-item"
                      key={ i } 
                       onClick={()=> {
                        table.options.meta?.updateData(row.index,column.id,selectedValue)
                        setSelectedValueColor(status.color)
                        setSelectedValue( status.status );
                        setActive( false )
                      } }>
                    <span style={ { background: status.color } }></span>
                        { status.status }</div>
                     )
                      ) }
                    </div>
                  }
                </>
              )
            }
            
             