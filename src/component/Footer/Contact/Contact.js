import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <h2>Hours: Wednesday 6pm-9pm | Saturday 9am-1pm | EST </h2>
        <p>Please leave a detailed message and we will contact with you as soon as possible.</p>
        <Form>
          <Form.Row>
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="( ### ) ###-#### " />
          </Form.Group>
          </Form.Row>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Message..." rows={4} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    )
  }
}