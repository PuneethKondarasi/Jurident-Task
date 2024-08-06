import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AboutUs.css';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sravani & Dr. Supriya',
    role: 'Founder & CEO',
    bio: 'Dr. Sravani and Dr. Supriya bring over a decade of invaluable experience to our healthcare team, each embodying a profound commitment to enhancing health services in underserved communities.',
  },
  {
    id: 2,
    name: 'Puneeth',
    role: 'Program Director',
    bio: 'Puneeth manages our outreach programs with exceptional skill and passion.With a deep-rooted commitment to community health and development, he plays a pivotal role in improving public well-being.',
  },
];

const AboutUs = () => {
  return (
    <Container className="about-us">
      <section className="mission-section">
        <h1>Who We Are</h1>
        <p>Health Care Heroes is committed to providing essential health services to underserved communities. Our mission is to bridge the gap in healthcare access and improve the quality of life for those in need.</p>
      </section>

      <section className="vision-section">
        <h2>What Guides Us</h2>
        <p>Our values are rooted in compassion, integrity, and excellence. We believe in transparency and accountability, ensuring that every effort is focused on delivering impactful healthcare solutions.</p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <Row>
          {teamMembers.map(member => (
            <Col md={4} key={member.id} className="mb-4">
              <Card className="team-card">
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>Founded in 2010, Health Care Heroes has been at the forefront of delivering healthcare to those who need it most. Our journey is marked by numerous milestones, including our expansion into rural areas and successful health campaigns.</p>
      </section>

      <section className="health-camps-section">
        <h2>Our Health Camps</h2>
        <p>We organize regular health camps to provide free medical check-ups, consultations, and health education. These camps are an integral part of our efforts to reach out to underserved populations and offer essential healthcare services.</p>
      </section>

      <section className="get-involved-section">
        <h2>How You Can Help Us</h2>
        <p>Your support is vital to our mission. You can contribute by volunteering, making a donation, or spreading the word about our work. Every bit helps us in our endeavor to provide quality healthcare to those in need.</p>
        <Button variant="primary" href="/get-involved">Get Involved</Button>
      </section>
    </Container>
  );
};

export default AboutUs;
