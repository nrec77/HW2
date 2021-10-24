import React, { useContext } from 'react'
import { StateContext } from './Contexts'
import ToDo from './ToDo'

export default function ToDoList () {

      const {state} = useContext(StateContext)
      const {todos} = state

     return (
      <div>
       {todos.map((p, i) => <ToDo {...p} title={p.title} description ={p.description} dateCreated={p.dateCreated} complete={p.complete} dateCompleted={p.dateCompleted} key={'ToDo-' + i}  todoId={i} />)}
      </div> 
      )
}
    
