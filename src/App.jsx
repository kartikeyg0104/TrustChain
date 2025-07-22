import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import PropertyListing from './Page/Property_Listing';
import PropertyDetail from './Page/Property_Detail';
import Agents from './Page/Agents';
import AgentProfile from './Page/AgentProfile';
import Notifications from './Page/Notifications';
import Navbar from './Page/Navbar';
import Footer from './Page/Footer'; // Make sure this import uses the new Footer
import ScrollToTop from './Page/ScrollToTop';
import SignUp from './Page/SignUp';
import Login from './Page/Login';
import Profile from './Page/Profile';
import './App.css';


function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || location.pathname === '/signup';

  return (
    <>
      <ScrollToTop />
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path ="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/listings" element={<Navigate to="/properties" replace />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<AgentProfile />} /> 
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;