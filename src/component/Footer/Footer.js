import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Row >
          <Col>
            <Card className="footer">
              <Card.Footer>
                <Card.Title><Link to="/">OneStick Phlebotomy Service </Link></Card.Title>
                <Card.Text>
                  Simple as "One & Done"
            </Card.Text>
                <Card.Text>
                  <Link to="/contact">Contact</Link> | <Link to="/aboutUs">About Us</Link>
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}