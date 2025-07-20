import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaStar } from 'react-icons/fa';
import { addNotification } from '../data/notifications';
import '../Styles/AgentCard.css';


function AgentCard({ agent }) {
  const { id, name, initials, title, company, badge, engagement, listings, rating = 4.8 } = agent;
  
  const handleContactAgent = (type) => {
    addNotification('agent_contacted', {
      agentName: name,
      agentId: id
    });
    
    if (type === 'email') {
      // Open email client with pre-filled information
      const subject = `Inquiry about your real estate services`;
      const body = `Hello ${name},\n\nI found your profile on TrustChain and I'm interested in learning more about your real estate services.\n\nBest regards`;
      const mailtoLink = `mailto:${name.toLowerCase().replace(' ', '.')}@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    } else if (type === 'phone') {
      // Open phone dialer (works on mobile devices)
      const phoneNumber = '+1-555-0123'; // You would get this from agent data
      window.location.href = `tel:${phoneNumber}`;
    }
  };
  
  return (
    <div className="agent-card" style={{backgroundColor:"white"}}>
      <div className="agent-avatar" style={{backgroundColor: agent.bgColor || '#1a2b50'}}>{initials}</div>
      <span className={`badge ${badge.toLowerCase()}`} style={{color:"white"}}>{badge}</span>
      <h3>{name}</h3>
      <p className="agent-title">{title}</p>
      <p className="agent-company">{company}</p>
      
      <div className="agent-stats">
        <div className="stat" >
          <span className="stat-value" style={{color:"#253651"}}>{engagement}</span>
          <span className="stat-label" style={{color:"#19284B"}}>Engagement</span>
        </div>
        <div className="stat">
          <span className="stat-value" style={{color:"#253651"}}>{listings}</span>
          <span className="stat-label" style={{color:"#19284B"}}>Listings</span>
        </div>
        <div className="stat">
          <span className="stat-value" style={{color:"#253651"}}>
            {rating}
            <FaStar className="rating-star" />
          </span>
          <span className="stat-label" style={{color:"#19284B"}}>Rating</span>
        </div>
      </div>
      
      <div className="agent-actions">
        <button 
          className="contact-button primary"
          onClick={() => handleContactAgent('email')}
          title="Send email to agent"
        >
          <FaEnvelope /> Message
        </button>
        <button 
          className="contact-button secondary" 
          style={{color: '#1a2b50', backgroundColor: '#f0f0f0'}}
          onClick={() => handleContactAgent('phone')}
          title="Call agent"
        >
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