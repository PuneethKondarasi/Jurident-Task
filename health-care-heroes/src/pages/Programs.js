import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Programs.css';

const programsData = [
  {
    id: 1,
    title: 'Community Health Program',
    description: 'Providing essential health services to communities.',
    // image: '../images/event1.jpg'
  },
  {
    id: 2,
    title: 'Vaccination Drive',
    description: 'Ensuring community-wide vaccination coverage.',
    // image: '/images/program2.jpg'
  },
  {
    id: 3,
    title: 'Nutritional Support Initiative',
    description: 'Offering nutritional support to populations.',
    // image: '/images/program3.jpg'
  },
  {
    id: 4,
    title: 'Mental Health Outreach',
    description: 'Providing mental health resources and support to communities in need.',
    // image: '/images/program4.jpg'
  }
];

const Programs = () => {
  return (
    <Container className="programs-container">
      <Row>
        {programsData.map(program => (
          <Col md={4} key={program.id} className="mb-4">
            <Card className="program-card">
              {/* <Card.Img variant="top" src={program.image} className="program-img" /> */}
              <Card.Body>
                <Card.Title>{program.title}</Card.Title>
                <Card.Text>{program.description}</Card.Text>
                <Link to={`/programs/${program.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Programs;
