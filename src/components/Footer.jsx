import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-5 py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <p>
              <FiMail /> Email: info@graceempowerment.org
            </p>
            <p>
              <FiPhone /> Phone: +255 742 806 974
            </p>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <p>
              <Link to="facebook.com" className="text-white">
                <FiFacebook />
              </Link>{" "}
              <Link to="twitter.com" className="text-white">
                <FiTwitter />
              </Link>{" "}
              <Link
                to="https://www.instagram.com/grace.empowermentfoundation?igsh=NGVhN2U2NjQ0Yg=="
                className="text-white"
              >
                <FiInstagram />
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              &copy; 2023 GRACE EMPOWERMENT FOUNDATION. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
