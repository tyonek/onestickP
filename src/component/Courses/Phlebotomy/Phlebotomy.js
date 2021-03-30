import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import slide1 from '../../../assets/photos/bloodwork.jpg';
export default class Phlebotomy extends Component {
  render() {
    return (
      <div>
        <Card className="courseCard">
          <Card.Img className="courseImg" variant="top" src={slide1} />
          <Card.Body>
            <Card.Title className="courseTitle">Phlebotomy</Card.Title>
            <Card.Subtitle className="coursePrice">$1000</Card.Subtitle>
            <Card.Text className="courseDescription">
              Phlebotomy Technicians are critical team members at hospitals, urgent cares, diagnostic laboratories and blood donor centers.
              As society changes, healthcare needs to evolve and meet all new standards and provide quality care.
              This means there will be a need and advancements in all the medical fields such Phlebotomy.
              NOW is an especially exciting time to begin a career in this thriving field. Earning your Phlebotomy Technician Certification (CPT) from OneStick Phlebotomy can give employers confidence in your skills and abilities.
              Set yourself up for success and reach your career goals in the rewarding healthcare industry.
              To complete your certification you will need to go over the study guide and take the final exam.
            </Card.Text>
            <Button className="courseB" variant="primary" href="/applyNow">Apply Now</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}


