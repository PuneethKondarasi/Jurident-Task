import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProgramDetail.css';

const programsData = [
  {
    id: 1,
    title: 'Community Health Program',
    description: 'Providing essential health services to communities.',
    // image: '../images/event1.jpg',
    details: `
      <p>Our Community Health Program is dedicated to delivering vital health services to communities in need. This program aims to address a wide range of health issues by offering free medical check-ups, preventive screenings, and health education workshops.</p>
      <p>We partner with local healthcare providers to deliver comprehensive care, focusing on both immediate medical needs and long-term health improvement. Our team works tirelessly to ensure that no one is left without the support they need to maintain their health.</p>
      <p>Join us in making a difference by participating in our community health outreach efforts. Together, we can build healthier, more resilient communities.</p>
      <p>Services offered:</p>
      <ul>
        <li>Free medical check-ups</li>
        <li>Preventive health screenings</li>
        <li>Health education workshops</li>
        <li>Access to healthcare resources</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: 'Vaccination Drive',
    description: 'Ensuring community-wide vaccination coverage.',
    // image: '/images/program2.jpg',
    details: `
      <p>The Vaccination Drive is a crucial initiative aimed at ensuring widespread vaccination coverage in our community. This program focuses on providing free vaccines to individuals of all ages, including essential vaccines such as flu shots, tetanus, and more.</p>
      <p>Our drive is designed to increase vaccination rates, protect public health, and prevent the spread of infectious diseases. We set up vaccination stations in accessible locations to make it easier for everyone to get vaccinated.</p>
      <p>By participating in our Vaccination Drive, you contribute to the overall health and safety of our community. Help us achieve greater immunization coverage and protect those who are most vulnerable.</p>
      <p>Vaccines offered:</p>
      <ul>
        <li>Flu shots</li>
        <li>Tetanus vaccines</li>
        <li>Childhood vaccines</li>
        <li>Travel vaccines</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: 'Nutritional Support Initiative',
    description: 'Offering nutritional support and education to underserved populations.',
    // image: '/images/program3.jpg',
    details: `
      <p>The Nutritional Support Initiative aims to improve the dietary habits and overall health of underserved populations. Through this program, we offer free nutritional counseling, distribute healthy food packages, and conduct educational workshops on balanced diets and meal planning.</p>
      <p>Our goal is to address food insecurity and promote better eating habits by providing resources and knowledge that empower individuals to make healthier food choices. We collaborate with nutritionists and dietitians to deliver tailored support to those in need.</p>
      <p>Support our efforts to combat malnutrition and enhance the well-being of our community members by participating in or contributing to this vital program.</p>
      <p>Services offered:</p>
      <ul>
        <li>Nutritional counseling</li>
        <li>Healthy food packages</li>
        <li>Nutrition workshops</li>
        <li>Meal planning resources</li>
      </ul>
      `,
  },
  {
    id: 4,
    title: 'Mental Health Outreach',
    description: 'Providing mental health resources and support to communities in need.',
    // image: '/images/program4.jpg',
    details: `
      <p>The Mental Health Outreach program is dedicated to addressing mental health challenges within our community. We provide a range of services including counseling sessions, mental health workshops, and support groups.</p>
      <p>Our initiative focuses on breaking the stigma associated with mental health issues and providing accessible resources to individuals who may be struggling. We work with mental health professionals to offer comprehensive support and guidance.</p>
      <p>Participate in our Mental Health Outreach program to help foster a supportive environment where mental health is prioritized, and everyone has access to the help they need.</p>
      <p>Services offered:</p>
      <ul>
        <li>Counseling sessions</li>
        <li>Mental health workshops</li>
        <li>Support groups</li>
        <li>Referrals to mental health professionals</li>
      </ul>
    `,
  }
];

const ProgramDetail = () => {
  const { programId } = useParams();
  const program = programsData.find(p => p.id === parseInt(programId));

  if (!program) return <p>Program not found</p>;

  return (
    <Container className="program-detail-container">
      <Card className="program-detail-card">
        {/* <Card.Img variant="top" src={program.image} className="program-detail-img" /> */}
        <Card.Body>
          <Card.Title>{program.title}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{ __html: program.details }} />
          <Link to="/programs">
            <Button variant="secondary" className="back-button">Back to Programs</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProgramDetail;
