import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <Container className="contact-us-container">
      <h2>Contact Us</h2>
      <Row>
        <Col md={6}>
          <h3>Get in Touch</h3>
          <Form>
            <Form.Group controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="contactEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Contact Details</h3>
          <p>
            <strong>Address:</strong> 123 Health Street, Wellness City, HC 45678
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email:</strong> contact@healthcareheroes.org
          </p>
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509368!2d-122.41941568468175!3d37.77492977975854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581fbff7e83b3%3A0x8b623e3e5b7b9776!2s123%20Health%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1628352340980!5m2!1sen!2sin"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
