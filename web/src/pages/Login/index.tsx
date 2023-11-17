import Header from '../../components/Header'
import google from '../../assets/imgs/google_icon-icons.com_62736 1.svg'
import facebook from '../../assets/imgs/facebook_icon-icons.com_59205 1.svg'
import './style.css'
import { useEffect, useState } from 'react'
import axiosClient from '../../api/api'

const Login = () => {
  const [email, setEmail] = useState('andre')
  const [password, setPassword] = useState('andre123')

  useEffect(() => {
    async function login() {


      
      try {
        const response = await axiosClient.post('/sign-in', {
          email2: email,
          password2: password
        })

        console.log(response.data)

      } catch (error) {
        console.error(error)
      }
    }
    login()


  },[])

  return (
    <>
      <Header search={false} />
      <div className='login'>
        <h1> Login </h1>
        <div className='content-login'>
          <div className="form">
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
            <a href="/update"> Forgot Password or email </a>
            <div className='button'>
              <button> Login </button>
            </div>
          </div>
          <div className='entrar-com'>
            <h2> Entrar com </h2>
            <div className='flex'>
              <img src={google} alt="google" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>

      </div>



    </>
  )
}

export default Login
