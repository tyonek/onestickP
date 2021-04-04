import React, { useState } from 'react';
import { Form, Button, Figure } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import canvas from '../../assets/photos/Canvas.png';
import paypal from '../../assets/photos/paypal.png';


export default function Students(props) {

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
      <Figure>
        <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmep%2F">
        <Figure.Image
          width={170}
          height={170}
          alt="171x180"
          src={paypal}
        /></a>
        <Figure.Caption>
          Paypal
        </Figure.Caption>
      </Figure>
    </div>
  )
}



