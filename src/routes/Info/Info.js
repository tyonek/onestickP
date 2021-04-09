import React, { useState } from 'react';
import { Form, Button, Col, Spinner } from 'react-bootstrap';
import '../Info/Info.css';

export default function Info(props) {
  const courses =
    ["Phlebotomy", "Medical Assistant+", "Paramedical+", "CEU", "Instuctor Course"]
  return (
    <div className="signupControl">
      <Form className="container pt-5 pb-5 px-4">
      <Form.Label>Full Name</Form.Label>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Control className="signupInput" type="text" placeholder="First Name" />
        </Form.Group>
        </Form.Row>
        
        <Form.Row>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Control className="signupInput" type="text" placeholder="Last Name"/>
        </Form.Group>
        </Form.Row>

    
        <Form.Row>
          <Form.Label className="text-danger"></Form.Label>
        </Form.Row>

        <Form.Label>Email Address</Form.Label>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-danger"></Form.Label>
            <Form.Control className="signupInput" type="email" placeholder="Email" />
          </Form.Group>
        </Form.Row>

        <Form.Label>Phone Number</Form.Label>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridPhoneNo">
        <Form.Control className="signupInput" name="phoneNumber" type="text" placeholder="( ### ) ###-####"/>
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="formCourse">
          <Form.Label>Course Desired</Form.Label>
          <Form.Control className="courseInput" name="course" placeholder="course" as="select" defaultValue="Select Course...">
            <option value={null} disabled>Select Course...</option>
            {courses.map((course, i) => {
              return <option key={i} value={course}>{course}</option>
            })}
          </Form.Control>
        </Form.Group>




        <Form.Label className="text-danger"></Form.Label>
        <Form.Row>
          <Button className="signupButton w-50" variant="danger" type="submit" >
            Submit
        </Button>
          {props.isLoading && <Spinner animation="border" variant="primary" />}
        </Form.Row>

      </Form>
    </div>
  )
}

