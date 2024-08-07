import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/About/AboutUs.js';
import Blog from './pages/Blog/Blog.js';
import BlogPost from './pages/Blog/BlogPost.js';
import ContactUs from './pages/Contact/ContactUs.js';
import Events from './pages/Event/Events.js';
import EventDetail from './pages/Event/EventDetail.js';
import NavBar from './pages/NavBar/NavBar.js';
import Programs from './pages/Program/Programs.js';
import ProgramDetail from './pages/Program/ProgramDetail.js';
import GetInvolved from './pages/GetInvolved/GetInvolved.js';
import LandingPage from './pages/Landing/LandingPage.js';
import Donate from './pages/Donate/Donate.js';
import Footer from './pages/Footer/Footer.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:programId" element={<ProgramDetail />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;