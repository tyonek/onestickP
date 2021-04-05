import React, { Component } from 'react';
import { Form, Button, Col,Spinner } from 'react-bootstrap';
import '../../../routes/LandingPage/LandingPage.css'
import {contactUs} from '../../../services/axios'
import ContactusModal from './ContactusModal';
export default class Contact extends Component {
state = {
  isLoading:false,
  showModal:false
}
setIsLoading = () =>{
  this.setState({isLoading:!this.state.isLoading})
}
setShowModal = ()=>{
  this.setState({showModal:!this.state.showModal})
}
  render() {
    return (
      <main>
      <div className="contactControl">
        <h1 className="landingTitle h1">Contact Us</h1>
        <h2 className="landingMotto h2">Hours: Wednesday 6pm-9pm | Saturday 9am-1pm | EST </h2>
        <p className="messageDescription">Please fill out and submit the Contact Us form and one of our 
        Student Services Representatives will contact you shortly (usually within 24 hours, or next business day).</p>
        <Form onSubmit={(e)=>{
          e.preventDefault();
            const { email, phoneNumber,message} = e.target;
            this.setIsLoading();
          contactUs({email:email.value,phoneNumber:phoneNumber.value,message:message.value}).then((res)=>{
            this.setIsLoading();
            this.setShowModal();
            }
          ).catch(err=>{
            this.setIsLoading();
            console.log(err)});
        }}>
          <Form.Row>
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="contactInput" type="email" placeholder="Email" name="email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
                <Form.Control className="contactInput" placeholder="( ### ) ###-#### " name="phoneNumber" />
          </Form.Group>
          </Form.Row>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control className="contactInput" as="textarea" placeholder="Message..." rows={4}  name="message"/>
          </Form.Group>
        { this.state.isLoading ?
          <Spinner animation="border" variant="danger" />
          :
           <Button className="contactButton" variant="danger" type="submit">
            Send Message
          </Button>
          
          }
        </Form>

<ContactusModal showModal={this.state.showModal} setShowModal={this.setShowModal}/>

      </div>
      </main>
    )
  }
}