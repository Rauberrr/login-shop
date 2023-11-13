import './style.css'
import Header from "../../components/Header"

const Home = () => {

  const search = true

  return (
    <>
      <Header search={search} />
      <h1 className="center-text"> Compre Agora </h1>
      <div className='grid center products'>
        <div>
          <img src="" alt="" />
          <h1>Nome Produto</h1>
          <div className='flex'>
            <>*</>
            <>*</>
            <>*</>
            <>*</>
            <>*</>
          </div>
          <div className='flex space'>
            <div className="flex center">
              <h2> <span className='green'> R$300.00 </span></h2>
              <h3> <span className='pink'> 30% off </span> </h3>
            </div>
            <button> Ver Mais </button>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <h1>Nome Produto</h1>
          <div className='flex'>
            <>*</>
            <>*</>
            <>*</>
            <>*</>
            <>*</>
          </div>
          <div className='flex space'>
            <div className="flex center">
              <h2> <span className='green'> R$300.00 </span></h2>
              <h3> <span className='pink'> 30% off </span> </h3>
            </div>
            <button> Ver Mais </button>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <h1>Nome Produto</h1>
          <div className='flex'>
            <>*</>
            <>*</>
            <>*</>
            <>*</>
            <>*</>
          </div>
          <div className='flex space'>
            <div className="flex center">
              <h2> <span className='green'> R$300.00 </span></h2>
              <h3> <span className='pink'> 30% off </span> </h3>
            </div>
            <button> Ver Mais </button>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <h1>Nome Produto</h1>
          <div className='flex'>
            <>*</>
            <>*</>
            <>*</>
            <>*</>
            <>*</>
          </div>
          <div className='flex space'>
            <div className="flex center">
              <h2> <span className='green'> R$300.00 </span></h2>
              <h3> <span className='pink'> 30% off </span> </h3>
            </div>
            <button> Ver Mais </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
