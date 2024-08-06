import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const eventsData = [
  {
    id: 1,
    title: 'Health Camp: Your Path to Wellness',
    date: '11-08-2024',
    time: '09:00 AM - 11:00 AM',
    description: 'Join us for a comprehensive health camp offering free check-ups, consultations, and wellness advice. Our team of experienced doctors and healthcare professionals will be on hand to provide guidance and support to ensure you and your family stay healthy.',
    image: '/images/event1.jpg'
  },
  {
    id: 2,
    title: 'Workshop on Nutrition',
    date: '14-08-2024',
    time: '1:00 PM - 4:00 PM',
    description: 'Discover the secrets to a healthier lifestyle at our Workshop on Nutrition. This engaging session will cover essential topics such as balanced diets, meal planning, and practical tips for maintaining optimal health. Our experts will share valuable insights and answer your questions.',
    image: '/images/event2.jpg'
  },
  {
    id: 3,
    title: 'Free Vaccination Drive',
    date: '18-08-2024',
    time: '9:00 AM - 4:00 PM',
    description: 'Join us at our Free Vaccination Drive to protect yourself and your loved ones from preventable diseases. This event will provide a wide range of vaccinations, including flu shots and essential immunizations for all age groups to ensure community health and safety.',
    image: '/images/event5.jpg'
  },
  {
    id: 4,
    title: 'Mental Health Awareness Seminar',
    date: '24-08-2024',
    time: '10:00 AM - 12:00 PM',
    description: 'Join our seminar focused on mental health awareness. We will discuss strategies for managing stress, improving mental well-being, and breaking the stigma around mental health issues.',
    image: '/images/event4.jpg'
  },
  {
    id: 5,
    title: 'Charity Run for Health',
    date: '31-08-2024',
    time: '6:00 AM - 8:00 AM',
    description: 'Participate in our Charity Run to support health initiatives in our community. The event includes a 5K run and a 2K walk. All proceeds will go towards funding our health programs.',
    image: '/images/event3.jpg'
  }
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Health Care Heroes</h1>
          <p>Igniting Change Across Communities with Compassionate Care and Unwavering Dedication</p>
          <p>Step Up and Be Part of Our Mission, Let's Create a Brighter Future Together</p>
        </div>
      </div>
      <Container className="core-values-section">
        <Row>
          <Col md={4}>
            <div className="value-card">
              <h3>Our Mission</h3>
              <p>At Health Care Heroes, our mission is to provide essential health services to underserved communities. We are committed to bridging healthcare gaps, promoting well-being, and fostering a more equitable world through high-quality care, education, and support. Our goal is to inspire positive change and transform lives for the better.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="value-card">
              <h3>Our Vision</h3>
              <p>We envision a world where every individual has access to quality healthcare. Our goal is to create a future where health disparities are eliminated, and everyone receives the care they need to lead a healthy, fulfilling life. Through innovation, collaboration, and unwavering commitment, we aim to build a global community where quality health services are a universal right, not a privilege.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="value-card">
              <h3>Our Achievements</h3>
              <p>We are proud to have positively impacted over 10,000 lives through our dedicated health programs and initiatives. This milestone reflects our commitment to improving health outcomes and demonstrates the tangible difference our efforts make in communities. Every success story and every life touched represents a step toward a healthier, more equitable world.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="events-section">
        <h2>Upcoming Events & Workshops</h2>
        <Row>
          {eventsData.slice(0, 3).map(event => (
            <Col md={4} key={event.id}>
              <Card className="event-card">
                {/* <Card.Img variant="top" src={event.image} /> */}
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.date} | {event.time}</Card.Text>
                  <Card.Text>{event.description}</Card.Text>
                  <Link to={`/events/${event.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/events">
            <Button variant="outline-light">See All Events</Button>
          </Link>
        </div>
      </Container>
      <div className="donation-section">
        <div className="donation-content">
          <h2>Support Our Cause</h2>
          <p>Your donations help us provide essential health services to those in need.</p>
          <Link to="/donate">
            <Button variant="primary" className="donate-button">Donate Now ❤️</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
