import React, { useState } from 'react';
import { Form, Button, Col, Row, Spinner } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function Signup(props) {
  const states =
    ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emailError, setEmailError] = useState({ error: false, errorMessage: '' });
  const [passwordError, setpasswordError] = useState({ error: false, errorMessage: '' });
  const [confirmPasswordError, setConfirmPasswordError] = useState({ error: false, errorMessage: '' });
  const [phoneNumberError, setPhoneNumberError] = useState({ error: false, errorMessage: '' });
  const [FormError, setFormError] = useState({ error: false, errorMessage: "" });
  //const [addressErrror,setEmailError] = useState({error:false,errorMessage:''});

  const emailValidation = (email) => {
    let emailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!email || email === '') {
      setEmailError({ error: true, errorMessage: "Please Enter Email Address" })
      return;
    }
    if (!emailFormate.test(String(email).toLowerCase())) {
      setEmailError({ error: true, errorMessage: "Please Enter A Valid Email Address" })
      return;
    }
    else {
      setEmailError({ error: false, errorMessage: "" });
      return;
    }
  }

  const passwordValidation = (password) => {

    if (!password || password === '') {
      setpasswordError({ error: true, errorMessage: "Please Enter password Address" })
      return;
    }

    else {
      setpasswordError({ error: false, errorMessage: "" });
      return;
    }
  }

  const confirmPasswordValidation = (confirmPassword) => {
    if (!confirmPassword || confirmPassword === '') {
      setConfirmPasswordError({ error: true, errorMessage: "Please Confirm Password" })
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError({ error: true, errorMessage: "Password didn't Match" })
    }
    else {
      setConfirmPasswordError({ error: false, errorMessage: "" })
    }
  }

  const phoneNumberValidation = (phone) => {
    const phoneNumberFormat = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!phoneNumber || phoneNumber === '') {
      setPhoneNumberError({ error: true, errorMessage: "Please Enter a Phone Number" })
      return;
    }
    if (!phoneNumberFormat.test(phone)) {
      setPhoneNumberError({ error: true, errorMessage: "Please Enter a Valid Phone Number" })
      return;
    }
    else {
      setPhoneNumberError({ error: false, errorMessage: "" })
    }
  }






  return (
    <div>
      <Form className="container pt-5 pb-5 px-4" onSubmit={(e) => {
        e.preventDefault();
        const { streetAddress, apt, city, state, zipCode, emergencyContact, emergencyContactPhone, SSN } = e.target
        const studentInfo = {
          name: `${firstName} ${lastName}`,
          email,
          password,
          phoneNumber,
          address: {
            streetAddress: `${streetAddress.value} ${apt.value}`,
            state: state.value,
            zipCode: zipCode.value,
            city: city.value
          },
          SSN: SSN.value,
          emergencyContact: [{ emergencyContact: emergencyContact.value, emergencyContactPhone: emergencyContactPhone.value }]

        }
        if (!emailError.error && !passwordError.error && !confirmPasswordError.error && email && password) {
          setFormError({ error: false, errorMessage: "" })
          props.getStudentInfo(studentInfo);
        }
        else {
          setFormError({ error: true, errorMessage: "Please complete the form correctly" })
        };

      }}>
      <Form.Row>
      {props.error.error && <Form.Label className="text-danger">{props.error.errorMessage}</Form.Label>}
      </Form.Row>
        <Form.Label>Full Name</Form.Label>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Control type="text" placeholder="First Name" onChange={e => {
              setFirstName(e.target.value)
            }} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">

            <Form.Control type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            {emailError.error && <Form.Label className="text-danger">{emailError.errorMessage}</Form.Label>}

            <Form.Control type="email" placeholder="Email" onBlur={(e) => {
              emailValidation(e.target.value)

            }} onChange={e => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            {passwordError.error && <Form.Label className="text-danger">{passwordError.errorMessage}</Form.Label>}
            <Form.Control type="password" placeholder="Password" onBlur={(e) => {
              passwordValidation(e.target.value)

            }} onChange={e => setPassword(e.target.value)} />
          </Form.Group>

        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridConfirm Password">
            {confirmPasswordError.error && <Form.Label className="text-danger">{confirmPasswordError.errorMessage}</Form.Label>}

            <Form.Control type="password" placeholder="Confirm Password" onBlur={(e) => {
              confirmPasswordValidation(e.target.value)

            }} onChange={e => setConfirmPassword(e.target.value)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>

          <Form.Group as={Col} controlId="formGridPhoneNo">

            <Form.Control name="phoneNumber" type="text" placeholder="000-000-0000" onChange={e => setPhoneNumber(e.target.value)} />
          </Form.Group>
        </Form.Row>

        <Form.Label>Address</Form.Label>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Control name="streetAddress" placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress2">

            <Form.Control name="apt" placeholder="Apartment, studio, or floor" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">

            <Form.Control name="city" placeholder="City" />
          </Form.Group>

        </Form.Row>
        <Form.Row>


          <Form.Group as={Col} controlId="formGridState">
            
            <Form.Control name="state" as="select" defaultValue="Choose...">
              <option value={null}>State...</option>
              {states.map((state, i) => {
                return <option key={i} value={state}>{state}</option>
              })}

            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            
            <Form.Control name="zipCode" placeholder="Zip Code"/>
          </Form.Group>

        </Form.Row>



        <Form.Group controlId="formGridAddress2">
          <Form.Label>SSN</Form.Label>
          <Form.Control name="SSN" placeholder="###-##-####" />
        </Form.Group>



        <Form.Label>Emergency Contact</Form.Label>
        <Form.Row>

          <Form.Group as={Col} controlId="formGridEmergencyContact">

            <Form.Control name="emergencyContact" placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmergencyContact">

            <Form.Control name="emergencyContactPhone" placeholder="Phone #" />
          </Form.Group>


        </Form.Row>
        {FormError.error && <Form.Label className="text-danger">{FormError.errorMessage}</Form.Label>}
        <Form.Row>
          {!props.isLoading && <Button variant="primary" type="submit" >
            Submit
          </Button>}
          {props.isLoading && <Spinner animation="border" variant="primary" /> }
        </Form.Row>

      </Form>

    </div>

  )
}

