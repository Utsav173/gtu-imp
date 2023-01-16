import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CustomizedSwitches from "./Themetooglebutton";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
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
            <NavDropdown
              menuVariant={props.mode}
              title="Old Website"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                href="https://adud-paper.vercel.app"
                target="blank"
              >
                ADUD paper
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://var-paper.vercel.app"
                target="blank"
              >
                VAR paper
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://iswa-paper.vercel.app"
                target="blank"
              >
                ISWA paper
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://cv-paper.vercel.app"
                target="blank"
              >
                CV paper
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
