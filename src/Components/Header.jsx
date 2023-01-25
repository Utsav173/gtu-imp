import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CustomizedSwitches from "./Themetooglebutton";

const Header = (props) => {
  return (
    <Navbar className={`navbar-custom-${props.mode}`} variant={`${props.mode}`} expand="lg">
      <Container>
        <Navbar.Brand to="/">7th Sem IMP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/download" className="nav-link">
              Download
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
            <NavDropdown
              menuVariant={props.mode}
              title="Old Website"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item 
                href="https://7-it-paper.vercel.app/adud-paper/"
                target="blank"
              >
                ADUD paper
              </NavDropdown.Item>
              <NavDropdown.Item 
                href="https://7-it-paper.vercel.app/var-paper/"
                target="blank"
              >
                VAR paper
              </NavDropdown.Item>
              <NavDropdown.Item 
                href="https://7-it-paper.vercel.app/iswa-paper/"
                target="blank"
              >
                ISWA paper
              </NavDropdown.Item>
              <NavDropdown.Item 
                href="https://7-it-paper.vercel.app/cv-paper/"
                target="blank"
              >
                CV paper
              </NavDropdown.Item>
              <NavDropdown.Item 
                href="https://7-it-paper.vercel.app/iot-paper/"
                target="blank"
              >
                IOT paper
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CustomizedSwitches mode={props.mode} togglemode={props.togglemode} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
