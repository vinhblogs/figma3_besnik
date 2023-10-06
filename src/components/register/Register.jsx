import React, { useState } from 'react'

const Register = () => {
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleChange = e=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit= e=>{
        e.preventDefault()
        console.log(formData);
        setFormData({
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }
  return (
    <>
        <div className='Register'>
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                    id='username'
                    name ={username}

                     />
                </div>
            </form>
        </div>
    </>
  )
}

export default Register