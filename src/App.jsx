import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PropertyListing from './components/PropertyListing/PropertyListing';
import PropertyDetail from './components/PropertyDetail/PropertyDetail';
import Agents from './components/Agents/Agents';
import Notifications from './components/Notifications/Notifications'; // Add this import
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/notifications" element={<Notifications />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;