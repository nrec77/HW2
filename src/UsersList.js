import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import User from './User'

export default function UsersList () {


      const [ users, getUsers ] = useResource(() => ({
            url: '/users',
            method: 'get',
      }))

      useEffect(() =>{
            getUsers()
      }, [])

      if (users.data && users.data.users) {
     return (

      <div>
            {users.data.users.map((p, i) =>  <User username={p.username} id={p._id} key={'user-' + i} />)}
      </div> 
     )
      } else {
            return null
      }
}

