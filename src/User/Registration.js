import React from 'react'

export default function Registration() {
  return (
      <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="register-username">Username : </label>
          <input type="text" name="register-username" id="register-username" />

          <label htmlFor="register-password">Password : </label>
          <input type="password" name="register-password" id="register-password" />
          <span>&nbsp;&nbsp;&nbsp;</span>
          <label htmlFor="register-password-repeat">Repeat password : </label>
          <input type="password" name="register-password-repeat" id="register-password-repeat" />
          
          <span>&nbsp;&nbsp;&nbsp;</span>
          <input type="submit" value="Register" />
      </form>
  )
}