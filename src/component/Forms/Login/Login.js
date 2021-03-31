import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import {loginUser} from '../../../services/axios'

import { Link } from 'react-router-dom';

 function Login(props) {
  const [loginError,setLoginError]= useState({error:false,errorMessage:""});
  
  const LoginUsers= (email,password)=>{
    loginUser({email,password}).then(res=>{
      window.sessionStorage('token',res.data.token)
      props.history.push('/students/account');
    }).catch(err=>setLoginError({error:true,errorMessage:err.response.data.errorMessage || "Oops Something Went Wrong"}))
  }


    return (
      <div>
        <Form onSubmit ={(e)=>{
          e.preventDefault();
          const {email,password}= e.target;
          LoginUsers(email.value,password.value);
        }}>
        <Form.Row>
           {loginError.error && <Form.Label className="text-danger p-2">{loginError.errorMessage}</Form.Label>}
        </Form.Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <div>
          <Link to="ForgotPassword">Forgot Password</Link>
        </div> 
      </div>

    )
  }

export default withRouter(Login)