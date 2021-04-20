import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footerControl">
        <Row >
          <Col>
            <Card bg="dark" className="footer">
              <Card.Footer>
                <Card.Title><Link className="footer" to="/">OneStick Phlebotomy Service </Link></Card.Title>
                <Card.Text>
                  Simple as "One & Done"
            </Card.Text>
            <Card.Text> 5300 Wynnefield Ave Philadelphia, PA 19131</Card.Text>
                <Card.Text>
                  <Link className="footer" to="/contact">Contact</Link> | <Link className="footer" to="/aboutUs">About Us</Link>
                </Card.Text>
                <div class="row justify-content-center user-social-link">
                  <div class="col-auto"><a target="_blank" href="https://www.facebook.com/OneStick-Phlebotomy-Service-112848990891269"><i class="fa fa-facebook text-facebook"></i></a></div>
                  <div class="col-auto"><a target="_blank" href="https://twitter.com/OneStickPBT"><i class="fa fa-twitter text-twitter"></i></a></div>
                  <div class="col-auto"><a target="_blank" href="https://www.instagram.com/onestickphlebotomyservices/"><i class="fa fa-instagram text-instagram"></i></a></div>
                  <div class="col-auto"><a target="_blank" href="https://www.linkedin.com/in/onestick-phlebotomy-service-52b516209/"><i class="fa fa-linkedin text-linkedin"></i></a></div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}