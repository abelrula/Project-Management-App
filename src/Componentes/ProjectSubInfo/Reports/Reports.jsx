import  { IssuePieChart, TaskPieChart } from '../../Charts/PieChart';
import TotalHour from '../../Charts/TotalHour'
import TotalRevenue from '../../Charts/TotalRevenue'
import "./reports.css";

const Reports = () => {
 
  return (
    <div className="Project_reports">
      <TotalHour />
      <TotalRevenue />
      <TaskPieChart />
      <IssuePieChart />
    </div>
  )
}

export default Reports