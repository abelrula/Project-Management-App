import React from 'react'
import TotalHour from '../../Total/TotalHour'
import TotalRevenue from '../../Total/TotalRevenue'

const Reports = () => {
  return (
    <div style={{height:"700px",gap:"20px", width:"500px"}}>
      <TotalHour />
      <TotalRevenue />
    </div>
  )
}

export default Reports