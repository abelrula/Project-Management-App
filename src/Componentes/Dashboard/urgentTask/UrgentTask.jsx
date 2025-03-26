//  import { useGetTodosQuery } from "../../api/apiSlice";
 import { BiArrowBack} from "react-icons/bi";
 import { useEffect,useState } from "react";
 import moment from "moment";
 import { useLocation } from "react-router-dom";
 import { PiDotsSixVerticalBold } from "react-icons/pi";
 import BoxHeader from "../../boxHeader/BoxHeader";
 import { TbUrgent } from "react-icons/tb";
 import { IoArrowBackCircle } from "react-icons/io5";
 import { FaTasks } from "react-icons/fa";
import "./urgentTask.css";
 
 const UrgentTask = ({setUrgent}) => {
  // const { data: todos, isSuccess } = useGetTodosQuery();
  const [ todo, setTodos ] = useState( [] );
  const [ completed, setCompleted ] = useState(null)
  const {pathname}=useLocation()
   // const todayTodo =
  //   isSuccess && todos.filter((item) => item.date === Date().substring(0, 16));
  const todayDate = new Date().toString().substring( 0, 10 )
   
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
   
    const todayTodo = todo?.filter(( item ) =>  item.date.substring(0,10) == todayDate  );
   return (
   <div className="TodayTodo__view--task">
      <span className="TodayTodo__view--task-header">
      {pathname ==="/" && <IoArrowBackCircle color="black" onClick={()=>setUrgent(false)} className="icon"/>}
      {pathname ==="/" ? <BoxHeader icon={<TbUrgent />} header="Urgent Tasks For Today"  />:  <BoxHeader icon={<FaTasks />} header="Todays Work Items"  /> }
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
          <h3>You Have Not Any Todos For Today </h3>
        )}
      </ul>
    </div>
  );
};

export default UrgentTask;
