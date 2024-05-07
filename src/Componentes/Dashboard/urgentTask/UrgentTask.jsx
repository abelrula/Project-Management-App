//  import { useGetTodosQuery } from "../../api/apiSlice";
 import { BiArrowBack, BiCircle, BiLeftArrow } from "react-icons/bi";
import "./urgentTask.css";
import { useEffect,useState } from "react";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { PiDotsSixVerticalBold } from "react-icons/pi";
  const UrgentTask = ({setUrgent}) => {
  // const { data: todos, isSuccess } = useGetTodosQuery();
  const [ todo, setTodos ] = useState( [] );
  const [ completed, setCompleted ] = useState(null)
  const {pathname}=useLocation()
  console.log(completed);
  // const todayTodo =
  //   isSuccess && todos.filter((item) => item.date === Date().substring(0, 16));
  const todayDate = new Date().toString().substring( 0, 10 )
  console.log( todayDate )
  
 useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("http://localhost:3500/todo");
      console.log(res);
      if (!res.ok) console.log("error occured");
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
 }, [] );
  console.log( todo )
  
    const todayTodo = todo?.filter(( item ) =>  item.date.substring(0,10) == todayDate  );
    console.log(todayTodo)
  return (
   <div className="TodayTodo__view--task" style={{height:pathname !=="/" ? "250px":"300px"}}>
      <span className="TodayTodo__view--task-header">
      {pathname ==="/" && <BiArrowBack color="black" onClick={()=>setUrgent(false)} className="icon"/>}
      {pathname ==="/" ? <h5>Urgent Tasks For Today</h5> : <h3><PiDotsSixVerticalBold  fontSize={20} color="black"/><p>Todays Work Items</p></h3> }
      </span>
      <ul className=" element-with-scroll">
        {todayTodo?.length > 0 ? (
          todayTodo.map((item) => (
            <li>
              <span className="right">
                <input type="checkbox" value={item.completed } onChange={(e)=>setCompleted(e.target.checked)} />
                <p className="todayTodos">
                  {item.description.substring(0, 40)}...
                </p>
              </span>
              <span className="left">
                <div className="dot"></div>
                <p>Today</p>
              </span>
            </li>
          ))
        ) : (
          <h2>You Have Not Any Todos For Today </h2>
        )}
      </ul>
    </div>
  );
};

export default UrgentTask;
