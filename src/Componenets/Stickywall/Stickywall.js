import React, { useState } from "react";
import Card from "../Card/Card";
import { useGetTodosQuery } from "../../api/apiSlice";
import "./stickywall.css";
import { IoPerson } from "react-icons/io5";
import { FcBusiness } from "react-icons/fc";

const Stickywall = () => {
  // const [ todos, setTodos ] = useState( [] )
  // useEffect( () =>
  // {

  //      async function fetchTodo (){
  //      const response = await fetch( "http://localhost:3500/todo" )
  //      const data = await response.json()
  //      setTodos(data)
  //   }
  //   fetchTodo()
  // }, [] )

  //  const [deleteTodo] =useDeleteTodoMutation()
  // function handleCheck ( id ,complete)
  // {
  //   const todo = todos.map( todo => todo.id === id ? { ...todo, completed: !complete }:todo )
  //   setTodos( todo )
  //   const checkedValue = todo.filter( todo => todo.id === id )
  //       fetch( `http://localhost:3500/todo/${id}`, {
  //           method: "PATCH",
  //           headers: { "content-type": "application/json" },
  //           body:JSON.stringify({completed:checkedValue[0].completed})
  //    })

  //   }

  // function handleDelete ( id )
  // {
  //            const deletedItem = todos.filter( todo => todo.id !== id )
  //          setTodos( deletedItem )
  //          fetch(`http://localhost:3500/todo/${id}`, {
  //            method: "DELETE",
  //          } )
  // }
  const { data: todo, isLoading, isSuccess, isError } = useGetTodosQuery();
  const [personal, setPersonal] = useState(false);
  const [buisness, setBuisness] = useState(false);
  const [all, setAll] = useState(true);
  const [selected, setSelected] = useState("all");
  const [page, setPage] = useState(1);
  const [pagee, setPagee] = useState("1");
  const pages = isSuccess && Math.ceil(todo?.length / 4);
  return (
    <div className="StickyWallWrapper">
      <h1>list of the day</h1>

      {/* <div className="StickyWallWrapper__FilterTypes">
        <div
          onClick={() => {
            setAll((prev) => !prev);
            setSelected("all");
          }}
          className="StickywallWrapper__FilterTypes--all filterbutton"
          style={{
            background: selected === "all" && "#183de2",
            color: selected === "all" && "white",
          }}
        >
          All
        </div>
        <div
          onClick={() => {
            setPersonal((prev) => !prev);
            setSelected("personal");
          }}
          className="stickywallWrapper__FilterTypes--personal filterbutton"
          style={{
            background: selected === "personal" && "#183de2",
            color: selected === "personal" && "white",
          }}
        >
          Personal <IoPerson color="white" />
        </div>
        <div
          onClick={() => {
            setBuisness((prev) => !prev);
            setSelected("buisness");
          }}
          className="stickywallWrapper__FilterTypes--buisness filterbutton"
          style={{
            background: selected === "buisness" && "#183de2",
            color: selected === "buisness" && "white",
          }}
        >
          Buisness
          <FcBusiness />
        </div>
      </div> */}
      <h1>{isLoading && "LOADING..."}</h1>
      <ul className="StickyWallWrapper__Content">
        {isSuccess &&
          todo
            .slice(page * 4 - 4, page * 4)
            .map((item) => <Card key={item.id} item={item} />)}
      </ul>
      <div className="StickyWallWrapper__PageNumbers">
        {[...Array(pages).keys()].slice(1).map((i) => (
          <div
            key={i}
            onClick={() => {
              setPage(i);
              setPagee(i);
            }}
            style={{
              background: pagee === i ? "#c5c0c0" : "null",
              color: pagee === i ? "black" : "null",
            }}
            className="StickyWallWrapper__PageNumbers--number"
          >
            {i}
          </div>
        ))}
      </div>
      <h1>{isError && "Error fetching the page"}</h1>
    </div>
  );
};

export default Stickywall;
