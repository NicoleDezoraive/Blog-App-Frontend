import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='Your Username'/>
        <input required type="email" placeholder='Your Email'/>
        <input required type="password" placeholder='Your Password'/>
        <button>Register</button>
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register
