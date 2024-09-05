import React from 'react'
import { useState, useEffect } from "react";
import { IoAddCircle } from 'react-icons/io5';
  import BoxHeader from '../boxHeader/BoxHeader';
import { FaLayerGroup } from 'react-icons/fa6';
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table"
import { filterTypes, IssuecolumnsDef, } from '../../lib/data';
import { openModal } from '../../redux/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import AddIssueForm from '../Forms/AddIssueForm/AddIssueForm';

const IssuesTable = () => {
  const [ projectTasks, setProjectTasks ] = useState( [] )
  const [ issueTracking, setIssueTracking ] = useState( [] )
  const [ selectedType, setSelectedType ] = useState( "All" )
  const dispatch = useDispatch()
  const { modalType, toggled } = useSelector( state => state.modal )
  console.log( modalType, toggled )
     
              useEffect( () =>{ 
                   async function  AssignedProjects(){
                    const res = await fetch( "http://localhost:3500/project" )
                    const data = await res.json()
                    setProjectTasks(data[0].projectTasks[0].subtasks)
                    setIssueTracking(data[0].issueTracking)
                  }
                  AssignedProjects()
                },[])
              const tableData = useReactTable( {
                data: issueTracking,
                columns:IssuecolumnsDef,
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
      <div className='tableContainer'>
             <div className="tableHeader">
           <BoxHeader icon={ <FaLayerGroup /> } header="Group By Issue List" filterTypes={ filterTypes } setSelectedType={ setSelectedType } selectedType={ selectedType } />
            <button onClick={()=>dispatch(openModal({modalType:"issueForm",toggled:true}))}>Add Issues<IoAddCircle className="icon"/></button>
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
                { modalType==="issueForm" && toggled === true &&  <AddIssueForm /> }
      </div>
  )
}

export default IssuesTable