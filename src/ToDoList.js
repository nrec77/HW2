import React, { useContext } from 'react'
import { StateContext } from './Contexts'
import ToDo from './ToDo'

export default function ToDoList () {

      const {state} = useContext(StateContext)
      const {todos} = state

     return (
      <div>
            {todos.length === 0 && <h2>No todos found for current user</h2>}
            {todos.length > 0 && todos.map((p, i) => <ToDo {...p} short={true} title={p.title} description ={p.description} dateCreated={p.dateCreated} complete={p.complete} dateCompleted={p.dateCompleted} key={'todo-' + i}  todoId={p._id} />)}
      </div> 
      )
}
    
