import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'

const Login = () => {
  const[usename, setUsername]=useState("")
  const[password, setPassword]=useState("")
  const [user,setUser]=useState([])

    const handleLogin = async (e)=> {
      // const res =await axios.post('https://reqres.in/api/register') 

      axios.post('https://reqres.in/api/register',{
        email:usename,
        password:password
      })
      .then( function(response){
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
    console.log(usename);
    console.log(password);
  }
  return (
    <div className='login'>
        <h1 className='login-title'>Sign In</h1>
        <form action="" onSubmit={handleLogin}>

          {/* user */}
          <label htmlFor="username">User Name</label>   
          <br />   
          <input type="text" 
          id='username'
          placeholder='username' 
          value={usename} 
          onChange={e=>setUsername(e.target.value)}/><br />

          {/* pass */}
          <label htmlFor="password">PassWord</label>
          <br />
          <input type="password" 
          id='password'
          placeholder='password' 
          value={password} 
          onChange={e=>setPassword(e.target.value)}/>
          <br />
          <input type="submit" value="gưi"/>
        </form>

    </div>
  )
}

export default Login