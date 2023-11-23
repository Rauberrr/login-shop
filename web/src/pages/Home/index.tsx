import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../api/api'
import starSVG from '../../assets/imgs/star.svg'
import Header from "../../components/Header"
import './style.css'

const Home = () => {

  const [products, setProducts] = useState([])

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

  const navigate = useNavigate()

  const handleRedirect = (id: String) => {
    navigate(`/products/${id}`)
  }


  return (
    <>
      <Header search={true} />
      <h1 className="center-text title"> Compre Agora </h1>
      <div className='grid center products'>
        {products.map((product: productsProps) => (
          <div className='product' key={product._id}>
            <div className="center-text img">
              <img src={product.img} alt="" />
            </div>
            <div className='content'>

              <h1> {product.name} </h1>
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
    </>
  )
}

export default Home

