import React, { useState } from 'react'
import "./login.css"

const Login = () => {
  const[usename, setUsername]=useState("")
  const[password, setPassword]=useState("")

  const handleLogin =(e)=>{
    
    console.log(usename,password);
  }
  return (
    <div className='login'>
        <h1 className='login-title'>Sign In</h1>
        <form action="">

          {/* user */}
          <label htmlFor="username">User Name</label>      
          <input type="text" 
          id='username'
          placeholder='username' 
          value={usename} 
          onChange={e=>setUsername(e.target.value)}/><br />

          {/* pass */}
          <label htmlFor="password">PassWord</label>
          <input type="password" 
          id='password'
          placeholder='password' 
          value={password} 
          onChange={e=>setPassword(e.target.value)}/>

          <input type="submit" value="gưi"/>
        </form>

    </div>
  )
}

export default Login