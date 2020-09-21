import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar  >
        <Navbar.Brand href="#home">
          <img className="logoStyle" src={logo} alt=""/>
        </Navbar.Brand>
        <Nav className="mr-auto">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 searchBox" />
        </Form>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;