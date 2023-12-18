import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const WhoWeAreComponent = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Left Column with Three Sections */}
        <Col md={6}>
          {/* Section 1 */}
          <div className="mb-4">
            <h3>Section 1</h3>
            <p>Content for Section 1.</p>
          </div>

          {/* Section 2 */}
          <div className="mb-4">
            <h3>Section 2</h3>
            <p>Content for Section 2.</p>
          </div>

          {/* Section 3 */}
          <div>
            <h3>Section 3</h3>
            <p>Content for Section 3.</p>
          </div>
        </Col>

        {/* Right Column with Responsive Image */}
        <Col md={6}>
          <Image src="path-to-your-image.jpg" alt="Responsive Image" fluid />
          {/* Replace "path-to-your-image.jpg" with the actual path to your image */}
        </Col>
      </Row>
    </Container>
  );
};

export default WhoWeAreComponent;
