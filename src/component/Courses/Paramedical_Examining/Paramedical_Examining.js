import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import slide1 from '../../../assets/photos/bloodwork.jpg';
export default class Paramedical_Examining extends Component {
  render() {
    return (
      <div>

        <Card className="courseCard">
          <Card.Body>
            <Card.Title className="courseTitle">Paramedical | $2500</Card.Title>
            <Card.Subtitle className="courseAlt">+ Phlebotomy</Card.Subtitle>
            {/* <Card.Subtitle className="coursePrice">$2500</Card.Subtitle> */}
            <Card.Text className="courseDescription">
              We are proud to offer a Paramedical Examining Online Course. This course is available to all individuals who have successfully completed previous medical training and are up-to-date on their certification.
              The course is approximately 10 hours in length, and can be completed in either two days or two weeks (self-paced course), depending on your schedule!
              The course is designed to give you flexibility and limit time constraints to work with any busy schedule. Upon completion, students will be skilled in all techniques necessary to enter into the insurance examining field.
              To be a Paramedical Examiner, and have a positive impact in our health care industry you must have a minimum education in the form of a certification in phlebotomy, medical assistant, or nursing.
              Our Paramed Organization provides the first National Paramedical Examiner Certification.
              You will find our online education program comprises of various subjects both broad and specific,
              however some basic knowledge is required in order to succeed in this course.
            </Card.Text>
            <Card.Img className="courseImg w-50" variant="top" src={slide1} />
          </Card.Body>
          <Button className="courseB w-50" size="lg" variant="danger" href="/applyNow">Apply Now</Button>        </Card>
      </div>
    )
  }
}
