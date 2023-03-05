import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='Your Username'/>
        <input required type="password" placeholder='Your Password'/>
        <button>Login</button>
        <span>Don't you have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
