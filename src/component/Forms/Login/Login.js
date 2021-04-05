import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {loginUser} from '../../../services/axios';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

 function Login(props) {
  const [loginError,setLoginError]= useState({error:false,errorMessage:""});
  
  const LoginUsers= (email,password)=>{
    setLoginError({error:false,errorMessage:""})
    loginUser({email,password})
    .then(res=>{      
     window.localStorage.setItem('token',res.data?.token)
      props.history.push('/students');
    }).catch(err=>setLoginError({error:true,errorMessage:err.response?.data.errorMessage}))
  }


    return (
      <div className="loginControl" style={{height:"60vh"}}>
        <h3>Student Portal </h3>
        <Form onSubmit ={(e)=>{
          e.preventDefault();
          const {email,password}= e.target;
          LoginUsers(email.value,password.value);
        }}>
        <Form.Row>
           {loginError.error && <Form.Label className="text-danger p-2">{loginError.errorMessage}</Form.Label>}
        </Form.Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control className="inputStyle" type="email" name="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control className="inputStyle" type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button  className="loginButton" variant="danger" type="submit">
            Login
          </Button>
        </Form>
        <div >
          <Link className="forgotPass" to="ForgotPassword">Forgot Password</Link> | <Link className="forgotPass" to="/applynow">Register</Link>
        </div> 
      </div>

    )
  }

export default withRouter(Login)