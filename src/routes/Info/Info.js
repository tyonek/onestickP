import React, { useState } from 'react';
import { Form, Button, Col, Spinner } from 'react-bootstrap';
import '../Info/Info.css';
import oneStickBanner from '../../assets/photos/oneStickBanner.jpg';
import InfoBottom from './InfoBottom';
import onesticklogo2 from '../../assets/photos/onesticklogo2.png'

export default function Info(props) {
  const courses =
    ["Phlebotomy", "Medical Assistant+", "Paramedical+", "CEU", "Instuctor Course"]
  return (
    <div>
      <div className="infoControl">
        <img className="banner" src={oneStickBanner}></img>
        <h1 className="infoTitle">Get Information About Our Online Certification Course</h1>
        <img className="banner2" src={oneStickBanner}></img>
        <p className="infoReq">If you have your high school diploma or GED, and you're looking to start a career as a Certified Phlebotomy Technician, Medical Assistant, Paramedic, or a Certified Phlebotomy Instructor fill out the form to get information on enrollment into our courses!</p>
        <div className="infoLine">
          <img className="logo2" src={onesticklogo2}></img>
          <Form className="container1 pt-5 pb-5 px-4">
            <Form.Label></Form.Label>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Control className="infoInput" type="text" placeholder="First Name" required/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Control className="infoInput" type="text" placeholder="Last Name" required/>
              </Form.Group>
            </Form.Row>

            <Form.Label></Form.Label>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control className="infoInput" type="email" placeholder="Email" required/>
              </Form.Group>
            </Form.Row>

            <Form.Label></Form.Label>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhoneNo">
                <Form.Control className="infoInput" name="phoneNumber" type="text" placeholder="Phone Number" required/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formCourse">
              <Form.Label></Form.Label>
              <Form.Control className="infoInput" name="course" placeholder="course" as="select" defaultValue="Select Course...">
                <option value={null} disabled>Course Desired...</option>
                {courses.map((course, i) => {
                  return <option key={i} value={course}>{course}</option>
                })}
              </Form.Control>
            </Form.Group>
            <Form.Label className="text-danger"></Form.Label>
            <Form.Row>
              <Button className="infoButton w-50" variant="danger" type="submit" >
                Get Enrollment Information
        </Button>
              {props.isLoading && <Spinner animation="border" variant="primary" />}
            </Form.Row>
          </Form>
        </div>
      </div>
      <InfoBottom />
    </div>
  )
}

