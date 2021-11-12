import React, { useContext } from 'react'
import { StateContext } from './Contexts'
import User from './User'

export default function UsersList () {

      const {state} = useContext(StateContext)
      const {user} = state

     return (
      <div>
            {user.length === 0 && <h2>No users found</h2>}
            {user.length > 0 && user.map((p, i) => <User {...p} username={p.username} key={'user-' + i} />)}
      </div> 
      )
}
    
