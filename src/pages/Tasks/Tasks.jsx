import React from 'react'
import AssignedTask from "../../Componentes/Assignedtask/AssignedTask"
import "./tasks.css"
import TodoForm from '../../Componentes/TodoForm/TodoForm'
const Tasks = () => {
  return (
      <div className='tasks'> 
      <AssignedTask title="My tasks" footer="Add Tasks" />
      <TodoForm />
    </div>
  )
}

export default Tasks