import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import '../../../routes/LandingPage/LandingPage.css'


export default class Contact extends Component {
  render() {
    return (
      <main>
      <div className="contactControl">
        <h1 className="landingTitle">Contact Us</h1>
        <h2 className="landingMotto">Hours: Wednesday 6pm-9pm | Saturday 9am-1pm | EST </h2>
        <p className="messageDescription">Please fill out and submit the Contact Us form and one of our 
        Student Services Representatives will contact you shortly (usually within 24 hours, or next business day).</p>
        <Form>
          <Form.Row>
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="contactInput" type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control className="contactInput" placeholder="( ### ) ###-#### " />
          </Form.Group>
          </Form.Row>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control className="contactInput" as="textarea" placeholder="Message..." rows={4} />
          </Form.Group>
          <Button className="contactButton" variant="danger" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
      </main>
    )
  }
}