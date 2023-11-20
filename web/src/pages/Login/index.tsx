import Header from '../../components/Header'
import google from '../../assets/imgs/google_icon-icons.com_62736 1.svg'
import facebook from '../../assets/imgs/facebook_icon-icons.com_59205 1.svg'
import './style.css'
import { useState } from 'react'
import axiosClient from '../../api/api'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [sucess, setSucess] = useState('')

    const handleSubmit = async (e: React.MouseEvent) => {
      e.preventDefault()
      
      try {
        const response = await axiosClient.post('/sign-in', {
          email2: email,
          password2: password
        })

        console.log(response.data)
        setError('')
        setSucess('Usuario logado com sucesso! ')
      } catch (error) {
        console.error(error)
        setError('Erro ao fazer login, tente novamente! ')
        setSucess('')
      }
    }



  return (
    <>
      <Header search={false} />
      
      <div className='login'>
        <h1> Login </h1>
        <div className='center-text'>
          {error ? <h2 className='white'> {error} </h2> : <></>}
          {sucess ? <h2 className='green'> {sucess} </h2> : <></>}
        </div>
        <div className='content-login'>
          <div className="form">
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <a href="/update"> Forgot Password or email </a>
            <div className='button'>
              <button onClick={handleSubmit} > Login </button>
              

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
