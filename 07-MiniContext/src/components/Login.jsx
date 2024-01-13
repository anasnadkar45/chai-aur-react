import React from 'react'
import UserContext from '../context/UserContext'
import { useState , useContext } from 'react'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    function handleSubmit(e){
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h1>login</h1>
        <input type="text" 
        placeholder='username' 
        value={username}
        onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        {' '}
        <input type="text" 
        placeholder='password' 
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login