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
                  color:"rgb(94 117 38)"
                },
                {
                  status:"not started",
                  color:"rgb(255 56 56)"
              },
                {
                    status:"to be tested",
                    color:"rgb(48 108 183)"
                }
       ]
        
    useEffect( () =>
    {
           const values = Status.filter( ( item ) => item.status === initilaValue && item.color )
          setSelectedValueColor(values[0]?.color)
    }, [] )    
    
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
                      style={ { background: status.color } }
                       onClick={()=> {
                        table.options.meta?.updateData(row.index,column.id,selectedValue)
                        setSelectedValueColor(status.color)
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
            export default StatusCell
