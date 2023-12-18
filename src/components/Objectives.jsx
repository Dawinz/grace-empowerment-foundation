import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ObjectivesAndImageLayout = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Left Column with Image */}
        <Col md={6}>
          <Image
            src="path-to-your-image.jpg"
            alt="Objective Image"
            fluid
            className="mb-3"
          />
          {/* Replace "path-to-your-image.jpg" with the actual path to your image */}
        </Col>

        {/* Right Column with Objectives */}
        <Col md={6}>
          <h2>Objectives</h2>
          <ol>
            <li>
              Creating awareness to the members of the society and the community
              on issues, practices, and interests that affect youth and women at
              all levels.
            </li>
            <li>Promoting entrepreneurship skills among youth and women.</li>
            <li>
              Promoting gender justice and fostering an inclusive society.
            </li>
            <li>Promoting leadership spirits among youth and women.</li>
            <li>
              Advocating for a national and international agency in promoting
              the rights of youth and women.
            </li>
            <li>
              Creating awareness to youth and women in promoting a healthy
              environment.
            </li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default ObjectivesAndImageLayout;
