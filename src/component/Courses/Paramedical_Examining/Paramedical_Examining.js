import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import pic8 from '../../../assets/photos/pic8.png';
export default class Paramedical_Examining extends Component {
  render() {
    return (
      <div className="courseControl">

        <Card className="courseCard">
          <Card.Body>
            <Card.Title className="courseTitle">Paramedical | $1600</Card.Title>
            <Card.Subtitle className="courseAlt">includes Phlebotomy</Card.Subtitle>
            {/* <Card.Subtitle className="coursePrice">$2500</Card.Subtitle> */}
            <Card.Text className="courseDescription">
              We are proud to offer a Paramedical Examining Online Course. This course is available to all individuals who have successfully completed previous medical training and are up-to-date on their certification.
              Upon completion, students will be skilled in all techniques necessary to enter into the insurance examining field.
              To be a Paramedical Examiner, and have a positive impact in our health care industry you must have a minimum education in the form of a certification in phlebotomy, medical assistant, or nursing.
              Our Paramed Organization provides the first National Paramedical Examiner Certification.
              You will find our online education program comprises various subjects both broad and specific,
              however, some basic knowledge is required in order to succeed in this course.
            </Card.Text>
            <Card.Img className="courseImg w-50" variant="top" src={pic8} />
          </Card.Body>
          {!this.props.isLoggedIn && <Button className="courseB w-50" size="lg" variant="danger" href="/applyNow">Apply Now</Button> } 
          </Card>
      </div>
    )
  }
}
