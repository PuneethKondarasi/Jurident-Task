import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const NavbarComponent = () => {
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/" className="logo">Health Care Heroes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-links">
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/programs">Programs</Nav.Link>
                <Nav.Link as={Link} to="/get-involved">Get Involved</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
};

export default NavbarComponent;