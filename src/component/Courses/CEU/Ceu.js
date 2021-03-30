import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import slide1 from '../../../assets/photos/bloodwork.jpg';


export default class Ceu extends Component {
  render() {
    return (
      <div>
        <Card className="courseCard">
          <Card.Img className="courseImg" variant="top" src={slide1} />
          <Card.Body>
            <Card.Title className="courseTitle">CEU</Card.Title>
            <Card.Subtitle className="courseAlt">Continuing Education + Phlebotomy Refresher</Card.Subtitle>
            <Card.Subtitle className="coursePrice">$300</Card.Subtitle>
            <Card.Text className="courseDescription">
              OnesStick Phlebotomy Service provides phlebotomy specialists with all of the tools required for outsourcing development, delivery and administration of online training education programs.
              We create customized course content designed to meet the needs of phlebotomy school faculty, with online testing available for aspiring phlebotomists.
              This phlebotomy continuing education course is intended to help students meet requirements to renew existing phlebotomy licenses or certification.
              Please note that this is not a replacement for a phlebotomy training program that will actively prepare you to become a phlebotomist.
            </Card.Text>
            <Button className="courseB" variant="primary" href="/applyNow">Apply Now</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}


