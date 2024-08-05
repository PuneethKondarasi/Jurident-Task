import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs'; // Import the Programs page
import GetInvolved from './pages/GetInvolved'; // Import GetInvolved page
import ContactUs from './pages/ContactUs'; // Import ContactUs page
import ProgramDetail from './pages/ProgramDetail';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:programId" element={<ProgramDetail />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    
  );
}

export default App;



// import Blog from './pages/Blog.js';
// import Programs from './pages/Programs';
// import GetInvolved from './pages/GetInvolved';
// import ContactUs from './pages/ContactUs';

// const App = () => {
//   return (
//     <Router>
//       <NavbarComponent />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/programs" element={<Programs />} />
//         <Route path="/get-involved" element={<GetInvolved />} />
//         <Route path="/contact" element={<ContactUs />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
