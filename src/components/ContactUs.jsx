import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        {/* Left Column with Contact Form */}
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

        {/* Right Column with Google Map (Replace with your actual map embed code) */}
        <Col md={6}>
          <div
            style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
          >
            {/* Replace the following URL with your actual Google Map embed code */}
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.544046665581!2d-122.08424918441677!3d37.422171303371544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808641b1fa23%3A0xf87a5988e67a3a25!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1617968129981!5m2!1sen!2sus"
              allowFullScreen=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
