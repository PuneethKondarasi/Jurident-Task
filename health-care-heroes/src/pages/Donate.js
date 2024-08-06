import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Donate.css';

const Donate = () => {
  return (
    <Container className="donate-container">
      <h2>Donate to Health Care Heroes</h2>
      <Form>
        <Form.Group controlId="donorName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="donorEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="donationAmount">
          <Form.Label>Donation Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter amount" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" className="donate-submit-button">
          Donate
        </Button>
      </Form>
    </Container>
  );
};

export default Donate;
