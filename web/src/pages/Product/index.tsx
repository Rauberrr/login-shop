import './style.css'
import Header from '../../components/Header'
import cart from '../../assets/imgs/cart.svg'
import starSVG from '../../assets/imgs/star.svg'
import { useEffect, useState } from 'react'



const Product = () => {

    

    const [width, setwidth] = useState(0)


    useEffect(() => {

        const handleWidth = () => {
            setwidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener('resize', handleWidth)
        }

    },[])


    const buttons = width>500

  return (
    <>
        <Header search={true} />
        <div className='product-id'>
            <div className='img-product'>
                {/* <img src={} alt="" /> */}
            </div>
                    <h1> Product NameProduct NameProduct Name </h1>
                <p> Description of product </p>
                <div className='flex center buy space'>
                    <div className='flex center'>
                        <h1> <span className="green"> R$300.00 </span></h1>
                        <h2> <span className="red"> 90% off </span> </h2>
                    </div>
                    {buttons ? 
                    <div className='flex'>
                        <button className='flex center black'> Add Cart <img src={cart} alt="" /> </button>
                        <button className='blue'> Buy Now </button>
                    </div>
                    : <></>}
                </div>
                {buttons ==false ? <div className='flex'>
                        <button className='flex center black'> Add Cart <img src={cart} alt="" /> </button>
                        <button className='blue'> Buy Now </button>
                    </div> : <></>}
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
                <div className='flex center stars'>
                    <img src={starSVG} alt="" />
                    <img src={starSVG} alt="" />
                    <img src={starSVG} alt="" />
                    <img src={starSVG} alt="" />
                    <img src={starSVG} alt="" />
                    <p>(1)</p>
                </div>
        </div>
    </>
    )
}

export default Product
