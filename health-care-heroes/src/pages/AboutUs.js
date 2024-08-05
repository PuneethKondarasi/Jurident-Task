import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './AboutUs.css';

const AboutUs = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showDonateForm, setShowDonateForm] = useState(false);

  const handleVolunteerClick = () => {
    setShowVolunteerForm(true);
    setShowDonateForm(false);
  };

  const handleDonateClick = () => {
    setShowDonateForm(true);
    setShowVolunteerForm(false);
  };

  return (
    <Container className="about-us-container">
      {/* Other Sections */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Health Care Heroes is a dedicated NGO committed to providing quality healthcare to underserved communities. Our team of professionals works tirelessly to ensure that everyone has access to the medical services they need.
        </p>
        <img src="/images/who-we-are.jpg" alt="Who We Are" className="about-us-image" />
      </section>

      <section className="what-guides-us">
        <h2>What Guides Us</h2>
        <p>
          Our work is guided by our core values of compassion, integrity, excellence, collaboration, and innovation. These principles shape everything we do and drive us to continually improve our services.
        </p>
        <img src="/images/what-guides-us.jpg" alt="What Guides Us" className="about-us-image" />
      </section>

      <section className="our-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where everyone has access to the healthcare they need to live a healthy, fulfilling life. Our vision is to be a leader in health equity, providing innovative solutions and high-quality care to all.
        </p>
        <img src="/images/our-vision.jpg" alt="Our Vision" className="about-us-image" />
      </section>

      <section className="health-camps">
        <h2>Our Health Camps</h2>
        <p>
          We organize regular health camps to bring essential medical services directly to the communities that need them most. These camps provide free check-ups, vaccinations, and health education to hundreds of people each year.
        </p>
        <img src="/images/health-camps.jpg" alt="Health Camps" className="about-us-image" />
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Health Care Heroes was founded in 2010 with the goal of providing healthcare to those who need it most. Over the past decade, we have grown from a small clinic to a network of healthcare providers serving multiple communities. Here are some of our milestones:
        </p>
        <ul>
          <li>2010: Founded and opened our first clinic.</li>
          <li>2012: Expanded services to include dental care.</li>
          <li>2015: Launched our mobile clinic program.</li>
          <li>2018: Reached 10,000 patients served.</li>
          <li>2020: Opened our fifth clinic location.</li>
        </ul>
      </section>

      {/* How You Can Help Us Section */}
      <section className="how-to-help">
        <h2>How You Can Help Us</h2>
        <p>
          There are many ways you can support Health Care Heroes in our mission. You can volunteer at our clinics or donate to support our programs. Your contributions make a significant difference in the lives of those we serve.
        </p>
        <div className="help-buttons">
          <Button variant="primary" onClick={handleVolunteerClick}>Volunteer</Button>
          <Button variant="secondary" onClick={handleDonateClick}>Donate</Button>
        </div>
        <CSSTransition
          in={showVolunteerForm}
          timeout={300}
          classNames="form-transition"
          unmountOnExit
        >
          <div className="volunteer-form">
            <h3>Become a Volunteer</h3>
            <Form>
              <Form.Group controlId="volunteerName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="volunteerEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="volunteerMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Why do you want to volunteer?" />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </div>
        </CSSTransition>
        <CSSTransition
          in={showDonateForm}
          timeout={300}
          classNames="form-transition"
          unmountOnExit
        >
          <div className="donate-form">
            <h3>Make a Donation</h3>
            <Form>
              <Form.Group controlId="donateName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="donateEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="donateAmount">
                <Form.Label>Donation Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter donation amount" />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">Donate</Button>
            </Form>
          </div>
        </CSSTransition>
      </section>
    </Container>
  );
};

export default AboutUs;
