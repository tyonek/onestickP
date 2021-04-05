import React, { useState } from 'react';
import { Figure, Card, CardDeck } from 'react-bootstrap';
import canvas from '../../assets/photos/Canvas.png';
import paypal from '../../assets/photos/paypal.png';
import PaypalOrder from '../../component/Paypal/Paypal'


export default function Students(props) {

  const [checkout, setCheckout] = useState(false)
  return (
    <div >
      {
        props.isLoggedIn ?
          <div>
            <CardDeck className="studentControl">
              <Card>
                <a href="https://www.instructure.com/canvas">
                  <Card.Img className="student_card w-50" variant="top" src={canvas} /></a>
                <Card.Body>
                  <Card.Title>Class Courses</Card.Title>
                </Card.Body>
              </Card>
              {checkout ? (
                <PaypalOrder props={props} />
              ) : (
                <Card>
                  <Card.Img className="student_card w-50" variant="top" src={paypal}
                    onClick={() => {
                      setCheckout(true);
                    }} />
                  <Card.Body>
                    <Card.Title >Course Payments</Card.Title>
                  </Card.Body>
                </Card>
              )}
            </CardDeck>

          </div> : <h1>Unauthorized access</h1>
      }

    </div>
  )
}



