import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaBriefcase, FaHistory, FaTags, FaEnvelope, FaPhone, FaStar } from 'react-icons/fa';
import './AgentProfile.css';

const AgentProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  
  // Mock data - in a real app, you would fetch this based on the agent ID
  const agent = {
    id: id,
    name: "Alisha Anand",
    initials: "AA",
    title: "Commercial Real Estate Expert",
    company: "Hans, Dara and Madan",
    badge: "basic",
    activeListings: 9,
    engagementScore: 8.5,
    rating: 4.8,
    about: "Alisha Anand is a dedicated real estate professional with a focus on helping clients find their perfect property match. With a strong background in the local market, Alisha provides exceptional service and guidance throughout the buying or selling process.",
    location: "Greater Metro Area",
    company: "Hans, Dara and Madan",
    experience: "5+ years in real estate",
    specialties: "Residential, Commercial",
    metrics: {
      responseRate: "95%",
      responseTime: "2 hours",
      transactions: 42
    }
  };

  return (
    <div className="agent-profile-page">
      <section className="agent-profile-header">
        <div className="profile-header-container">
          <div className="agent-avatar-large">{agent.initials}</div>
          <div className="badge-container">
            <span className={`agent-badge badge-${agent.badge}`}>{agent.badge}</span>
          </div>
          <h1 className="agent-name">{agent.name}</h1>
          <p className="agent-title">{agent.title}</p>
          <p className="agent-company">{agent.company}</p>
          
          <div className="agent-stats-band">
            <div className="stat-item">
              <span className="stat-value">{agent.activeListings}</span>
              <span className="stat-label">Active Listings</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{agent.engagementScore}</span>
              <span className="stat-label">Engagement Score</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                {agent.rating} <FaStar style={{ color: '#FFD700', fontSize: '1.25rem', marginLeft: '5px' }} />
              </span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="agent-profile-content">
        <div className="content-container">
          <div className="agent-actions">
            <button className="action-button primary-button">
              <FaEnvelope /> Message
            </button>
            <button className="action-button secondary-button">
              <FaPhone /> Call
            </button>
          </div>
          
          <div className="profile-tabs">
            <div 
              className={`profile-tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </div>
            <div 
              className={`profile-tab ${activeTab === 'properties' ? 'active' : ''}`}
              onClick={() => setActiveTab('properties')}
            >
              Properties
            </div>
            <div 
              className={`profile-tab ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </div>
          </div>
          
          {activeTab === 'about' && (
            <>
              <div className="about-section">
                <h2 className="section-title">About {agent.name}</h2>
                <p className="about-text">{agent.about}</p>
              </div>
              
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-card-header">
                    <div className="info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className="info-title">Location</h3>
                  </div>
                  <div className="info-content">{agent.location}</div>
                </div>
                
                <div className="info-card">
                  <div className="info-card-header">
                    <div className="info-icon">
                      <FaBriefcase />
                    </div>
                    <h3 className="info-title">Company</h3>
                  </div>
                  <div className="info-content">{agent.company}</div>
                </div>
                
                <div className="info-card">
                  <div className="info-card-header">
                    <div className="info-icon">
                      <FaHistory />
                    </div>
                    <h3 className="info-title">Experience</h3>
                  </div>
                  <div className="info-content">{agent.experience}</div>
                </div>
                
                <div className="info-card">
                  <div className="info-card-header">
                    <div className="info-icon">
                      <FaTags />
                    </div>
                    <h3 className="info-title">Specialties</h3>
                  </div>
                  <div className="info-content">{agent.specialties}</div>
                </div>
              </div>
              
              <div className="metrics-section">
                <h2 className="section-title">Performance Metrics</h2>
                <div className="metrics-container">
                  <div className="metric-card">
                    <span className="metric-value">{agent.metrics.responseRate}</span>
                    <span className="metric-label">Response Rate</span>
                  </div>
                  
                  <div className="metric-card">
                    <span className="metric-value">{agent.metrics.responseTime}</span>
                    <span className="metric-label">Avg. Response Time</span>
                  </div>
                  
                  <div className="metric-card">
                    <span className="metric-value">{agent.metrics.transactions}</span>
                    <span className="metric-label">Transactions</span>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'properties' && (
            <div className="properties-section">
              <h2 className="section-title">Listed Properties</h2>
              <p>No properties currently listed.</p>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="reviews-section">
              <h2 className="section-title">Client Reviews</h2>
              <p>No reviews available yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AgentProfile;
