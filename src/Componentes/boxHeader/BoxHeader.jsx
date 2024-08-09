import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import "./boxHeader.css"

const BoxHeader = ( { icon, header, filterTypes=null ,setSelectedType=null,selectedType=null} ) =>
{
  const [ filterActive, setfilterActive ] = useState(false)

  return (
    <div className="BoxHeader">
      <h3><PiDotsSixVerticalBold fontSize={ 20 } color="black" />{ header }</h3>
      {icon}
      {filterTypes && <div className="BoxHeader">
            <div className="BoxHeader__filter">
             <label className="BoxHeader__filter-selected"  onClick={()=>setfilterActive(true)}> {selectedType} <IoMdArrowDropdown /> </label>
             {filterActive &&  
              <ul className="BoxHeader__filter-types">
              {filterTypes.map((item,i)=>(
              <li key={i} onClick={()=>{setSelectedType(item);setfilterActive(false)}}>{item}</li>
             ))}
             </ul>}
              </div>
            </div>}
      </div>
  )
}

export default BoxHeader