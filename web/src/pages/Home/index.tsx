import './style.css'
import Header from "../../components/Header"
import produto1 from '../../assets/imgs/produto1.png'
import produto2 from '../../assets/imgs/produto2.png'
import starSVG from '../../assets/imgs/star.svg'

const Home = () => {

  const search = true

  return (
    <>
      <Header search={search} />
      <h1 className="center-text"> Compre Agora </h1>
      <div className='grid center products'>
        <div className='product'>
          <div className="center-text">
            <img src={produto1} alt="" />
          </div>
            <h1>Nome Produto</h1>
            <div className='flex stars'>
              <img src={starSVG} alt="" />
              <img src={starSVG} alt="" />
              <img src={starSVG} alt="" />
              <img src={starSVG} alt="" />
              <img src={starSVG} alt="" />
              <p>(1)</p>
            </div>
            <div className='flex space'>
              <div className="flex center">
                <h2> R$300.00 </h2>
                <h3> <span className='green'> 30% off </span> </h3>
              </div>
              <div className='product-button'>
                <button> Ver Mais </button>
              </div>
            </div>
        </div>
        <div className='product'>
            <div className="center-text">
            <img src={produto2} alt="" />
          </div>
          <h1>Nome Produto</h1>
          <div className='flex stars'>
              <img src={starSVG} alt="" />
              <img src={starSVG} alt="" />
              <img src={starSVG} alt="" />
              <img src={starSVG} alt="" />
              <img src={starSVG} alt="" />
              <p>(0)</p>
            </div>
          <div className='flex space'>
            <div className="flex center">
              <h2> R$300.00 </h2>
              <h3> <span className='green'> 30% off </span> </h3>
            </div>
            <div className='product-button'>
              <button> Ver Mais </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
