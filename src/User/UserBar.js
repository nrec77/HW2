import React from 'react'

import Logout from './Logout'
import Login from './Login'
import Registration from './Registration'

export default function UserBar() {
  
  const user = ''

  if (user) {
      return <Logout user={user} />
  } else {
      return (
          <>
            <Login />
            <Registration />
          </>
      )
  }
}
