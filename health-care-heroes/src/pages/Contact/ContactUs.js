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
            <strong>Address:</strong> 123 Health Street, Vellore, India
          </p>
          <p>
            <strong>Phone:</strong> +91 1234567890
          </p>
          <p>
            <strong>Email:</strong> contact@healthcareheroes.org
          </p>
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.615504795611!2d79.1315568153179!3d12.93566769087905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad473b7c5e6cb3%3A0x4e25b7e7e089e9a3!2sVellore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1691546949187!5m2!1sen!2sus"
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
