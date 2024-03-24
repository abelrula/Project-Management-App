     import { useState,useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
  const StatusCell = ({getValue,row,column,table}) => {
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
            export default StatusCell
