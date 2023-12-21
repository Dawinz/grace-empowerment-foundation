import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ProjectsPage.css"; // Import your CSS file for styling

const projects = [
  {
    title: "Project 1",
    location: "City A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nunc euismod, nec tincidunt risus gravida.",
    image: "/images/DSC_0004.jpg",
  },
  {
    title: "Project 2",
    location: "City B",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nunc euismod, nec tincidunt risus gravida.",
    image: "../images/DSC_0022.jpg",
  },
  {
    title: "Project 3",
    location: "City C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nunc euismod, nec tincidunt risus gravida.",
    image: "../images/DSC_0018.jpg",
  },
  {
    title: "Project 4",
    location: "City D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nunc euismod, nec tincidunt risus gravida.",
    image: "../images/DSC_0011.jpg",
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <Container fluid className="my-5 projects-page-container">
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="project-card">
              <Card.Img
                variant="top"
                src={project.image}
                alt={`Project Image ${index + 1}`}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {project.location} <br />
                  <strong>Description:</strong> {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
