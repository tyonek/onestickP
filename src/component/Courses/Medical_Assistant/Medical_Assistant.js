import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import pic6 from '../../../assets/photos/pic6.jpg';


export default class Medical_Assistant extends Component {
  render() {
    return (
      <div className="courseControl">
        <Card className="courseCard">
          <Card.Body>
            <Card.Title className="courseTitle">Medical Assistant | $2375</Card.Title>
            <Card.Subtitle className="courseAlt">includes Phlebotomy</Card.Subtitle>
            {/* <Card.Subtitle className="coursePrice">$2500</Card.Subtitle> */}
            <Card.Text className="courseDescription">
            Medical Assistants are critical team members at hospitals, urgent care, diagnostic laboratories, and blood donor centers. 
            As advancements in the healthcare/medical field rise, there will be a need for more MA's. 
            It is an amazing, and exciting time to begin a career in the thriving healthcare field. Earning your Medical Assistants (MA) 
            certification from OneStick Phlebotomy Service can give employers confidence in your skills and abilities. 
            So let's sign yourself up and join OneStick Phlebotomy Service to help you fulfill the dream of becoming a "Medical Assistant"! 
            To complete your certification you will need to finish all the chapters in the program and complete the final exam. You can not skip chapters and must complete them in order. All of your progress is auto-saved. You can take this course 24/7.
            There is a $500 non-refundable downpayment required for this course.
            <a className="links" target="_blank" className="courseDescription" href="tel:2672799461"> CALL</a> or <a href = "mailto: Contact@Onestickphlebotomy.com">EMAIL </a>
               to apply today!
            </Card.Text>
            <Card.Img className="courseImg w-50" variant="top" src={pic6} />
          </Card.Body>
          {!this.props.isLoggedIn && <Button className="courseB w-50" size="lg" variant="danger" href="/applyNow">Apply Now</Button>}
        </Card>
      </div>
    )
  }
}

