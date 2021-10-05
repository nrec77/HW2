import React from 'react'
import ToDo from './ToDo'

export default function ToDoList ({todos = []}) {
     return (
      <div>
       {todos.map((p, i) => <ToDo {...p} title={p.title} description ={p.description} dateCreated={p.dateCreated} complete={p.complete} dateCompleted={p.dateCompleted}  key={'ToDo-' + i} />)}
      </div> 
      )
}
    
