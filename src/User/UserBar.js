import { useContext } from 'react'
import { StateContext } from '../Contexts'
import Logout from './Logout'
import Register from './Register'
import Login from './Login'

export default function UserBar() {
  
const {state} = useContext(StateContext)
const {user} = state

  if (user) {
      return <Logout />
  } else {
      return (
          <>
            <Login  />
            <Register />
          </>
      )
  }
}
