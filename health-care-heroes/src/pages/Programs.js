import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Programs.css';

const programsData = [
  // Example program data
  {
    id: 1,
    title: 'Health Camp in Rural Area',
    description: 'A comprehensive health camp providing free check-ups and treatments.',
    status: 'Ongoing',
    image: '/images/health-camp.jpg',
    category: 'Health'
  },
  {
    id: 2,
    title: 'Vaccination Drive for Children',
    description: 'Vaccination program aimed at providing essential vaccines to children.',
    status: 'Completed',
    image: '/images/vaccination-drive.jpg',
    category: 'Education'
  },
  // Add more programs as needed
];

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPrograms = selectedCategory === 'All'
    ? programsData
    : programsData.filter(program => program.category === selectedCategory);

  return (
    <Container className="programs-container">
      <h2>Our Programs</h2>
      <Form.Group controlId="categoryFilter">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
          <option>All</option>
          <option>Health</option>
          <option>Education</option>
          <option>Community</option>
          {/* Add more categories as needed */}
        </Form.Control>
      </Form.Group>
      <Row>
        {filteredPrograms.map(program => (
          <Col md={4} key={program.id}>
            <Card className="program-card">
              <Card.Img variant="top" src={program.image} />
              <Card.Body>
                <Card.Title>{program.title}</Card.Title>
                <Card.Text>{program.description}</Card.Text>
                <Button variant="primary" href={`/programs/${program.id}`}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Programs;
