import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import slide1 from '../../../assets/photos/bloodwork.jpg';


export default class Instructor_Course extends Component {
  render() {
    return (
      <div>
        <Card className="courseCard">
          <Card.Img className="courseImg" variant="top" src={slide1} />
          <Card.Body>
            <Card.Title className="courseTitle">Instructor</Card.Title>
            <Card.Subtitle className="coursePrice">$350</Card.Subtitle>
            <Card.Text className="courseDescription">
              We are proud to offer a phlebotomy instructor online Course.
              This course is available to all individuals who have successfully completed previous medical training and are up-to-date on their certification.
              The course is approximately 30 hours in length, and can be completed in either two days or two weeks, depending on your schedule!
              The course is designed to give you flexibility and limit time constraints to work with any busy schedule.
              Upon completion, you will be skilled in all techniques necessary to start teaching.
              There are 17 sections that must be completed in order before receiving your certification.
              Each section will require you to complete the assigned readings and Quizzes.
              Once you are done reading through the material, take the appropriate quiz for the section before moving on to the next section.
              Even though the quizzes are also graded, their main purpose is to prepare you by highlighting the areas you know well,
              or point you to the materials you may want to spend a little more time reviewing.
            </Card.Text>
            <Button className="courseB" variant="primary" href="/applyNow">Apply Now</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

