import React from "react";
import "./index.css";
import { FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dotHealthLogo from "../assets/dothealth-logo.svg";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <img
              alt="Welcome To dotHealth"
              src={dotHealthLogo}
              height="40"
              className="d-inline-block align-top"
            />
            <p className="small text-muted mt-3">
              © 2021 dotHealth LLC.
              <br /> All Rights Reserved.
            </p>
          </Col>
          <Col>
            <h5>.health Domains</h5>
            <ul className="footer-list">
              <li>
                <a href="https://get.health">Home</a>
              </li>
              <li>
                <a href="https://get.health">About</a>
              </li>
              <li>
                <a href="https://get.health">News & Events</a>
              </li>
              <li>
                <a href="https://get.health">Case Studies</a>
              </li>
              <li>
                <a href="https://get.health">Research</a>
              </li>
              <li>
                <a href="https://get.health">Launch Timeline</a>
              </li>
              <li>
                <a href="https://get.health">Blog</a>
              </li>
              <li>
                <a href="https://get.health">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Tools & More</h5>
            <ul className="footer-list">
              <li>
                <a href="https://get.health">Accredited Registrars</a>
              </li>
              <li>
                <a href="https://get.health">WHOIS Lookup</a>
              </li>
              <li>
                <a href="https://get.health">Documentation & Policies</a>
              </li>
              <li>
                <a href="https://get.health">Registrar Portal</a>
              </li>
              <li>
                <a href="https://get.health">Report Abuse</a>
              </li>
              <li>
                <a href="https://get.health">Privacy Policy</a>
              </li>
              <li>
                <a href="https://get.health">Terms of Use</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Keep in Touch</h5>
            <ul className="footer-social">
              <li>
                <a href="https://get.health">
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a href="https://get.health">
                  <FiLinkedin />
                </a>
              </li>
              <li>
                <a href="https://get.health">
                  <FiMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
