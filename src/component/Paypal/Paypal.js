import React, { useRef, useEffect } from 'react';

export default function PaypalOrder(props) {

  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Phlebotomy",
              amount: {
                currency_code: "USD",
                value: 800.00
              },
              description: "Medical Assistant",
              amount: {
                currency_code: "USD",
                value: 1600.00
              },
              description: "Paramedical Examiner",
              amount: {
                currency_code: "USD",
                value: 1600.00
              },
              description: "CEU",
              amount: {
                currency_code: "USD",
                value: 300.00
              },
              description: "Instructor Course",
              amount: {
                currency_code: "USD",
                value: 350.00
              },
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
      },
      onError: (err) => {
        console.log(err)
      }
    }).render(paypal.current)
  }, [])
  return (
    <div>
      <div ref={paypal} > </div>
    </div>
  )
}