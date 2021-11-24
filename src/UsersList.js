import React, { useResource, useEffect } from 'react'
import User from './User'

export default function UsersList () {


      const [ users, getUsers ] = useResource(() => ({
            url: '/users',
            method: 'get',
          }))

          useEffect(() =>{
            getUsers()
        }, [users])

     return (

      <div>
            {users.length === 0 && <h2>No users found</h2>}
            {users.length > 0 && users.map((p, i) => <User {...p} username={p.username} key={'user-' + i} />)}
      </div> 
      )
}
    
