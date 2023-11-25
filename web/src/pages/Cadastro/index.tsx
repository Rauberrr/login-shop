import { useState } from 'react'
import axiosClient from '../../api/api'
import facebook from '../../assets/imgs/facebook_icon-icons.com_59205 1.svg'
import google from '../../assets/imgs/google_icon-icons.com_62736 1.svg'
import './style.css'

const Cadastro = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const handleSingUp = async () => {

    try {

      if (password != confirmPassword) {
        throw new Error('passwords !=')
      }

      const response = await axiosClient.post('/create-user', {
        name,
        email,
        password,
      })

      console.log(response.data)

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
      {/* <Header search={false} /> */}
      <div className='login'>
        <h1> SignUp </h1>
        <div className='content-login'>
          <div className="form">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' required />
            <div className='button'>
              <a href="/login"> Login </a>
              <button onClick={handleSingUp}> SignUp </button>
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

export default Cadastro
