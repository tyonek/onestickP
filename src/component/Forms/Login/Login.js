import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../../services/axios';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

function Login(props) {
  const [loginError, setLoginError] = useState({ error: false, errorMessage: "" });
  const [isLoading, setIsLoading] = useState(false);

  const LoginUsers = (email, password) => {
    setIsLoading(true);
    setLoginError({ error: false, errorMessage: "" })
    loginUser({ email, password })
      .then(res => {
         setIsLoading(true);      
        props.setIsLoggedIn(true, res.data.usersInfo[0]);
       

        window.localStorage.setItem('token', res.data?.token)
        window.localStorage.setItem('courses', JSON.stringify (res.data.usersInfo[0].courses))
        props.history.push('/students');
      }).catch(err => {
        setIsLoading(false);
        setLoginError({ error: true, errorMessage: err.response?.data.errorMessage })
      })
  }


  return (
    <div className="loginControl" style={{ height: "60vh" }}>
      <h3>Student Portal </h3>
      <Form onSubmit={(e) => {
        e.preventDefault();
        const { email, password } = e.target;
        LoginUsers(email.value, password.value);
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
        {

          isLoading ? <Spinner animation="border" variant="danger" /> : <Button className="loginButton" variant="danger" type="submit">
            Login
          </Button>
        }

      </Form>
      <div >
        <Link className="forgotPass" to="ForgotPassword">Forgot Password</Link> | <Link className="forgotPass" to="/applynow">Register</Link>
      </div>
    </div>

  )
}

export default withRouter(Login)