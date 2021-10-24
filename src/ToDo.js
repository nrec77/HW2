import React, { useContext } from 'react'
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

     return (
       <div>
          <h3>{title}</h3>
          <div>{description}</div>
          <br/>
          <div>Date Created : {dateCreated} </div>
          <span>Completed</span>

          <input type='checkbox' checked={complete} onClick={e => {toggleTodo(); dispatch({type: 'TOGGLE_TODO', complete:!complete, todoId: todoId})}}></input>
          {complete && <><i> Completed on : {new Date(dateCompleted).toLocaleDateString('en-us')}</i></>}
          <br/>
          <button onClick={(e) => {deleteTodo(id); dispatch({type: 'DELETE_TODO', todoId: todoId})}}>Delete Post</button>
          
          <br/><hr/>
     </div> 
 )
}