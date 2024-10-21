import React, { useEffect, useState } from 'react'
import { useReactTable, flexRender, getCoreRowModel, createColumnHelper } from "@tanstack/react-table"
import { FaHourglassStart, FaLayerGroup } from "react-icons/fa";
import AssignTaskForm from '../Forms/AssignTaskForm/AssignTaskForm';
import BoxHeader from '../boxHeader/BoxHeader';
import { IoAddCircle } from 'react-icons/io5';
 import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/slices/modalSlice';
import { filterTypes, TaskcolumnDef } from '../../lib/data';
import { Outlet } from 'react-router-dom';
    

               
const TaskTable = ({data}) => {
  
  const { modalType, toggled } = useSelector( state => state.modal )
  const dispatch=useDispatch()
  const [ projectTasks, setProjectTasks ] = useState( [] )
   const [ selectedType, setSelectedType ] = useState( "All" )
  const [issueTracking,setIssueTracking]= useState([])
 
  // fetching a Data from json-server
              useEffect( () =>{ 
                   async function  AssignedProjects(){
                    const res = await fetch( "http://localhost:3500/project" )
                    const data = await res.json()
                    setProjectTasks(data[0].projectTasks)
                      setIssueTracking(data[0].issueTracking)
                  }
                  AssignedProjects()
              }, [] )
  
   
  
  // configuring Tanstack table
  
  const tableData = useReactTable( {
                data: projectTasks,
                columns:TaskcolumnDef,
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
  
  

    return (
      <>
      <div className='tableContainer'>
        <div className="tableHeader">
          <BoxHeader icon={ <FaLayerGroup /> } header="Group By Task List" filterTypes={ filterTypes } setSelectedType={ setSelectedType } selectedType={ selectedType } />
            <button onClick={()=>dispatch(openModal({modalType:"AssignTask",toggled:true}))}>Assign Tasks<IoAddCircle className="icon"/></button>
          </div>
          <table>
             <thead>
             { tableData.getHeaderGroups().map( (headerGroup) =>(
                        <tr key={ headerGroup.id }>
                        {headerGroup.headers.map((header)=>(
                          <th key={header.id} colSpan={header.colsSpan}>{header.column.columnDef.header}</th>
                        ))}
                      </tr>))}
                     </thead>
                      <tbody>
                      {
                      tableData.getRowModel().rows.map( row =>
                  <tr  key={ row.id }>
                          { row.getVisibleCells().map( (cell,i) =>
                            <td key={ cell.id } onClick={ () => console.log( cell.getContext().table.options.data[i] ) }
                       >
                     {flexRender(cell.column.columnDef.cell,cell.getContext())}
                      </td>
                    ) }
                    </tr>)
                      }
                    </tbody>
          </table>
          { modalType === "AssignTask" && toggled === true && <AssignTaskForm /> }
          <Outlet/>
        </div>
        
       
      </>
  )
}

export default TaskTable
