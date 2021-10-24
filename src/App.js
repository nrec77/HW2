import {useReducer, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from './Contexts'
import appReducer from './reducers'
import UserBar from './User/UserBar'
import CreateToDo from './CreateToDo'
import ToDoList from './ToDoList'

function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })

  const {user} = state;

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
    }
  }, [todos])

  return (
      <div>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <UserBar />
          <br/><hr/>
          {user && <CreateToDo /> }
          <ToDoList />
        </StateContext.Provider>
      </div>
  )
}
export default App;