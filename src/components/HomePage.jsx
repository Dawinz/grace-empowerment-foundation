import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { GiCrystalGrowth, GiSightDisabled } from "react-icons/gi";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/DSC_0004.jpg";
import image2 from "../images/DSC_0011.jpg";
import image3 from "../images/DSC_0018.jpg";
import Teamphoto from "../images/DSC_0036.jpg";

function DarkVariantExample() {
  const cardTextExcerpt =
    "The Grace Empowerment Foundation is a transformative force, transcending mere rhetoric in its pursuit of empowerment.";
  const teamInfo = {
    teamDescription:
      "Meet our dedicated team of professionals who work tirelessly to empower communities and make a positive impact.",
  };

  return (
    <>
      <Carousel data-bs-theme="white" className="mb-2">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row>
          {/* Vision Card */}
          <Col md={6} className="mb-4">
            <Card className="gradient-card">
              <Card.Body>
                <Card.Title className="mb-4">
                  <GiCrystalGrowth size={40} className="mr-3" />
                  Vision
                </Card.Title>
                <Card.Text>
                  To empower African women and youth, unlocking their potential
                  for proactive influence on economic and social development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Mission Card */}
          <Col md={6} className="mb-4">
            <Card className="gradient-card">
              <Card.Body>
                <Card.Title className="mb-4">
                  <GiSightDisabled size={40} className="mr-3" />
                  Mission
                </Card.Title>
                <Card.Text>
                  By utilizing skills, knowledge, and resources, we aim to
                  unlock the power and agency within youth and women for their
                  future prospects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="mb-4">
            <Card className="who-we-are-card">
              <Card.Body>
                <Card.Title>WHO WE ARE:</Card.Title>
                <Card.Text>
                  {cardTextExcerpt}{" "}
                  <Link to="/about">Learn more about us...</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          {/* Left column with team description */}
          <Col md={6} className="mt-3 mt-md-0">
            <h2>Our Team</h2>
            <p>{teamInfo.teamDescription}</p>
          </Col>
          {/* Right column with team photo */}
          <Col md={6}>
            <Image src={Teamphoto} alt="Team Photo" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DarkVariantExample;
