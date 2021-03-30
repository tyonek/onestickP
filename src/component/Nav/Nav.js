import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap';


export default class NavBar extends Component {

  render() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
      <div>
        <Navbar bg="dark" variant="dark">

          <Navbar.Brand href="/">OneStick</Navbar.Brand>

          <NavDropdown title="Courses" id="nav-dropdown">
            <NavDropdown.Item href="/phlebotomycourse" eventKey="4.1">Phlebotomy</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/paramdeical_examiningcourse" eventKey="4.2">Paramedical Examining+</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/medical_assistantcourse" eventKey="4.3">Medical Assistant+</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ceucourse" eventKey="4.4">CEU (Continuing Education)</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/instructorcourse" eventKey="4.5">Instructor Course</NavDropdown.Item>
          </NavDropdown>

          <Nav className="ml-auto">
            
            <Nav.Item >
              <Nav.Link href="/Login">
                <Button variant="outline-primary">Login</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href="/signup">
                <Button variant="outline-primary">Sign Up</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href="/applynow">
                <Button variant="outline-success">Apply Now</Button>
              </Nav.Link>
            </Nav.Item>
           
         </Nav>
          

         


        </Navbar>
      </div>
    );
  }
}
