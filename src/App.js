import React, { useReducer } from 'react'
import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import { StateContext } from './Contexts'

import {Container} from 'react-bootstrap'

import CreateToDo from './CreateToDo'
import HeaderBar from './Pages/HeaderBar'

import HomePage from './Pages/HomePage'
import TodoPage from './Pages/TodoPage'
import UsersPage from './Pages/UsersPage'
import UserTodosPage from './Pages/UserTodosPage'
import appReducer from './reducers'

function App() {

  
  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [] })

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/users': route({view: <UsersPage /> }),
    '/users/:id': route(req => {
      return { view: <UserTodosPage id={req.params.id} /> }
  }),
    '/todo/create':route({ view: <CreateToDo /> }),
    '/todo/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
  })


  return (
      <div>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
            <Container>
              <HeaderBar />
              <View />
            </Container>
          </Router >
        </StateContext.Provider>
      </div>
  )
}
export default App;