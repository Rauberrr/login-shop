import { useState } from 'react'
import mercadopago from '../../assets/imgs/mercadopago.svg'
import paypal from '../../assets/imgs/paypal.svg'
import PayPal from "../../components/PayPal"
import './style.css'

const Payment = () => {

    const [Payment, setPayment] = useState<Boolean>(false)


    return (
        <>
            <div className='center-text payment'>
                <h1> Escolha sua forma de pagamento</h1>
                <img src={mercadopago} alt="MercadoPago" />
                <img src={paypal} alt="PayPal" onClick={() => Payment ? setPayment(false) : setPayment(true)} />
            </div>
            {Payment && (
                <div id="buttons-container" className="buttons-container">
                    <PayPal />
                </div>
            )}
        </>
    )
}

export default Payment
