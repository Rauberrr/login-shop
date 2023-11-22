import { useEffect, useState } from 'react'
import cart from '../../assets/imgs/cart.svg'
import starSVG from '../../assets/imgs/star.svg'
import Header from '../../components/Header'
import './style.css'



const Product = () => {

    const isAdmin = localStorage.getItem('isAdmin')

    const [width, setwidth] = useState(0)
    const [h1, setH1] = useState('false')
    const [paragrafo, setParagrafo] = useState('false')



    useEffect(() => {

        const handleWidth = () => {
            setwidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener('resize', handleWidth)
        }

    }, [])

    const buttons = width > 500




    return (
        <>
            <Header search={true} />
            <div className='product-id'>
                <div className='img-product'>
                    {/* <img src={} alt="" /> */}
                </div>
                {isAdmin ? <div>
                    <h1 onDoubleClick={() => setH1("true")}>
                        {h1 == "true" ? <div className='flex editing'>
                            <input type='name' value={h1} onChange={(e) => setH1(e.target.value)} placeholder='Title' />
                            <button className='button-editing'> Confirm Edit </button>
                        </div>
                            :
                            <h1> Product NameProduct NameProduct Nameee </h1>}
                    </h1>
                    <p onDoubleClick={() => setParagrafo("true")}>
                        {paragrafo == "true" ? <div className='flex editing'>
                            <input type='name' value={paragrafo} onChange={(e) => setParagrafo(e.target.value)} placeholder='Description' />
                            <button className='button-editing'> Confirm Edit </button>
                        </div> : <p> Description of product </p>}
                    </p>
                </div> : <></>}
                <div className='flex center buy space'>
                    <div className='flex center'>
                        <h1> <span className="green"> R$300.00 </span> </h1>
                        <h2> <span className="red"> 90% off </span> </h2>
                    </div>
                    {buttons ?
                        <div className='flex'>
                            <button className='flex center black'> Add Cart <img src={cart} alt="" /> </button>
                            <button className='blue'> Buy Now </button>
                        </div>
                        : <></>}
                </div>
                {buttons == false ? <div className='flex'>
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
