import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (

     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">7th Sem IMP</Navbar.Brand>
          <Nav className="me-auto">
             <Link to="/" className='nav-link'>Home</Link>
            <Link to="/download" className='nav-link'>Download</Link>
            <Link to="/about" className='nav-link'>About</Link>
          </Nav>
        </Container>
      </Navbar> 
     
  )
}

export default Header