import React from 'react'
import Header from '../../components/Header'
import './style.css'

const Login = () => {
  return (
    <>
      <Header search={false} />
      <div className='login'>
        <h1> Login </h1>
        <div className='flex content-login'>
          <div className="form">
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
            <a href="/update-user"> Forgot Password or email </a>
            <button> Login </button>
          </div>
          <div className='flex'>
            <img src="" alt="google" />
            <img src="" alt="facebook" />
          </div>
        </div>

      </div>



    </>
  )
}

export default Login
