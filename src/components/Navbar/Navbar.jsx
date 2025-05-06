import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">TC</span>
        <span className="logo-text">TrustChain</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">Listings</Link></li>
        <li><Link to="/agents">Agents</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-actions">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="notification-icon">
          <span className="dot"></span>
        </div>
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;