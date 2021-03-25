import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, NavDropdown} from 'react-bootstrap';

export default class NavBar extends Component {

	render() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

		return (
			<div>
				<Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
        <Link to="/">
		  	One Stick
				</Link>
        </Nav.Link>
      </Nav.Item>

      <NavDropdown title="Courses" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Phlebotomy</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.2">Paramedical Examining+</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.3">Medical Assistant+</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">CEU (Continuing Education)</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.5">Instructor Course</NavDropdown.Item>
      </NavDropdown>

      <Nav.Item>
        <Nav.Link eventKey="3" >
        <Link to="/Login">
				<Button variant="info">Apply Now</Button>{' '}
				</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
			</div>
		);
	}
}
