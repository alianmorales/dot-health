import React from "react";
import "./index.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import dotHealthLogo from "../assets/dothealth-logo.svg";

export default function SiteNavBar() {
  return (
    <nav className="nav">
      <Container>
        <Navbar expand="lg">
          <Navbar>
            <Navbar.Brand href="#home">
              <img
                alt="Welcome To dotHealth"
                src={dotHealthLogo}
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">News & Events</Nav.Link>
              <Nav.Link href="#home">Case Studies</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Button className="ml-3" variant="outline-primary">
                Get a .health
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </nav>
  );
}
