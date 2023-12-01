import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../api/api'
import plusSVG from '../../assets/imgs/plus.svg'
import starSVG from '../../assets/imgs/star.svg'
import TrashSVG from '../../assets/imgs/trash.svg'
import Header from '../../components/Header'
import './style.css'

const Home = () => {

  const [products, setProducts] = useState([])
  const [inputSearch, setInputSearch] = useState('');
  const [create, setCreate] = useState(false)
  const [imgInput, setImgInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [priceInput, setPriceInput] = useState<number>(0)
  const [descontoInput, setDescontoInput] = useState<number>(0)

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

  const handleCreate = async (e: React.MouseEvent) => {
    e.preventDefault()

    try {

      if (!imgInput || !nameInput || !descriptionInput || !priceInput) {
        window.alert('Aviso! Insira corretamente os dados.')
        return
      }

      console.log('entrou no try')
      const response = await axiosClient.post('/create-product', {
        img: imgInput,
        name: nameInput,
        description: descriptionInput,
        price: priceInput,
        desconto: descontoInput,
      })

      console.log(response.data)

      window.location.reload()

    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (id: String) => {


    try {

      const response = await axiosClient.delete(`/delete-product/${id}`)

      console.log(response.data)

      window.location.reload()

    } catch (error) {
      console.error(error)
    }
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
                  <div className='flex center product-button'>
                    {isAdmin && <img src={TrashSVG} className='button1' onClick={() => handleDelete(product._id)} />}
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
              {create === false ?
                <img src={plusSVG} alt="Create" onClick={() => setCreate(true)} />
                :
                <div>
                  <div className='input-mini'>
                    <p> Image Product </p>
                    <input type="text" onChange={(e) => setImgInput(e.target.value)} placeholder='Paste link to image' />
                    <p> Name </p>
                    <input type="text" onChange={(e) => setNameInput(e.target.value)} placeholder='Name product' />
                    <p> Description </p>
                    <input type="text" onChange={(e) => setDescriptionInput(e.target.value)} placeholder='Description' />
                    <p> Price </p>
                    <input type="number" onChange={(e) => setPriceInput(e.target.value)} placeholder='Price of product' />
                    <p> Desconto </p>
                    <input type="number" onChange={(e) => setDescontoInput(e.target.value)} placeholder='Desconto of product' />
                  </div>
                  <div className='flex space'>
                    <button onClick={() => setCreate(false)}> Cancel </button>
                    <button className='' onClick={handleCreate}> Sumbit </button>
                  </div>
                </div>
              }

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
                  <div className='flex center product-button'>
                    {isAdmin && <img src={TrashSVG} className='button1' onClick={() => handleDelete(product._id)} />}
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

