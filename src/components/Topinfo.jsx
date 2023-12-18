import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const TopNavbarRow = () => {
  return (
    <Container
      fluid
      className="bg-dark text-light pt-5 mt-5 pb-4"
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <Row className="justify-content-between">
        {/* Left side with email and phone number */}
        <Col md={6}>
          <span>Email: info@graceempowerment.org</span>
          <span className="mx-2">|</span>
          <span>Phone: +255 742 806 974</span>
        </Col>

        {/* Right side with social media icons */}
        <Col md={6} className="text-right">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaInstagram size={20} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavbarRow;
