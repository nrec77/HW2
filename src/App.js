import {useState, useReducer, useEffect} from 'react';
import UserBar from './User/UserBar'
import CreateToDo from './CreateToDo'
import ToDoList from './ToDoList'
import appReducer from './reducers';

function App() {

  const initialToDo = [
    {
      title: "ToDo 1",
      description: "Do Something 1",
      dateCreated: Date.now(),
      complete: "false",
      dateCompleted: ""
    },
    {
      title: "ToDo 2",
      description: "Do Something 2",
      dateCreated: Date.now(),
      complete: "false",
      dateCompleted: ""
    }
  ]

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: initialToDo })

  const {user, todos} = state;

  return (
      <div>
        <UserBar user={user} dispatchUser={dispatch}/>
        <br></br><br></br>
        {user && <CreateToDo user={user} dispatch={dispatch} /> }
        <ToDoList todos={todos} />
        </div>
  )

}
export default App;
