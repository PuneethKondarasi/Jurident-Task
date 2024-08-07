import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EventDetail.css';

const eventsData = [
  {
    id: 1,
    title: 'Health Camp: Your Path to Wellness',
    date: '11-08-2024',
    time: '09:00 AM - 11:00 AM',
    description: 'Join us for a comprehensive health camp offering free check-ups, consultations, and wellness advice. Our team of experienced doctors and healthcare professionals will be on hand to provide guidance and support to ensure you and your family stay healthy.',
    // image: '../images/event1.jpg',
    location: 'Anna Salai, (Near Old Bus Stand),Vellore',
  },
  {
    id: 2,
    title: 'Workshop on Nutrition',
    date: '14-08-2024',
    time: '1:00 PM - 4:00 PM',
    description: 'Discover the secrets to a healthier lifestyle at our Workshop on Nutrition. This engaging session will cover essential topics such as balanced diets, meal planning, and practical tips for maintaining optimal health. Our experts will share valuable insights and answer your questions.',
    // image: '/images/event2.jpg',
    location: 'Kasam,Katpadi, Vellore',
  },
  {
    id: 3,
    title: 'Free Vaccination Drive',
    date: '18-08-2024',
    time: '9:00 AM - 4:00 PM',
    description: 'Join us at our Free Vaccination Drive to protect yourself and your loved ones from preventable diseases. This event will provide a wide range of vaccinations, including flu shots and essential immunizations for all age groups to ensure community health and safety.',
    // image: '/images/event5.jpg',
    location: 'Health Center,  Sathuvachari, Vellore',
  },
  {
    id: 4,
    title: 'Mental Health Awareness Seminar',
    date: '24-08-2024',
    time: '10:00 AM - 12:00 PM',
    description: 'Join our seminar focused on mental health awareness. We will discuss strategies for managing stress, improving mental well-being, and breaking the stigma around mental health issues.',
    // image: '/images/event4.jpg',
    location: 'Conference Hall, VIT Vellore',
  },
  {
    id: 5,
    title: 'Charity Run for Health',
    date: '31-08-2024',
    time: '6:00 AM - 8:00 AM',
    description: 'Participate in our Charity Run to support health initiatives in our community. The event includes a 5K run and a 2K walk. All proceeds will go towards funding our health programs.',
    // image: '/images/event3.jpg',
    location: 'Green Circle, Vellore',
  }
];

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventsData.find(e => e.id === parseInt(eventId));

  if (!event) return <p>Event not found</p>;

  return (
    <Container className="event-detail-container">
      <Card className="event-detail-card">
        {/* <Card.Img variant="top" src={event.image} className="event-detail-img" /> */}
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>
            <strong>Date:</strong> {event.date}
            <br />
            <strong>Time:</strong> {event.time}
            <br />
            <strong>Location:</strong> {event.location}
          </Card.Text>
          <Card.Text>{event.description}</Card.Text>
          <Row className="mt-4">
            <Col>
              <Link to="/events">
                <Button variant="secondary" className="back-button">Back to Events</Button>
              </Link>
            </Col>  
            <Col className="text-end">
              <Link to="/">
                <Button variant="light" className="home-button">Back to Home</Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetail;
