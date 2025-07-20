import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShare, FaExternalLinkAlt } from 'react-icons/fa';
import { featuredProperties } from '../data/properties';
import { addNotification } from '../data/notifications';
import '../Styles/Property_Detail.css';

function Property_Detail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    // In a real app, you'd fetch from API using the ID
    // For now, we'll use the local data
    const propertyData = featuredProperties.find(p => p.id === parseInt(id));
    
    if (propertyData) {
      setProperty(propertyData);
      
      // Generate notification for property view
      addNotification('property_viewed', {
        propertyTitle: propertyData.title,
        propertyId: propertyData.id
      });
    }
    setLoading(false);
  }, [id]);

  const handleSaveProperty = () => {
    setIsSaved(!isSaved);
    
    if (!isSaved) {
      // Generate notification for saving property
      addNotification('property_liked', {
        propertyTitle: property.title,
        propertyId: property.id
      });
    }
  };

  const handleShareProperty = async () => {
    const shareData = {
      title: property.title,
      text: `Check out this property: ${property.title} - ${property.price}`,
      url: window.location.href
    };

    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Property link copied to clipboard!');
      }
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Property link copied to clipboard!');
    }
  };

  const handleContactAgent = () => {
    // Generate notification for contacting agent
    addNotification('agent_contacted', {
      agentName: 'Michael Rodriguez',
      agentId: 'agent-mr'
    });
    
    // Open email client
    const subject = `Inquiry about ${property.title}`;
    const body = `Hello Michael,\n\nI'm interested in the property: ${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\n\nI would like to schedule a viewing and get more information.\n\nBest regards`;
    const agentEmail = 'michael.rodriguez@propconnect.com';
    const mailtoLink = `mailto:${agentEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      window.location.href = mailtoLink;
    } catch {
      alert(`Contact the agent at: ${agentEmail}`);
    }
  };

  if (loading) {
    return <div className="loading-container">Loading property details...</div>;
  }

  if (!property) {
    return (
      <div className="not-found-container">
        <h2>Property not found</h2>
        <p>The property you're looking for doesn't exist or has been removed.</p>
        <Link to="/properties" className="back-button">Browse Properties</Link>
      </div>
    );
  }

  return (
    <div className="property-detail-page">
      <div className="property-header">
        <div className="property-header-content">
          <div className="badge-container">
            <span className={`property-badge ${property.badge.toLowerCase()}`}>{property.badge}</span>
            <span className="property-status">For Sale</span>
          </div>
          
          <h1 className="property-title">{property.title}</h1>
          <p className="property-location">{property.location}</p>
          
          <div className="property-price-container">
            <h2 className="property-price">{property.price}</h2>
            <div className="property-actions">
              <button 
                className={`action-button favorite ${isSaved ? 'saved' : ''}`}
                onClick={handleSaveProperty}
              >
                {isSaved ? <FaHeart /> : <FaRegHeart />}
                {isSaved ? 'Saved' : 'Save'}
              </button>
              <button 
                className="action-button share"
                onClick={handleShareProperty}
              >
                <FaShare />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="property-content">
        <div className="gallery-section">
          <div className="main-image">
            <img src={property.image} alt={property.title} />
          </div>
          <div className="thumbnail-row">
            <img src={property.image} alt={property.title} className="thumbnail active" />
            {/* You would typically have more images here */}
          </div>
        </div>
        
        <div className="property-details-grid">
          <div className="detail-item">
            <span className="detail-icon">🛏️</span>
            <span className="detail-label">Bedrooms</span>
            <span className="detail-value">{property.details.beds.split(' ')[0]}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🚿</span>
            <span className="detail-label">Bathrooms</span>
            <span className="detail-value">{property.details.baths.split(' ')[0]}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📏</span>
            <span className="detail-label">Square Feet</span>
            <span className="detail-value">{property.details.area.split(' ')[0]}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <span className="detail-label">Year Built</span>
            <span className="detail-value">2019</span>
          </div>
        </div>
        
        <div className="property-details-sections">
          <div className="property-description">
            <h2>Description</h2>
            <p>This beautiful modern downtown apartment is located in the heart of downtown with stunning city views. Featuring high-end finishes, stainless steel appliances, and an open floor plan perfect for entertaining. The building offers a fitness center, rooftop pool, and 24/7 concierge service.</p>
          </div>
          
          <div className="property-features">
            <h2>Features</h2>
            <ul className="features-list">
              <li>Central Air Conditioning</li>
              <li>In-Unit Washer & Dryer</li>
              <li>Hardwood Flooring</li>
              <li>Walk-in Closets</li>
              <li>Stainless Steel Appliances</li>
              <li>High Ceilings</li>
              <li>24/7 Security</li>
              <li>Fitness Center Access</li>
            </ul>
          </div>
          
          <div className="contact-agent">
            <h2>Contact Listing Agent</h2>
            <div className="agent-card">
              <div className="agent-avatar">MR</div>
              <div className="agent-info">
                <div className="agent-details">
                  <h3>Michael Rodriguez</h3>
                  <p>Senior Real Estate Agent</p>
                  <p>PropConnect Realty</p>
                </div>
              </div>
              <button 
                className="contact-button primary"
                onClick={handleContactAgent}
                title="Contact agent about this property"
              >
                Message
              </button>
            </div>
          </div>
        </div>
        
        {/* ...any other sections... */}
      </div>
    </div>
  );
}

export default Property_Detail;
