import React, { useState, ReactDOM } from 'react';
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
      <button onClick={() => {
        setCheckout(true);
      }}>
        Pay For Courses Here
        </button>
      )}
      
      
    </div>
  )
}



