import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PropertyListing from './components/Property_Listing/Property_Listing';
import PropertyDetail from './components/Property_Detail/Property_Detail';
import Agents from './components/Agents/Agents';
import AgentProfile from './components/AgentProfile/AgentProfile';
import Notifications from './components/Notifications/Notifications';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/listings" element={<Navigate to="/properties" replace />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<AgentProfile />} /> 
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;