import { FacebookAuthProvider, GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import axiosClient from '../../api/api'
import facebook from '../../assets/imgs/facebook_icon-icons.com_59205 1.svg'
import google from '../../assets/imgs/google_icon-icons.com_62736 1.svg'
import { auth } from '../../services/firebase'
import './style.css'


const Login = () => {
  const [email, setEmail] = useState<String | null>(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [sucess, setSucess] = useState('')
  const [userGoogle, setUserGoogle] = useState<User>({} as User)
  const [userFacebook, setUserFacebook] = useState<User>({} as User)
  const [user, setUser] = useState<responseProps>({} as responseProps)

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
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleFacebook = async () => {
    const provider = new FacebookAuthProvider()

    await signInWithPopup(auth, provider)
      .then((res) => {
        setUserFacebook(res.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()

    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('isAdmin'))

    try {
      const response = await axiosClient.post<responseProps>('/sign-in', {
        email: email,
        password: password
      })



      console.log(response.data.token)
      setError('')
      setUser(response.data)
      console.log('user normal: ' + user)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('isAdmin', response.data.user.isAdmin)
      setSucess('Usuario logado com sucesso! ')
      console.log(localStorage.getItem('token'))
      console.log(localStorage.getItem('isAdmin'))
      // window.location.href = '/'
    } catch (error) {
      console.error(error)
      setError('Erro ao fazer login, tente novamente! ')
      setSucess('')
    }
  }

  const stringValue: string = email ? email.toString() : '';



  return (
    <>
      {/* <Header search={false} /> */}
      <div>
        {userGoogle.photoURL && <img src={userGoogle.photoURL} alt="" />}
        {userGoogle.email && <p> {userGoogle.email} </p>}
        {userGoogle.displayName && <p> {userGoogle.displayName} </p>}
        {userFacebook.photoURL && <img src={userFacebook.photoURL} alt="" />}
        {userFacebook.email && <p> {userFacebook.email} </p>}
        {userFacebook.displayName && <p> {userFacebook.displayName} </p>}
      </div>
      <div className='login'>
        <h1> Login </h1>
        <div className='center-text'>

        </div>
        <div className='content-login'>
          <div className="form">
            <input type="email" placeholder='Email' value={stringValue} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <a href="/update"> Forgot Password or email </a>
            <div className='button'>
              <button onClick={handleSubmit} > Login </button>

            </div>
          </div>
          <div className='entrar-com'>
            <h2> Entrar com </h2>
            <div className='flex'>
              <img onClick={handleGoogle} src={google} alt="google" />
              <img onClick={handleFacebook} src={facebook} alt="facebook" />
            </div>
          </div>
          {error ? <h2 className='white'> {error} </h2> : <></>}
          {sucess ? <h2 className='green'> {sucess} </h2> : <></>}
        </div>

      </div>



    </>
  )
}

export default Login
