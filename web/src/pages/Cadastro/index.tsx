import { useState } from 'react'
import axiosClient from '../../api/api'
import Header from '../../components/Header'
import './style.css'

const Cadastro = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSingUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      return setError('Preencha os campos corretamente')
    }

    try {

      if (password != confirmPassword) {
        return setError('As passwords nao conferem')
      }

      const response = await axiosClient.post('/create-user', {
        name,
        email,
        password,
      })

      window.location.href = '/login'

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
      <Header search={false} />
      <div className='login'>
        <h1> SignUp </h1>
        <div className='content-login'>
          <div className="form">
            <form onSubmit={handleSingUp}>

              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' required />
              {error && <p style={{ color: 'red' }}> {error} </p>}
              <div className='button'>
                <a href="/login"> Login </a>
                <button type='submit'> SignUp </button>
              </div>
            </form>
          </div>

        </div>

      </div>



    </>
  )
}

export default Cadastro
