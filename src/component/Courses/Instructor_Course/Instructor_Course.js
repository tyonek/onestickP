import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../../Courses/courses.css';
import pic9 from '../../../assets/photos/pic9.png';


export default class Instructor_Course extends Component {
  render() {
    return (
      <div className="courseControl">
        <Card className="courseCard">
          <Card.Body>
            <Card.Title className="courseTitle">Instructor Course | $2500</Card.Title>
            {/* <Card.Subtitle className="coursePrice">$350</Card.Subtitle> */}
            <Card.Text className="courseDescription">
              We are proud to offer a phlebotomy instructor online course.
              This course is available to all individuals who have successfully completed previous medical training and are up-to-date on their certification.
              Upon completion, you will be skilled in all techniques necessary to start teaching.
              <a className="links" target="_blank" className="courseDescription" href="tel:2672799461"> Call</a> or <a href = "mailto: Contact@Onestickphlebotomy.com">Email</a>
              to apply today!
            </Card.Text>
            <Card.Img className="courseImg w-50" variant="top" src={pic9} />
          </Card.Body>
          {!this.props.isLoggedIn && <Button className="courseB w-50" size="lg" variant="danger" href="/applyNow">Apply Now</Button> }      
          </Card>
      </div>
    )
  }
}

