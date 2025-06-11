import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCalendarAlt, FaHeart, FaShare, FaImages } from 'react-icons/fa';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [property, setProperty] = useState({
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$425,000",
    location: "123 Main St, New York, NY",
    badge: "Premium",
    description: "This beautiful modern downtown apartment is located in the heart of downtown with stunning city views. Featuring high-end finishes, stainless steel appliances, and an open floor plan perfect for entertaining. The building offers a fitness center, rooftop pool, and 24/7 concierge service.",
    features: {
      beds: 2,
      baths: 2,
      area: "1,200 ft²",
      year: 2019
    },
    agent: {
      id: "agent1",
      name: "Michael Rodriguez",
      initials: "MR",
      title: "Senior Real Estate Agent",
      badge: "Premium",
      stats: {
        properties: 42,
        engagementScore: 9.5,
        responseRate: "98%"
      }
    }
  });

  useEffect(() => {
    // In a real app, you would fetch the property details by ID
    console.log(`Fetching property with ID: ${id}`);
    
    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.3}px)`
  };
  
  return (
    <div className="property-details-page">
      <section className="property-hero">
        <div className="property-hero-overlay"></div>
        <img 
          src="https://source.unsplash.com/random/1200x800/?luxury,apartment" 
          alt={property.title} 
          className="property-hero-image" 
          style={parallaxStyle}
        />
        
        <div className="hero-actions">
          <div className="action-button save">
            <FaHeart />
          </div>
          <div className="action-button share">
            <FaShare />
          </div>
        </div>
      </section>
      
      <div className="property-title-section">
        <div className="property-title-card">
          {property.badge && (
            <div className="property-badge">{property.badge}</div>
          )}
          
          <div className="property-headline">
            <h1 className="property-title">{property.title}</h1>
            <div className="property-address">
              <FaMapMarkerAlt className="address-icon" />
              <span>{property.location}</span>
            </div>
          </div>
          
          <div className="property-price">{property.price}</div>
        </div>
      </div>
      
      <div className="property-content">
        <div className="content-tabs">
          <div 
            className={`content-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </div>
          <div 
            className={`content-tab ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </div>
          <div 
            className={`content-tab ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </div>
          <div 
            className={`content-tab ${activeTab === 'location' ? 'active' : ''}`}
            onClick={() => setActiveTab('location')}
          >
            Location
          </div>
        </div>
        
        {activeTab === 'overview' && (
          <>
            <div className="property-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaBed />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Bedrooms</h3>
                  <p className="feature-value">{property.features.beds}</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <FaBath />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Bathrooms</h3>
                  <p className="feature-value">{property.features.baths}</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <FaRulerCombined />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Square Feet</h3>
                  <p className="feature-value">{property.features.area}</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <FaCalendarAlt />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Year Built</h3>
                  <p className="feature-value">{property.features.year}</p>
                </div>
              </div>
            </div>
            
            <div className="property-description">
              <h2 className="description-header">Description</h2>
              <p className="description-text">{property.description}</p>
            </div>
            
            <div className="property-gallery">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="gallery-item">
                  <img 
                    src={`https://source.unsplash.com/random/600x400/?apartment,interior,${item}`} 
                    alt={`Property interior ${item}`} 
                    className="gallery-image"
                  />
                  <div className="gallery-item-overlay"></div>
                  {item === 1 && (
                    <div className="view-all-photos">
                      <FaImages />
                      <span>View all photos</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="contact-section">
              <div className="agent-card">
                <div className="agent-avatar">{property.agent.initials}</div>
                <h3 className="agent-name">{property.agent.name}</h3>
                <p className="agent-title">{property.agent.title}</p>
                <span className="agent-badge">{property.agent.badge}</span>
                
                <div className="agent-stats">
                  <div className="agent-stat">
                    <div className="stat-value">{property.agent.stats.properties}</div>
                    <div className="stat-label">Listings</div>
                  </div>
                  <div className="agent-stat">
                    <div className="stat-value">{property.agent.stats.engagementScore}</div>
                    <div className="stat-label">Engagement</div>
                  </div>
                  <div className="agent-stat">
                    <div className="stat-value">{property.agent.stats.responseRate}</div>
                    <div className="stat-label">Response</div>
                  </div>
                </div>
                
                <div className="agent-actions">
                  <button className="agent-button contact-agent-btn">Contact Agent</button>
                  <button className="agent-button view-profile-btn">View Profile</button>
                </div>
              </div>
              
              <div className="contact-form">
                <h2 className="form-title">Interested in this property?</h2>
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">Preferred Visit Date</label>
                      <input type="date" id="date" className="form-control" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      className="form-control" 
                      rows="4" 
                      placeholder="I'm interested in this property and would like to schedule a viewing"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">Schedule Viewing</button>
                </form>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'features' && (
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
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
