import { Image, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import CaretDownFill from 'react-bootstrap-icons/dist/icons/caret-down-fill';
import Search from 'react-bootstrap-icons/dist/icons/search';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className='ps-2 pe-3'>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image
            src="../assets/logo.png"
            width="100"
            height="55"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link href="#" className="font-weight-bold">
              Home <span className="sr-only">(current)</span>
            </Nav.Link>
            <Nav.Link href="#" className="font-weight-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="font-weight-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="font-weight-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="font-weight-bold">
              My List
            </Nav.Link>
          </Nav>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </Navbar.Collapse>
        <div className="d-flex align-items-center m-1">
        
            <a href="#placeholder"><Search className="text-white mx-3"/></a>
            <a href="#placeholder"><img
              src="../assets/kids_icon.png"
              style={{ width: '50px' }}
              alt="Avatar"
            /></a>
            <NavDropdown title={<CaretDownFill className="text-white ms-2"/>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profilepage">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/settings">Settings</NavDropdown.Item>
            </NavDropdown>
            <a href="#placeholder"><i className="bi bi-bell-fill"></i></a>
            <a href="#placeholder">
              <img
                src="../assets/avatar.png"
                style={{ width: '50px' }}
                alt="Avatar"
              />
            </a>
          </div>
      </Container>
    </Navbar>
  );
}
