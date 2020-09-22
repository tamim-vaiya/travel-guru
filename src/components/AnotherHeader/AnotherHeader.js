import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './AnotherHeader.css';

const AnotherHeader = () => {
  return (
    <>
      <Navbar >
        <Navbar.Brand >
        <Link to = '/home'><img className="logoStyle1 navbar-section" src={logo} alt="" /></Link>
        </Navbar.Brand>
        <Nav className="mr-auto nav-item navbar-section">
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

export default AnotherHeader;