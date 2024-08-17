     import { useState,useEffect } from "react";
import DetailofProjects from "../../DetailofProjects/DetailofProjects";
 import { GrNext } from "react-icons/gr";
  
const TaskCell = ( { getValue, row, column, table } ) =>

  {
              const initilaValue = getValue()
              const [value,setValue]=useState(initilaValue)
              
              const onBlur=()=>{
                table.options.meta?.updateData(row.index,column.id,value)
                                  }
          const [openModal,setOpenModal] =useState( false )
              useEffect( () =>{
              setValue(initilaValue)
              },[initilaValue])
              return (
                <>
                 <div className="taskInputCell"> 
                  <input
                  type="text"
                  onBlur={onBlur}
                  value={ value }
                    onChange={ ( e ) => setValue( e.target.value ) } />
                  <button onClick={()=>setOpenModal(true)}>open<GrNext />

</button>
                </div>
                  { openModal && 
                    <div className="modal"> <DetailofProjects  setOpenModal={ setOpenModal }  /></div>
                 }
                </>

              )
}
export default TaskCell