import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>Contact Information</h2>
          <p>
            <strong>GRACE EMPOWERMENT FOUNDATION</strong>
            <br />
            ENGOSENGIU Street, nearby Edmundrice Sinon Secondary School, SINON
            ward, Arusha District, Arusha Region
            <br />
            P.O.BOX 7131
            <br />
            Email: info@graceempowerment.org
            <br />
            Phone: +255 742 806 974
          </p>
        </Col>

        <Col md={6}>
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
