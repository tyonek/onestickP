import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function Signup(props) {
  const states = 
  ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", 
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
  const [firstName,setFirstName]= useState('');
  const [lastName, setLastName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfrimPassword] = ('');
  const [address, setAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emailError, setEmailError] = useState({ error: false, errorMessage: '' });
  const [passwordError, setpasswordError] = useState({ error: false, errorMessage: '' });
  //const [addressErrror,setEmailError] = useState({error:false,errorMessage:''});

  const emailVaildation = (email) => {
    let emailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || email === '') {
      setEmailError({ error: true, errorMessage: "Please Enter Email Address" })
    }
    if (!emailFormate.test(String(email).toLowerCase())) {
      setEmailError({ error: true, errorMessage: "Please Enter A Valid Email Address" })
    }
    else {
      setEmailError({ error: false, errorMessage: "" });
    }
  }

  const passwordVaildation = (password) => {
    if (!password || password === '') {
      passwordError({ error: true, errorMessage: "Please Enter password Address" })
    }
    if (password !== confirmPassword) {
      passwordError({ error: true, errorMessage: "Password Did not Match" })
    }
  }



  return (
    <div>
      <Form className="container" onSubmit={()=>{
        const studentInfo = {
          Name: `${firstName} ${lastName} `
        }

        props.getStudentInfo()
      }}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridConfirm Password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>SSN</Form.Label>
          <Form.Control placeholder="###-##-####" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              { states.map((state,i)=>{
                return<option key={i}>{state}</option>
              })}
           
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>

        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmergencyContact">
            <Form.Label>Emergency Contact</Form.Label>
            <Form.Control placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmergencyContact">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="Phone #" />
          </Form.Group>


        </Form.Row>

        <Button variant="primary" type="submit" disabled="true">
          Submit
          </Button>
      </Form>

    </div>

  )
}

