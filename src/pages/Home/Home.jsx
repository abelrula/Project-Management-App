import Header from "../../Componentes/header/Header";
import TodoTask from "../../Componentes/TodoTask/TodoTask";
import "./home.css"
 

function Home() {
  return (
    <>
      <Header title="Welcome, Abel ! 👋" />
      <TodoTask />
    </>
  );
}
export default Home;
