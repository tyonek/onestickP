import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import pic10 from '../../../assets/photos/pic10.jpg';


export default class Medical_Assistant extends Component {
  render() {
    return (
      <div>
        <Card className="courseCard">
          <Card.Body>
            <Card.Title className="courseTitle">Medical Assistant | $1600</Card.Title>
            <Card.Subtitle className="courseAlt">+ Phlebotomy</Card.Subtitle>
            {/* <Card.Subtitle className="coursePrice">$2500</Card.Subtitle> */}
            <Card.Text className="courseDescription">
              Medical Assistants are critical team members at hospitals, urgent cares, diagnostic laboratories and blood donor centers.
              As advancements in healthcare/medical field rise, there will be a need for more MA's .
              It is an amazing, and exciting time to begin a career in the thriving healthcare field.
              Earning your Medical Assistants Certification (MMA) certification from OneStick Phlebotomy Service can give employers confidence in your skills and abilities.
              At times MA's can be very overwhelmed, and frustrated due to the work load or simply just not having a good day.
              It is their duty to be professional at all times despite their moods.
              However set yourself up for success and reach your career goals in the rewarding healthcare industry.
              Just like any other position there are obstacles, but it's up to the individual to be successful in their careers.
              So lets sign yourself up and join OneStick Phlebotomy Service to help you fulfill the dream of becoming a "Medical Assistant"!
              To complete your certification you will need to finish all the chapters in the program and complete the final exam.
              You can not skip chapters and must complete them in the ordered. All of your progress is auto-saved. You can take this course 24/7.
            </Card.Text>
            <Card.Img className="courseImg w-50" variant="top" src={pic10} />
          </Card.Body>
          <Button className="courseB w-50" size="lg" variant="danger" href="/applyNow">Apply Now</Button>
        </Card>
      </div>
    )
  }
}

