import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Card,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../images/logo.jpg";
import icon from "../images/favicon.ico";


const About = () => {
  return (
    <div>
      <div className="navcolor">
        <Navbar expand="lg">
        <Navbar.Brand ><Nav.Link className="club" href="/">Health & Wellness Club</Nav.Link></Navbar.Brand>
          <img src={icon} alt=""></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Disease Prediction" id="basic-nav-dropdown">
                
                <NavDropdown.Item href="/Heart">Heart Disease</NavDropdown.Item>
               
                <NavDropdown.Item href="/Diabetes">Diabetes</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Healthy">Healthy Living</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="about">
        <p>
          <img className="logo" src={logo} alt="logo" />
          Over sixty percent of our health is determined by social needs like
          access to food, jobs, childcare, and housing. Right now, the way
          healthcare organizations address these problems is broken. We believe there is more to health than healthcare and we’re
          fundamentally rethinking how healthcare organizations and communities
          work together to help people thrive. We came up with the solution that
          everyone should be able to keep a check on his/her health
          We know how a disease inflicts pain to a human body, which is why we
          work so hard to get accurate predictions and support you. As a team we
          have blended the ingredients of a great user experience and a swift
          prediction system which might help save lives.During the pandemic it
          was observed that patients suffering from coronary diseases couldn't
          visit the hospitals due to various reasons.
        </p>
      </div>
      
    </div>
  );
};

export default About;
