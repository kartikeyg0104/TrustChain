import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaStar } from 'react-icons/fa';
import '../Styles/AgentCard.css';


function AgentCard({ agent }) {
  const { id, name, initials, title, company, badge, engagement, listings, rating = 4.8 } = agent;
  
  return (
    <div className="agent-card" style={{backgroundColor:"white"}}>
      <div className="agent-avatar" style={{backgroundColor: agent.bgColor || '#1a2b50'}}>{initials}</div>
      <span className={`badge ${badge.toLowerCase()}`}>{badge}</span>
      <h3>{name}</h3>
      <p className="agent-title">{title}</p>
      <p className="agent-company">{company}</p>
      
      <div className="agent-stats">
        <div className="stat">
          <span className="stat-value">{engagement}</span>
          <span className="stat-label">Engagement</span>
        </div>
        <div className="stat">
          <span className="stat-value">{listings}</span>
          <span className="stat-label">Listings</span>
        </div>
        <div className="stat">
          <span className="stat-value">
            {rating}
            <FaStar className="rating-star" />
          </span>
          <span className="stat-label">Rating</span>
        </div>
      </div>
      
      <div className="agent-actions">
        <button className="contact-button primary">
          <FaEnvelope /> Message
        </button>
        <button className="contact-button secondary" style={{color: '#1a2b50', backgroundColor: '#f0f0f0'}}>
          <FaPhoneAlt /> Call
        </button>
      </div>
      
      <Link to={`/agents/${id}`} className="view-profile-link">
        View Full Profile
      </Link>
    </div>
  );
}

export default AgentCard;