import React, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from './Contexts'

export default function ToDo ({ title, description, dateCreated, complete, dateCompleted, todoId, id}) {
 
     const {dispatch} = useContext(StateContext)
 
     const [todo_delete, deleteTodo ] = useResource(() => ({
          url: `/todos/${encodeURI(id)}`,
          method: 'delete',
      }))

      const [ todo_toggle, toggleTodo ]= useResource(() => ({
          url: `/todos/${encodeURI(id)}`,
          method: 'patch',
          data : { 'complete': !complete}
      }))

      useEffect(() => {
        if (todo_delete && todo_delete.isLoading === true) {
            dispatch({type: 'DELETE_TODO', todoId: todoId})
        }
      }, [todo_delete])
      
      useEffect(() => {
        if (todo_toggle && todo_toggle.isLoading === true) {
            dispatch({type: 'TOGGLE_TODO', complete:!complete, todoId: todoId})        }
      }, [todo_toggle])

     return (
       <div>
          <h3>{title}</h3>
          <div>{description}</div>
          <br/>
          <div>Date Created : {dateCreated} </div>
          <span>Completed</span>

          <input type='checkbox' checked={complete} onClick={e => {e.preventDefault(); toggleTodo()}}></input>
          {complete && <><i> Completed on : {new Date(dateCompleted).toLocaleDateString('en-us')}</i></>}
          <br/>
          <button onClick={(e) => {e.preventDefault(); deleteTodo(); }}>Delete Post</button>
          <br/><hr/>
     </div> 
 )
}