import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './routes/Home';
import Services from './routes/Services';
import About from './routes/About';
import PastEvents from './routes/PastEvents';
import Upcomming from './routes/Upcomming';
import Contact from './routes/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar /><br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/pastevents" element={<PastEvents />} />
        <Route path="/upcomming" element={<Upcomming />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
