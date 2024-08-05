import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './GetInvolved.css';

const GetInvolved = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const handleVolunteerClick = () => {
    setShowVolunteerForm(!showVolunteerForm);
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
              <Form>
                <Form.Group controlId="volunteerName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="volunteerEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="volunteerPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group controlId="volunteerMessage">
                  <Form.Label>Why Do You Want to Volunteer?</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Tell us about your motivation" />
                </Form.Group>
                <br />
                <div class="button"><Button variant="primary" type="submit">
                  Submit
                </Button></div>
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
              <li><strong>$50</strong> provides basic health check-ups for one person.</li>
              <li><strong>$100</strong> covers the cost of vaccinations for ten children.</li>
              <li><strong>$500</strong> supports a full health camp in a remote area.</li>
            </ul>
            <Button variant="secondary" href="/donate">Donate Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInvolved;
