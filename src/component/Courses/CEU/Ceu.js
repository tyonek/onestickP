import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import pic11 from '../../../assets/photos/pic11.jpg';


export default class Ceu extends Component {
  render() {
    return (
      <div className="courseControl">
        <Card className="courseCard">
          <Card.Body>
            <Card.Title className="courseTitle">CEU | $650</Card.Title>
            <Card.Subtitle className="courseAlt">Continuing Education + Phlebotomy Refresher</Card.Subtitle>
            {/* <Card.Subtitle className="coursePrice">$300</Card.Subtitle> */}
            <Card.Text className="courseDescription">
              OnesStick Phlebotomy Service provides phlebotomy specialists with all of the tools required for outsourcing development, delivery, and administration of online training education programs.
              We create customized course content designed to meet the needs of phlebotomy school faculty, with online testing available for aspiring phlebotomists.
              This phlebotomy continuing education course is intended to help students meet requirements to renew existing phlebotomy licenses or certification.
              Please note that this is not a replacement for a phlebotomy training program that will actively prepare you to become a phlebotomist.
              <a className="links" target="_blank" className="courseDescription" href="tel:2672799461"> CALL</a> or <a href = "mailto: Contact@Onestickphlebotomy.com">EMAIL </a>
              to apply today!
            </Card.Text>
            <Card.Img className="courseImg w-50" variant="top" src={pic11} />
          </Card.Body>
          {!this.props.isLoggedIn &&<Button className="courseB w-50" size="lg" variant="danger" href="/applyNow">Apply Now</Button>   }     </Card>
      </div>
    )
  }
}


