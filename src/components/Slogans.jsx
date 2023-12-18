import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const SlogansCardsSection = () => {
  return (
    <Container className="my-5">
      <Row xs={1} sm={2} md={2} lg={4}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Description for Card 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Description for Card 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>Description for Card 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>Description for Card 4.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SlogansCardsSection;
