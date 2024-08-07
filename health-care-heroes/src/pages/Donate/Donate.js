import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import './Donate.css';

const Donate = () => {
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    donorName: '',
    donorEmail: '',
    donationAmount: ''
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setShowModal(true);
    }

    setValidated(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setValidated(false);
    setFormData({
      donorName: '',
      donorEmail: '',
      donationAmount: ''
    });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <Container className="donate-container">
      <h2>Donate to Health Care Heroes</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="donorName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={formData.donorName}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="donorEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={formData.donorEmail}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="donationAmount">
          <Form.Label>Donation Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={formData.donationAmount}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">Please enter a donation amount.</Form.Control.Feedback>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" className="donate-submit-button">
          Donate
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donation Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your generous donation!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Donate;
