import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>About Us</h2>
          {/* Content about the foundation */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
