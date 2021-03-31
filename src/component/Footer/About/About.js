import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Image , Col } from 'react-bootstrap';
import headshotblank from '../../../assets/photos/headshot.jpeg';
import '../../../routes/LandingPage/LandingPage.css';


export default class About extends Component {
  render() {
    return (
      <div className="landingTop">
        <h1 className="landingTitle">About Us</h1>
        <Container>
          <Row>
            <Col>
              <Image className="aboutHeadshot" alt="Vanessa&Shannon" src={headshotblank} roundedCircle />
            </Col>
          </Row>
        </Container>
        <p className="courseDescription">Shanon and Vanessa are natives of Philadelphia, PA. They both have careers in Phlebotomy and over 30 years of experience. 
          Earlier on, Vanessa trained Shanon who was in school studying to be a Medical Laboratory Technologist (MLT) and unsure of which path to take. 
          With the dedication and support from close family, Vanessa was able to teach Shanon the phlebotomy techniques. 
          They both went on to earn certifications as Phlebotomy Instructors and have been best friends for over 30 years! 
          In 2019, when Shanon fell ill –Vanessa encouraged her with the idea and vision Shanon had of starting a Medical Trade School. 
          At the time, she did not have the mental or physical strength to follow-through. After her recovery, 
          Vanessa knew it was the right opportunity to execute their plan. 
          Their attention to detail, knowledge and skill as Phlebotomists has provided them opportunities to work at several area hospitals and laboratories throughout the Philadelphia region. 
          As experienced professionals, they have interesting stories ‘as a day in the life of a phlebotomist.’ 
          Although, it can be daunting at times; it is rewarding.
          This dynamic duo also wear many other hats outside of being Phlebotomists; as mothers, wives, instructors and influencers within their social spectrum. They live and love the mantra of “work hard, play hard.”
          </p>
      </div>
    )
  }
}