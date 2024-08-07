import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const blogPosts = [
  {
    id: 1,
    title: 'Enhancing Rural Healthcare: A Successful Health Camp',
    author: 'Dr Rani Bang',
    date: 'August 1, 2024',
    content: `
     <p>Our recent initiative in enhancing rural healthcare through a comprehensive health camp proved to be a significant milestone. This event successfully provided essential medical services to over 500 individuals in underserved communities, addressing various health needs and fostering a healthier environment.</p>
     <p>The health camp offered a range of services, including free medical check-ups, detailed consultations, and crucial health screenings. Our dedicated team of doctors and healthcare professionals engaged with participants to offer personalized advice and support. We also provided educational sessions on preventive healthcare, nutrition, and wellness practices to empower attendees with knowledge that can improve their long-term health.</p>
     <p>One of the highlights of the camp was the integration of mobile health units that allowed us to reach remote areas more effectively. We conducted several outreach programs that extended our services to those who might otherwise have limited access to healthcare. This approach not only increased our reach but also strengthened community trust and engagement.</p>
     <p>The positive feedback from participants underscores the impact of our efforts. Many expressed their gratitude for the opportunity to receive quality medical care and education without the burden of travel or financial costs. The success of this event reaffirms our commitment to improving healthcare access in rural areas and motivates us to continue expanding our outreach.</p>
     <p>We are grateful for the support of our volunteers and partners who made this health camp possible. Together, we are making strides toward a healthier and more equitable future for all.</p>
    `,
    // image: '../images/rural-healthcare.jpg'
  },
  {
    id: 2,
    title: 'Community Health Fair: Bridging the Gap',
    author: 'Meera Mahadevan',
    date: 'July 15, 2024',
    content: `
      <p>Our recent Community Health Fair aimed at bridging the healthcare gap in our city was a tremendous success. This well-organized event drew over 700 participants, providing them with a wide range of free health services and wellness activities, demonstrating our commitment to enhancing community health.</p>
      <p>The fair offered an array of services including free medical screenings, detailed health consultations, and fitness workshops. Attendees benefited from one-on-one consultations with healthcare professionals, where they received personalized advice and support tailored to their health needs. Additionally, we provided educational materials on maintaining a healthy lifestyle and managing chronic conditions.</p>
      <p>One of the highlights of the fair was the fitness workshops that encouraged participants to engage in physical activities and learn about effective exercise routines. These workshops were designed to promote long-term wellness and inspire attendees to adopt healthier habits. For families, we organized special activities for children, ensuring that the event was enjoyable for all age groups.</p>
      <p>The success of this fair highlights the importance of accessible healthcare services and community engagement. By providing these essential services and creating a space for health education, we are working towards closing the gap in healthcare accessibility and improving overall community health.</p>
      <p>We extend our gratitude to the volunteers, sponsors, and healthcare professionals who contributed to the success of the event. Their support and dedication played a crucial role in making this health fair a meaningful and impactful experience for our community.</p>
    `,
    // image: '/images/community-health-fair.jpg'
  },
  {
    id: 3,
    title: 'Nutrition Workshop: A Journey to Healthier Living',
    author: 'Vidya',
    date: 'June 22, 2024',
    content: `
      <p>On June 22, 2024, we hosted an enlightening Nutrition Workshop aimed at guiding individuals towards healthier eating habits. The workshop was an engaging event designed to provide attendees with practical knowledge and skills to enhance their dietary choices and overall wellness.</p>
      <p>Our expert nutritionists delivered insightful lectures on the fundamentals of balanced nutrition, covering essential topics such as the benefits of various food groups, understanding macronutrients and micronutrients, and the impact of nutrition on long-term health. Participants learned how to create well-rounded meal plans that cater to their specific dietary needs and lifestyle preferences.</p>
      <p>A key feature of the workshop was the hands-on cooking demonstrations. Participants observed and participated in preparing nutritious dishes using fresh, wholesome ingredients. These demonstrations highlighted simple yet effective cooking techniques that make healthy eating more accessible and enjoyable. Attendees gained valuable skills in meal prepping and cooking, which they can apply in their everyday lives.</p>
      <p>Personalized nutrition consultations were another highlight of the event. Each participant received tailored advice and guidance on their unique dietary requirements. Our nutritionists worked closely with individuals to develop customized meal plans that addressed their health goals, whether it was weight management, improved energy levels, or better digestive health.</p>
      <p>The workshop also included interactive Q&A sessions, where participants had the opportunity to ask questions and discuss their specific concerns with our experts. This interactive approach helped to address individual queries and provided a platform for sharing tips and strategies for maintaining a healthy diet.</p>
      <p>Feedback from attendees was overwhelmingly positive, with many expressing their newfound motivation to make healthier choices and implement the knowledge gained into their daily routines. The Nutrition Workshop served as a valuable resource for empowering individuals to take control of their health through informed dietary decisions.</p>
      <p>We are grateful to our dedicated team of nutritionists, volunteers, and sponsors for their support in making this workshop a success. Their commitment to promoting better health through education was instrumental in achieving the event's goals and inspiring positive change in our community.</p>
    `,
    // image: '/images/nutrition-workshop.jpg'
  },
  {
    id: 4,
    title: 'Wellness Retreat: Nurturing Mind, Body, and Spirit',
    author: 'Atul Bhide',
    date: 'July 1, 2024',
    content: `
    <p>On July 1, 2024, we hosted our highly anticipated Wellness Retreat, an immersive event designed to nurture the mind, body, and spirit. The retreat was held at the serene Meadowbrook Retreat Center, providing a perfect backdrop for a day of rejuvenation and self-care.</p>
    <p>The Wellness Retreat offered a variety of activities aimed at promoting holistic well-being. Attendees participated in invigorating yoga sessions led by certified instructors, experienced guided meditation to achieve mental clarity, and engaged in interactive workshops focused on stress management and mindfulness practices. Each session was tailored to help participants relax, recharge, and reconnect with their inner selves.</p>
    <p>A key feature of the retreat was the personalized wellness consultations, where experts provided individualized advice on nutrition, fitness, and mental health. Participants had the opportunity to discuss their health goals and receive practical tips to incorporate wellness practices into their daily lives. These consultations aimed to empower attendees with the knowledge and tools to enhance their overall quality of life.</p>
    <p>To complement the activities, the retreat featured a nourishing farm-to-table lunch, showcasing a range of wholesome and delicious dishes prepared with fresh, locally sourced ingredients. The meal was designed to support participants' health while offering a delightful culinary experience that emphasized the importance of balanced nutrition.</p>
    <p>The event also included a variety of relaxation stations, such as massage therapy booths and aromatherapy experiences, allowing participants to indulge in soothing treatments and further enhance their sense of well-being. The tranquil environment and supportive community created a space where individuals could truly unwind and focus on their health and happiness.</p>
    <p>Feedback from attendees was overwhelmingly positive, with many expressing gratitude for the opportunity to participate in such a rejuvenating experience. The Wellness Retreat was praised for its comprehensive approach to wellness and its ability to create a positive, supportive atmosphere for personal growth and self-care.</p>
    <p>We extend our heartfelt thanks to the dedicated team of wellness practitioners, volunteers, and sponsors who made this retreat possible. Their commitment to promoting health and well-being played a crucial role in the success of the event and its positive impact on our community.</p>
    `,
    // image: '/images/charity-run.jpg'
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = blogPosts.find(post => post.id === postId);

  if (!post) {
    console.error(`Blog post with ID ${postId} not found`);
    return <p>Blog post not found</p>;
  }

  return (
    <Container className="blog-post-container">
      <Card className="blog-post-card">
        {/* <Card.Img variant="top" src={post.image} /> */}
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            <small className="text-muted">By {post.author} on {post.date}</small>
          </Card.Text>
          <Card.Text dangerouslySetInnerHTML={{ __html: post.content }} />
          <Link to="/blog">
            <button className="btn btn-secondary">Back to Blog</button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogPost;
