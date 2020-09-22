import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar >
        <Navbar.Brand >
          <Link to = '/home'><img className="logoStyle navbar-section" src={logo} alt="" /></Link>
        </Navbar.Brand>
        <Nav className="mr-auto nav-item navbar-section">
          <Form inline>
            <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2 searchBox" />
            
          </Form>
          <Link className="link-item" to="/comingSoon">News</Link>
          <Link className="link-item" to="/SearchPage">Destination</Link>
          <Link className="link-item" to="/comingSoon">Blog</Link>
          <Link className="link-item" to="/comingSoon">Contact</Link>
        </Nav>
        <Nav className="ml-auto navbar-section">
            <Link to='/login'><button className="loginBtn ">Login</button></Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;