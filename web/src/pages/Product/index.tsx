import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../api/api'
import cart from '../../assets/imgs/cart.svg'
import starSVG from '../../assets/imgs/star.svg'
import Header from '../../components/Header'
import './style.css'

interface productsProps {
    _id: string,
    img: string,
    price: number,
    name: string,
    description: string,
    quantity: number,
    desconto: number,
}

const Product = () => {

    const isAdmin = localStorage.getItem('isAdmin')
    const token = localStorage.getItem('token')

    const [width, setwidth] = useState(0)

    const [h1, setH1] = useState(false)
    const [paragrafo, setParagrafo] = useState(false)
    const [price, setPrice] = useState(false)
    const [desconto, setDesconto] = useState(false)


    const [inputP, setInputP] = useState('')
    const [inputH1, setInputH1] = useState('')
    const [inputPrice, setInputPrice] = useState<number>(0)
    const [inputDesconto, setInputDesconto] = useState<number>(0)


    const [product, setProducts] = useState<productsProps>({} as productsProps)
    const { id } = useParams()

    const buttons = width > 500

    useEffect(() => {

        products()
        async function products() {
            try {
                const response = await axiosClient.get('/list-products')
                const productFind: productsProps = await response.data.find((product: productsProps) => product._id === id)
                setProducts(productFind)

                setInputH1(productFind.name || '')
                setInputP(productFind.description || '')
                setInputPrice(productFind.price ? String(productFind.price) : '')

                console.log(isAdmin)

            } catch (error) {
                console.error(error)
            }
        }


        const handleWidth = () => {
            setwidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener('resize', handleWidth)
        }


    }, [])

    const handleUpdate = async (id: String) => {
        try {

            const response = await axiosClient.put(`/update-product/${id}`, {
                name: inputH1,
                description: inputP,
                price: inputPrice,
                desconto: inputDesconto,
            })

            console.log(response)

            window.location.reload()


        } catch (error) {
            console.error(error)
        }
    }

    const navigate = useNavigate()

    const handlePayment = () => {
        if (!token) {
            navigate('/login')
            return
        }

        navigate('/payment')
    }

    return (
        <>
            <Header search={true} />
            <div className='product-id'>
                <div className='img-product'>
                    <img src={product.img} alt="" />
                </div>
                {isAdmin == 'true' ?
                    <div onDoubleClick={() => setH1(true)}>
                        {h1 == true ? <div className='flex editing'>
                            <input type='name' value={inputH1} onChange={(e) => setInputH1(e.target.value)} placeholder='Title' />
                            <button className='button-editing' onClick={() => setH1(false)}> Confirm Edit </button>
                        </div>
                            :
                            <div>
                                {inputH1 ? <h1> {inputH1} </h1> :
                                    <h1> {product.name} </h1>
                                }
                            </div>}
                    </div>
                    : <h1> {product.name} </h1>}
                {isAdmin == 'true' ?
                    <div onDoubleClick={() => setParagrafo(true)}>
                        {paragrafo == true ? <div className='flex editing'>
                            <input type='name' value={inputP} onChange={(e) => setInputP(e.target.value)} placeholder='Description' />
                            <button className='button-editing' onClick={() => setParagrafo(false)} > Confirm Edit </button>
                        </div>
                            :
                            <div>
                                {inputP ? <p> {inputP} </p> :
                                    <p> {product.description} </p>
                                }
                            </div>}
                    </div>
                    : <p> {product.description} </p>}
                <div className='flex center buy space'>
                    <div className='flex center'>
                        {isAdmin == 'true' ?
                            <div onDoubleClick={() => setPrice(true)}>
                                {price ? <div className='flex editing-price'>
                                    <input type="number" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} placeholder='Price' />
                                    <button className='button-editing' onClick={() => setPrice(false)}> Confirm Edit </button>
                                </div>
                                    : <div>
                                        {inputPrice ? <h1> <span className="green"> R${inputPrice} </span> </h1>
                                            :
                                            <h1> <span className="green"> R${product.price} </span> </h1>
                                        }
                                    </div>
                                }

                            </div>
                            : <h1> <span className="green"> R${product.price} </span> </h1>}
                        {isAdmin == 'true' ?
                            <div onDoubleClick={() => setDesconto(true)}>
                                {desconto == true ? <div className='flex editing'>
                                    <input type='number' value={inputDesconto} onChange={(e) => setInputDesconto(e.target.value)} placeholder='Desconto' />
                                    <button className='button-editing' onClick={() => setDesconto(false)} > Confirm Edit </button>
                                </div>
                                    :
                                    <div>
                                        {inputDesconto ? <h2> <span className="red"> {inputDesconto}% off </span> </h2> :
                                            <h2> <span className="red"> {product.desconto}% off </span> </h2>
                                        }
                                    </div>}
                            </div>
                            : <h2> <span className="red"> {product.desconto}% off </span> </h2>}

                    </div>
                    {buttons &&
                        <div className='flex'>
                            <button className='flex center black'> Add Cart <img src={cart} alt="" /> </button>
                            <button className='blue' onClick={() => handlePayment()}> Buy Now </button>
                        </div>
                    }
                </div>
                {!buttons && <div className='flex'>
                    <button className='flex center black'> Add Cart <img src={cart} alt="" /> </button>
                    <button className='blue' onClick={() => handlePayment()}> Buy Now </button>
                </div>}
                <select name="" id="">
                    <option value="">Quantity 1</option>
                    <option value="">Quantity 2</option>
                    <option value="">Quantity 3</option>
                    <option value="">Quantity 4</option>
                    <option value="">Quantity 5</option>
                    <option value="">Quantity 6</option>
                    <option value="">Quantity 7</option>
                    <option value="">Quantity 8</option>
                    <option value="">Quantity 9</option>
                    <option value="">Quantity 10</option>
                </select>
                <div className='flex'>
                    <div className='flex center stars'>
                        <img src={starSVG} alt="" />
                        <img src={starSVG} alt="" />
                        <img src={starSVG} alt="" />
                        <img src={starSVG} alt="" />
                        <img src={starSVG} alt="" />
                        <p>(1)</p>
                    </div>
                    {isAdmin == 'true' &&
                        <div>
                            <button className='submit-editing' onClick={() => handleUpdate(product._id)}> Finish Editing </button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Product
