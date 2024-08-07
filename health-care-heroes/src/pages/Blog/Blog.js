import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Enhancing Rural Healthcare: A Successful Health Camp',
    author: 'Dr Rani Bang',
    date: 'August 1, 2024',
    excerpt: 'Our recent initiative in enhancing rural healthcare through a comprehensive health camp proved to be a significant milestone. This event successfully provided essential medical services to over 500 individuals in underserved communities, addressing and fostering a healthier environment.',
    // image: '../images/rural-healthcare.jpg'
  },
  {
    id: 2,
    title: 'Community Health Fair: Bridging the Gap',
    author: 'Meera Mahadevan',
    date: 'July 15, 2024',
    excerpt: 'Our recent Community Health Fair aimed at bridging the healthcare gap in our city was a tremendous success. This well-organized event drew over 700 participants, providing them with a wide range of free health services and wellness activities, demonstrating our commitment to enhancing community health.',
    // image: '/images/community-health-fair.jpg'
  },
  {
    id: 3,
    title: 'Nutrition Workshop: A Journey to Healthier Living',
    author: 'Vidya',
    date: 'June 22, 2024',
    excerpt: 'On June 22, 2024, we hosted an enlightening Nutrition Workshop aimed at guiding individuals towards healthier eating habits. The workshop was an engaging event designed to provide attendees with practical knowledge and skills to enhance their dietary choices and overall wellness.',
    // image: '/images/nutrition-workshop.jpg'
  },
  {
    id: 4,
    title: 'Wellness Retreat: Nurturing Mind, Body, and Spirit',
    author: 'Atul Bhide',
    date: 'July 1, 2024',
    excerpt: 'On August 10, 2024, we hosted our highly anticipated Wellness Retreat, an immersive event designed to nurture the mind, body, and spirit. The retreat was held at the serene Meadowbrook Retreat Center, providing a perfect backdrop for a day of rejuvenation and self-care.',
    // image: '/images/charity-run.jpg'
  }
];

const Blog = () => {
  return (
    <Container className="blog-container">
      <div className="heading">
        <h1 className="text-center">Blogs</h1>
      </div>
      <Row>
        {blogPosts.map(post => (
          <Col md={4} key={post.id} className="mb-4">
            <Card className="blog-card">
              {/* <Card.Img variant="top" src={post.image} /> */}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <small className="text-muted">By {post.author} on {post.date}</small>
                </Card.Text>
                <Card.Text>{post.excerpt}</Card.Text>
                <Link to={`/blog/${post.id}`}>
                  <button className="btn btn-primary">Read More</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
