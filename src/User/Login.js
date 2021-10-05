import React from 'react'

export default function Login() {
   return (
        <form onSubmit={evt => evt.preventDefault()}>
            <label htmlFor="login-username">Username : </label>
            <input type="text" name="login-username" id="login-username" />

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <label htmlFor="login-password">Password : </label>
            <input type="password" name="login-password" id="login-password" />

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input type="submit" value="Login" />
        </form>
    )
}