import React, { useRef, useEffect } from 'react';

export default function PaypalOrder(props) {
  console.log(props.coursesPrice.slice(2,props.coursesPrice.length));



  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: `${props.coursesName}`,
              amount: {
                currency_code: "USD",
                value: Number(props.coursesPrice.slice(2, props.coursesPrice.length))
              }
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
      <div ref={paypal}> </div>
    </div>
  )
}

