import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactUsPage = () => {
  return (
    <>
      <Container fluid className="my-5">
        <Row className="justify-content-center">
          {/* Physical Address Card */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Physical Address</Card.Title>
                <Card.Text>
                  Head Office Address: ENGOSENGIU street, nearby Edmundrice
                  Sinon Secondary School, SINON ward, Arusha District, Arusha
                  Region, Tanzania. hP.O. Box: P.O.BOX 7131, Arusha, Tanzania.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Office Hours Card */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Office Hours</Card.Title>
                <Card.Text>Monday - Friday: 9 AM - 5 PM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Contact Us Card */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  Email: info@graceempowerment.org
                  <br />
                  Phone: +255 742 806 974
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
              style={{
                width: "100%",
                height: "400px",
                border: "1px solid #ccc",
              }}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.544046665581!2d36.6874333!3d-3.4145183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM0JzA1LjEiUyAzNiwzN6YyMy43IlC4MyMzRiIuMCJF!5e0!3m2!1sen!2sus!4v1617968129981!5m2!1sen!2sus"
                allowFullScreen=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUsPage;
