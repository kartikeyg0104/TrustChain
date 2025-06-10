import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaStar, FaCheckCircle, FaMapMarkerAlt, FaBuilding, FaUserCheck } from 'react-icons/fa';
import PropertyCard from '../Cards/PropertyCard/PropertyCard';
import { topAgents } from '../../data/agents';
import { getPropertiesByAgent } from '../../data/properties';
import './AgentProfile.css';

function AgentProfile() {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);
  const [agentProperties, setAgentProperties] = useState([]);
  const [activeTab, setActiveTab] = useState('about');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the agent by ID
    const foundAgent = topAgents.find(agent => agent.id === parseInt(id));
    
    if (foundAgent) {
      setAgent(foundAgent);
      
      // Get properties associated with this agent
      const properties = getPropertiesByAgent(id, 6);
      setAgentProperties(properties);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="loading-container">Loading agent profile...</div>;
  }

  if (!agent) {
    return <div className="error-container">Agent not found</div>;
  }

  return (
    <div className="agent-profile-page">
      <div className="agent-profile-header">
        <div className="container">
          <div className="agent-profile-banner">
            <div className="agent-info-card">
              <div className="agent-avatar-container">
                <div className="agent-avatar">{agent.initials}</div>
                <div className={`badge-large ${agent.badge.toLowerCase()}`}>{agent.badge}</div>
              </div>
              
              <div className="agent-details">
                <h1>{agent.name}</h1>
                <p className="agent-title">{agent.title}</p>
                <p className="agent-company">{agent.company}</p>
                
                <div className="agent-stats">
                  <div className="stat">
                    <span className="stat-value">{agent.listings}</span>
                    <span className="stat-label">Active Listings</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{agent.engagement}</span>
                    <span className="stat-label">Engagement Score</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{agent.rating}</span>
                    <span className="stat-label">Rating</span>
                  </div>
                </div>
                
                <div className="agent-contact-buttons">
                  <button className="contact-button primary">
                    <FaEnvelope /> Message
                  </button>
                  <button className="contact-button secondary">
                    <FaPhoneAlt /> Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="agent-profile-content">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button 
              className={`tab ${activeTab === 'properties' ? 'active' : ''}`}
              onClick={() => setActiveTab('properties')}
            >
              Properties
            </button>
            <button 
              className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'about' && (
              <div className="about-tab">
                <div className="agent-profile-section">
                  <h2>About {agent.name}</h2>
                  <p className="agent-bio">
                    {agent.bio || `${agent.name} is a dedicated real estate professional with a focus on helping clients find their perfect property match. With a strong background in the local market, ${agent.name.split(' ')[0]} provides exceptional service and guidance throughout the buying or selling process.`}
                  </p>
                  
                  <div className="agent-details-grid">
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <div>
                        <h3>Location</h3>
                        <p>{agent.location || "Greater Metro Area"}</p>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <FaBuilding className="detail-icon" />
                      <div>
                        <h3>Company</h3>
                        <p>{agent.company}</p>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <FaUserCheck className="detail-icon" />
                      <div>
                        <h3>Experience</h3>
                        <p>{agent.experience || "5+ years"} in real estate</p>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <FaCheckCircle className="detail-icon" />
                      <div>
                        <h3>Specialties</h3>
                        <p>{agent.specialties?.join(', ') || "Residential, Commercial"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="agent-profile-section">
                  <h2>Performance Metrics</h2>
                  <div className="performance-metrics">
                    <div className="metric-card">
                      <div className="metric-value">{agent.performance?.response_rate || "95%"}</div>
                      <div className="metric-label">Response Rate</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">{agent.performance?.avg_response_time || "2 hours"}</div>
                      <div className="metric-label">Avg. Response Time</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">{agent.performance?.transactions_completed || "42"}</div>
                      <div className="metric-label">Transactions</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'properties' && (
              <div className="properties-tab">
                <h2>{agent.name}'s Active Listings</h2>
                {agentProperties.length === 0 ? (
                  <p className="no-properties">No active listings found for this agent.</p>
                ) : (
                  <div className="agent-properties-grid">
                    {agentProperties.map(property => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="reviews-tab">
                <h2>Client Reviews</h2>
                <div className="reviews-summary">
                  <div className="rating-big">
                    <span>{agent.rating}</span>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(agent.rating) ? 'star filled' : 'star'} />
                      ))}
                    </div>
                    <p className="review-count">Based on {agent.reviewCount || "24"} reviews</p>
                  </div>
                </div>
                
                <div className="reviews-list">
                  {(agent.reviews || [
                    {
                      id: 1,
                      author: "Sarah Johnson",
                      rating: 5,
                      date: "2 months ago",
                      comment: "Working with this agent was a fantastic experience. Very professional and responsive throughout the entire process."
                    },
                    {
                      id: 2,
                      author: "Michael Chang",
                      rating: 4,
                      date: "3 months ago",
                      comment: "Knowledgeable about the local market and provided great insights. Would recommend to friends and family."
                    },
                    {
                      id: 3,
                      author: "Emma Rodriguez",
                      rating: 5,
                      date: "4 months ago",
                      comment: "Made our first home buying experience smooth and stress-free. Excellent communication and negotiation skills!"
                    }
                  ]).map(review => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <span className="review-author">{review.author}</span>
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? 'star filled' : 'star'} />
                          ))}
                        </div>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <p className="review-comment">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentProfile;