import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CustomizedSwitches from './Themetooglebutton';




const Header = (props) => {
  return (

     <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">7th Sem IMP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Link to="/" className='nav-link'>Home</Link>
            <Link to="/download" className='nav-link'>Download</Link>
            <Link to="/about" className='nav-link'>About</Link>
          </Nav>
          <CustomizedSwitches mode={props.mode} togglemode={props.togglemode}/>
          </Navbar.Collapse>
          
        </Container>
      </Navbar> 
     
  )
}

export default Header