import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import image1 from "../images/DSC_0011.jpg";
import image2 from "../images/DSC_0018.jpg";

function AboutPage() {
  return (
    <>
      <Container fluid className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} className="mb-4">
            <Card>
              <Card.Title className="text-center">
                About Grace family foundation
              </Card.Title>
              <Card.Img variant="top" src={image2} alt="Card Image" />
              <Card.Body>
                <Card.Text>
                  Some quick description about grace foundation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-1">
        <Row>
          {/* Left column with an image */}
          <Col xs={12} md={6} className="mb-4">
            <Image src={image1} alt="Who We Are Image" fluid />
          </Col>

          {/* Right column with text */}
          <Col xs={12} md={6} className="mb-5 who-we-are-text-container">
            <div className="who-we-are-text">
              <h2>WHO WE ARE</h2>
              <p>
                The Grace Empowerment Foundation is a transformative force,
                transcending mere rhetoric in its pursuit of empowerment. This
                noble endeavor extends beyond words, manifesting in the
                organization's decision to register as a Non-Governmental
                Organization under the Non-Governmental Organizations Act, No.
                24 of 2002, with due consideration for subsequent amendments.{" "}
                <br /> By embracing this legal framework, the foundation is
                unwavering in its commitment to dismantling barriers and
                ensuring that women are not merely observed but actively engaged
                in shaping the fabric of their society. <br /> It aspires to
                cultivate an environment where women can fully realize their
                social, political, and economic potential, aligning with the
                principles of singularity.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
