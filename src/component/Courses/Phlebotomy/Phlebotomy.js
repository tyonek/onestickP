import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import pic2 from '../../../assets/photos/pic2.jpeg';
export default class Phlebotomy extends Component {
  render() {
    return (
      <div className="courseControl">
        <Card className="courseCard">
          <Card.Body>
            <Card.Title className="courseTitle">Phlebotomy | $1275</Card.Title>
            <Card.Text className="courseDescription">
              Phlebotomy Technicians are critical team members at hospitals, urgent care, diagnostic laboratories, and blood donor centers.
              As society changes, healthcare needs to evolve and meet all new standards and provide quality care.
              This means there will be a need and advancements in all the medical fields such as Phlebotomy.
              NOW is an especially exciting time to begin a career in this thriving field. Earning your Phlebotomy Technician Certification (CPT) from OneStick Phlebotomy can give employers confidence in your skills and abilities.
              Set yourself up for success and reach your career goals in the rewarding healthcare industry.
              To complete your certification you will need to go over the study guide and take the final exam.
              There is a $350 non-refundable downpayment required for this course.
              <a className="courseDescription" href="tel:2672799461">Call</a> or <a href = "mailto: Contact@Onestickphlebotomy.com">Email</a>
            </Card.Text>
            <Card.Img className="courseImg w-50" variant="bottom" src={pic2} />
          </Card.Body>
          {!this.props.isLoggedIn && <Button className="courseB w-50" size="lg" variant="danger" href="/applyNow">Apply Now</Button> }
        </Card>
      </div>
    )
  }
}


