import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import axiosClient from '../../api/api'
import google from '../../assets/imgs/google_icon-icons.com_62736 1.svg'
import Header from '../../components/Header'
import { auth } from '../../services/firebase'
import './style.css'


const Login = () => {
  const [email, setEmail] = useState<String | null>(null)
  const [password, setPassword] = useState('')
  const [userGoogle, setUserGoogle] = useState<User>({} as User)
  const [user, setUser] = useState<responseProps>({} as responseProps)
  const [error, setError] = useState('')

  interface responseProps {
    user: {
      id: string,
      name: string,
      email: string,
      isAdmin: string,
    },
    token: string,
  }

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider()

    await signInWithPopup(auth, provider)
      .then((res) => {
        setUserGoogle(res.user)
        localStorage.setItem('token', res.user.uid)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()

    if (!email || !password) {
      return setError('email ou password invalidos')
    }

    try {
      const response = await axiosClient.post<responseProps>('/sign-in', {
        email: email,
        password: password
      })



      console.log(response.data.token)
      setUser(response.data)
      console.log('user normal: ' + user.user)
      localStorage.setItem('name', response.data.user.name)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('isAdmin', response.data.user.isAdmin)

      window.location.href = '/'
    } catch (error) {
      setError('email ou password invalidos')
      console.error(error)
    }
  }

  const stringValue: string = email ? email.toString() : '';



  return (
    <>
      <Header search={false} />
      {/* <div>
        {userGoogle.photoURL && <img src={userGoogle.photoURL} alt="" />}
        {userGoogle.email && <p> {userGoogle.email} </p>}
        {userGoogle.displayName && <p> {userGoogle.displayName} </p>}
        {userFacebook.photoURL && <img src={userFacebook.photoURL} alt="" />}
        {userFacebook.email && <p> {userFacebook.email} </p>}
        {userFacebook.displayName && <p> {userFacebook.displayName} </p>}
      </div> */}
      <div className='login'>
        <h1> Login </h1>
        <div className='center-text'>

        </div>
        <div className='content-login'>
          <div className="form">
            <input type="email" placeholder='Email' value={stringValue} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            {error && <p style={{ color: 'red' }}> {error} </p>}
            <a href="/update"> Forgot Password or email </a>
            <div className='button'>
              <button onClick={handleSubmit} > Login </button>

            </div>
          </div>
          <div className='entrar-com'>
            <h2> Entrar com Google </h2>
            <div className='flex'>
              <img onClick={handleGoogle} src={google} alt="google" />
            </div>
          </div>
        </div>

      </div>



    </>
  )
}

export default Login
