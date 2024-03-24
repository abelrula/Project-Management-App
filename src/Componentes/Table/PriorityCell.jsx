     import { useState,useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
  const PriorityCell = ({getValue,row,column,table}) => {
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
            export default PriorityCell
