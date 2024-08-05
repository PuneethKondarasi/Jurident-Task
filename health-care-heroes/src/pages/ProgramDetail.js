import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ProgramDetail.css';

const programDetails = {
  // Example program detail
  1: {
    title: 'Health Camp in Rural Area',
    description: 'A comprehensive health camp providing free check-ups and treatments.',
    status: 'Ongoing',
    images: [
      '/images/health-camp1.jpg',
      '/images/health-camp2.jpg',
    ],
    details: 'This health camp provides medical services to underserved areas, including free consultations, medications, and follow-up care.'
  },
  // Add more program details as needed
};

const ProgramDetail = ({ programId }) => {
  const program = programDetails[programId];

  return (
    <Container className="program-detail-container">
      <h2>{program.title}</h2>
      <p>Status: <strong>{program.status}</strong></p>
      <Row>
        <Col md={8}>
          <p>{program.description}</p>
          <p>{program.details}</p>
        </Col>
        <Col md={4}>
          {program.images.map((image, index) => (
            <Card.Img key={index} variant="top" src={image} className="program-image" />
          ))}
        </Col>
      </Row>
      <Button variant="secondary" href="/programs">Back to Programs</Button>
    </Container>
  );
};

export default ProgramDetail;
