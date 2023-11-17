import Header from '../../components/Header'
import google from '../../assets/imgs/google_icon-icons.com_62736 1.svg'
import facebook from '../../assets/imgs/facebook_icon-icons.com_59205 1.svg'
import './style.css'

const Cadastro = () => {
  return (
    <>
      <Header search={false} />
      <div className='login'>
        <h1> SignUp </h1>
        <div className='content-login'>
          <div className="form">
          <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
            <input type="password" placeholder='Confirm Password' required />
            <div className='button'>
                <a href="/login"> Login </a>
                <button> SignUp </button>
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
