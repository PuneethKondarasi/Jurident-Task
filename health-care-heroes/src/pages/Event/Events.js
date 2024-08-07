import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Events.css';

const eventsData = [
  {
    id: 1,
    title: 'Health Camp in City Park',
    date: '2023-09-15',
    time: '10:00 AM - 2:00 PM',
    description: 'Join us for a comprehensive health camp offering free check-ups, consultations, and wellness advice. Our team of experienced doctors and healthcare professionals will be on hand to provide guidance and support to ensure you and your family stay healthy.',
    // image: '../images/event1.jpg',
    location: 'City Park, Downtown',
  },
  {
    id: 2,
    title: 'Workshop on Nutrition',
    date: '2023-10-05',
    time: '1:00 PM - 4:00 PM',
    description: 'Discover the secrets to a healthier lifestyle at our Workshop on Nutrition. This engaging session will cover essential topics such as balanced diets, meal planning, and practical tips for maintaining optimal health. Our experts will share valuable insights and answer your questions to help you make informed decisions about your nutrition.',
    // image: '/images/event2.jpg',
    location: 'Community Center, Main Hall',
  },
  {
    id: 3,
    title: 'Charity Run for Health',
    date: '2023-11-10',
    time: '8:00 AM - 12:00 PM',
    description: 'Participate in our Charity Run to support health initiatives in our community. The event includes a 5K run and a 2K walk. All proceeds will go towards funding our health programs.',
    // image: '/images/event3.jpg',
    location: 'Central Park, East Entrance',
  },
  {
    id: 4,
    title: 'Mental Health Awareness Seminar',
    date: '2023-11-20',
    time: '2:00 PM - 5:00 PM',
    description: 'Join our seminar focused on mental health awareness. We will discuss strategies for managing stress, improving mental well-being, and breaking the stigma around mental health issues.',
    // image: '/images/event4.jpg',
    location: 'Downtown Library, Conference Room',
  },
  {
    id: 5,
    title: 'Free Vaccination Drive',
    date: '2023-12-01',
    time: '9:00 AM - 3:00 PM',
    description: 'Get your vaccinations at our free vaccination drive. We will offer various vaccines, including flu shots and other essential immunizations, to ensure community health and safety.',
    // image: '/images/event5.jpg',
    location: 'Health Center, Main Hall',
  }
];

const Events = () => {
  return (
    <Container className="events-page">
      <h1 className="events-title">Upcoming Events</h1>
      <div className="events-list">
        {eventsData.map(event => (
          <Card key={event.id} className="event-card">
            {/* <Card.Img variant="top" src={event.image} className="event-img" /> */}
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>{event.date} | {event.time}</Card.Text>
              <Card.Text>{event.description}</Card.Text>
              <Link to={`/events/${event.id}`}>
                <Button variant="primary" className="details-button">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Events;
