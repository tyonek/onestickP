import React, { useState,useEffect } from 'react';
import { Form, Button, Figure } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import canvas from '../../assets/photos/Canvas.png';
import paypal from '../../assets/photos/paypal.png';
import PaypalOrder from '../../component/Paypal/Paypal'


export default function Students(props) {

  const [checkout, setCheckout] = useState(false)
  return (
    <div>  
    {
      props.isLoggedIn?
      <div>     
          <Figure>
            <a href="https://www.instructure.com/canvas">
              <Figure.Image
                width={150}
                height={150}
                alt="171x180"
                src={canvas}
              /></a>
            <Figure.Caption>
              Canvas
        </Figure.Caption>
          </Figure>
          {checkout ? (
        <PaypalOrder props= {props} />
      ) : (
        <Figure onClick={() => {
          setCheckout(true);
        }}>
                <Figure.Image
                  width={170}
                  height={170}
                  alt="171x180"
                  src={paypal}
                />
              <Figure.Caption>
                Paypal
          </Figure.Caption>
            </Figure>
      )}
          
      </div> : <h1>Unauthorized access</h1>
    }
     
    </div>
  )
}



