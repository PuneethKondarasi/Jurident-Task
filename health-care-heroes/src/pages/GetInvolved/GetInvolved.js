import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import './GetInvolved.css';

const GetInvolved = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    volunteerName: '',
    volunteerEmail: '',
    volunteerPhone: '',
    volunteerMessage: ''
  });

  const handleVolunteerClick = () => {
    setShowVolunteerForm(!showVolunteerForm);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

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
      volunteerName: '',
      volunteerEmail: '',
      volunteerPhone: '',
      volunteerMessage: ''
    });
  };

  return (
    <Container className="get-involved-container">
      <h2>Get Involved</h2>
      <Row>
        <Col md={6}>
          <h3>Volunteer with Us</h3>
          <p>
            Join our team of dedicated volunteers and make a real difference in the community. Whether you want to assist in our health camps or support our administrative tasks, we welcome your help.
          </p>
          <Button variant="primary" onClick={handleVolunteerClick}>
            {showVolunteerForm ? 'Hide Volunteer Form' : 'Show Volunteer Form'}
          </Button>
          {showVolunteerForm && (
            <div className="volunteer-form">
              <h4>Volunteer Information</h4>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="volunteerName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={formData.volunteerName}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="volunteerEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={formData.volunteerEmail}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="volunteerPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    value={formData.volunteerPhone}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter your phone number.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="volunteerMessage">
                  <Form.Label>Why Do You Want to Volunteer?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Tell us about your motivation"
                    value={formData.volunteerMessage}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please tell us your motivation.</Form.Control.Feedback>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          )}
        </Col>
        <Col md={6}>
          <h3>Make a Donation</h3>
          <p>
            Your donations help us provide critical healthcare services to those in need. With your support, we can expand our programs and reach more people.
          </p>
          <div className="donation-options">
            <h4>Donation Impact</h4>
            <ul>
              <li><strong>₹1000</strong> provides basic health check-ups for one person.</li>
              <li><strong>₹10000</strong> covers the cost of vaccinations for ten children.</li>
              <li><strong>₹100000</strong> supports a full health camp in a remote area.</li>
            </ul>
            <br />
            <Button variant="secondary" href="/donate">Donate Now</Button>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your interest in volunteering!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GetInvolved;
