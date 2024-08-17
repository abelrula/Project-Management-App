     import { useState,useEffect } from "react";
   
const TaskCell = ( { getValue, row, column, table } ) =>

  {
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
export default TaskCell