import React from 'react'
import Form from "../../Componentes/Form/Form";
import TodoForm from '../../Componentes/TodoForm/TodoForm';
import "./addTodo.css"
const AddTodo = () => {
  return (
    <>
      <div className='forms'>
        {/* <Form /> */}
        <TodoForm />
      </div>
    </>
  );
};

export default AddTodo