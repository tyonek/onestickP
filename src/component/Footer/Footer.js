import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title><Link to="/">OneStick Phlebotomy Service </Link></Card.Title>
            <Card.Text>
            Simple as "One & Done"
            </Card.Text>
            <Card.Text>
              <Link to="Contact">Contact</Link>
            </Card.Text>
            <Card.Text>
              <Link to="AboutUs">About Us</Link>
            </Card.Text>
            <Card.Text>
              <Link to="Services">Our Services</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}