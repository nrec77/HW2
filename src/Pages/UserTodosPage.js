import React, {useEffect} from 'react'
import { useResource } from 'react-request-hook'
import ToDo from '../ToDo'

export default function UserTodosPage ({id}) {

    const [ todos, getTodos ] = useResource(() => ({
        url: `/users/${id}`,
        method: 'get',
  }))

  useEffect(() =>{
        getTodos()
  }, [])

if (todos.data && todos.data.todos) {
    return (
     <div>
        {todos.data.todos.length === 0 && <h2>No todos found for current user</h2>}
        {todos.data.todos.length > 0 && todos.data.todos.map((p, i) => <ToDo {...p} short={true} title={p.title} description ={p.description} dateCreated={p.dateCreated} complete={p.complete} dateCompleted={p.dateCompleted} key={'todo-' + i}  todoId={p._id} />)}
    </div> 
)
}
else return null
}