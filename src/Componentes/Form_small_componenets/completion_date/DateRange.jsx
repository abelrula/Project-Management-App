import React from 'react'
import { HiCalendar } from 'react-icons/hi'
import "./daterange.css"
const DateRange = ({dateType="date",setStartDate,setEndate}) => {
 
    const start=dateType ==="date" ? "Task need to start" : "Start Time"
    const end=dateType ==="date" ? "Task need to end" : "End Time"
    return (
     <div className="Form__date">
           <div>
            <label>
               <HiCalendar className="calanderIcon" />
                    { start }
            </label>
            <input type={dateType} onChange={ ( e ) => setStartDate( e.target.value ) } />
          </div>
          <div>
            <label>
                  <HiCalendar className="calanderIcon" />
                    { end }
          </label>
                <input type={ dateType } onChange={ ( e ) => setEndate( e.targt.value ) } />
          </div>
          </div>
  )
}

export default DateRange