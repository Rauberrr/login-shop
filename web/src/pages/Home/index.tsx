import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../api/api'
import plusSVG from '../../assets/imgs/plus.svg'
import starSVG from '../../assets/imgs/star.svg'
import Header from '../../components/Header'
import './style.css'

const Home = () => {

  const [products, setProducts] = useState([])
  const [inputSearch, setInputSearch] = useState('');

  const isAdmin = localStorage.getItem('isAdmin')
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('name')

  interface productsProps {
    _id: string,
    img: string,
    price: number,
    name: string,
    description: string,
    quantity: number,
    desconto: number,
  }

  useEffect(() => {

    async function products() {

      try {
        const response = await axiosClient.get('/list-products')
        setProducts(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    products()
  }, [])


  const productsFilter = inputSearch.length > 0 ? products.filter((product: productsProps) => product.name.toLowerCase().includes(inputSearch.toLowerCase())) : [];


  const navigate = useNavigate()

  const handleRedirect = (id: String) => {
    navigate(`/products/${id}`)
  }

  const handleCreate = () => {
    navigate('/create')
  }


  return (
    <>
      <Header search={true} setInputSearch={setInputSearch} inputSearch={inputSearch} />
      <h1 className="center-text title"> Compre Agora </h1>
      {token && <p className='center-text'> Seja Bem Vindo, {name} </p>}
      {isAdmin == 'true' && <p className='center-text'> You is Admin</p>}
      {inputSearch.length > 0
        ?
        <div className='grid center products'>
          {productsFilter.map((product: productsProps) => (
            <div className='product' key={product._id}>
              <div className="center-text img">
                <img src={product.img} alt="" />
              </div>
              <div className='content'>

                <h1> {product.name} </h1>
                <p> {product.description} </p>
                <div>

                </div>
                <div className='flex center stars'>
                  <img src={starSVG} alt="" />
                  <img src={starSVG} alt="" />
                  <img src={starSVG} alt="" />
                  <img src={starSVG} alt="" />
                  <img src={starSVG} alt="" />
                  <p>(1)</p>
                </div>
                <div className='flex space'>
                  <div className="flex center center">
                    <h2> R${product.price} </h2>
                    {product.desconto ?
                      <h3> <span className='green'> {product.desconto}% off </span> </h3>
                      : <></>}
                  </div>
                  <div className='product-button'>
                    <button onClick={() => handleRedirect(product._id)}> Ver Mais </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        :
        <div className='grid center products'>
          {isAdmin == 'true' &&
            <div className='flex center product add'>
              <img src={plusSVG} alt="Create" onClick={() => handleCreate()} />
            </div>
          }

          {products.map((product: productsProps) => (
            <div className='product' key={product._id}>
              <div className="center-text img">
                <img src={product.img} alt="" />
              </div>
              <div className='content'>

                <h1> {product.name} </h1>
                <p> {product.description} </p>

                <div>

                </div>
                <div className='flex center stars'>
                  <img src={starSVG} alt="" />
                  <img src={starSVG} alt="" />
                  <img src={starSVG} alt="" />
                  <img src={starSVG} alt="" />
                  <img src={starSVG} alt="" />
                  <p>(1)</p>
                </div>
                <div className='flex space'>
                  <div className="flex center center">
                    <h2> R${product.price} </h2>
                    {product.desconto ?
                      <h3> <span className='green'> {product.desconto}% off </span> </h3>
                      : <></>}
                  </div>
                  <div className='product-button'>
                    <button onClick={() => handleRedirect(product._id)}> Ver Mais </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default Home

