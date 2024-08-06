import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar.js';
import Blog from './pages/Blog';
import Events from './pages/Events';
import BlogPost from './pages/BlogPost';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import GetInvolved from './pages/GetInvolved';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/LandingPage';
import EventDetail from './pages/EventDetail';
import Donate from './pages/Donate';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
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