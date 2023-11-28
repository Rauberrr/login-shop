import { useEffect, useRef } from "react";

const PayPal = () => {
    const paypal = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.paypal || !paypal.current) return;

        const ButtonsPayment = window.paypal.Buttons({
            createOrder: (data: any, actions: any, err: any) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "TESTE",
                            amount: {
                                currency_code: 'BRL',
                                value: '20.00'
                            }
                        }
                    ]
                });
            },
            onApprove: async (data: any, actions: any) => {
                const order = await actions.order.capture()
                console.log(order)
            }
        });

        ButtonsPayment.render(paypal.current)

        return () => {
            ButtonsPayment.close()
        }

    }, []);

    return (
        <div>
            <div ref={paypal}> </div>
        </div>
    )
}

export default PayPal;