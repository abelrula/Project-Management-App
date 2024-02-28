//  import { useGetTodosQuery } from "../../api/apiSlice";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import "./urgentTask.css";
import { useEffect,useState } from "react";
const UrgentTask = () => {
  // const { data: todos, isSuccess } = useGetTodosQuery();
  const [todos, setTodos] = useState([]);
  // const todayTodo =
  //   isSuccess && todos.filter((item) => item.date === Date().substring(0, 16));
 useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("http://localhost:3500/todo");
      console.log(res);
      if (!res.ok) console.log("error occured");
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  const todayTodo = todos?.filter(
    (item) => item.date === Date().substring(0, 16)
  );
  console.log(todayTodo.length);
  return (
   <div className="TodayTodo__view--task">
      <h5>Urgent Tasks</h5>
      <ul className=" element-with-scroll">
        {todayTodo.length > 0 ? (
          todayTodo.map((item) => (
            <li>
              <span className="right">
                <span>
                  {item.completed ? (
                    <AiFillCheckCircle fontSize={22} />
                  ) : (
                    <BiCircle fontSize={24} />
                  )}
                </span>
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
