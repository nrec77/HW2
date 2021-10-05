import React, {useState} from 'react'

export default function Login({ dispatchUser }) {

    const [username, setUsername] = useState('');

    function handleUsername (evt) { setUsername(evt.target.value) } 

   return (
        <form onSubmit={evt => {evt.preventDefault(); dispatchUser({type:"LOGIN", username})} }>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" value={username} onChange={handleUsername}  id="login-username" />
            
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input type="submit" value="Login" />
        </form>
    )
}
