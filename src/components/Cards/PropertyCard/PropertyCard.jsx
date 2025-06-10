import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegHeart, FaHeart, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import './PropertyCard.css';

function PropertyCard({ property }) {
  if (!property) return null;
  
  const navigate = useNavigate();
  
  // Determine badge class
  const badgeClass = property.badge?.toLowerCase() || 'standard';
  
  // Optional: Handle favoriting/saving (can be implemented with state later)
  const isSaved = property.saved || false;
  
  // Handle potentially missing property values with defaults
  const beds = property.beds || '0';
  const baths = property.baths || '0';
  
  // Safely extract square footage
  const getAreaValue = () => {
    if (!property.area) return '0';
    
    // If area is a string that contains spaces (like "1500 sq ft"), extract the number
    if (typeof property.area === 'string' && property.area.includes(' ')) {
      return property.area.split(' ')[0];
    }
    
    // Otherwise just return the area as is
    return property.area;
  };
  
  // Handle card click
  const handleCardClick = (e) => {
    // Don't navigate if the click was on an interactive element (buttons, links)
    if (
      e.target.closest('.save-button') ||
      e.target.closest('.property-agent')
    ) {
      return;
    }
    
    navigate(`/properties/${property.id}`);
  };
  
  // Handle save button click
  const handleSaveClick = (e) => {
    e.stopPropagation(); // Prevent card click from firing
    // Implement save functionality here
    console.log('Save property:', property.id);
  };
  
  return (
    <div className="property-card" onClick={handleCardClick}>
      <div className="property-image-container">
        <img src={property.image} alt={property.title} />
        
        {/* Badge (Premium, Featured, etc) */}
        {property.badge && (
          <div className={`property-badge ${badgeClass}`}>{property.badge}</div>
        )}
        
        {/* Status (For Sale, For Rent, Sold) */}
        {property.status && (
          <div className={`property-status status-${property.status.toLowerCase().replace(/\s+/g, '-')}`}>
            {property.status}
          </div>
        )}
        
        {/* Agent pill */}
        {property.agent && (
          <div className="property-agent">
            <div className="agent-avatar">{property.agent.initials || 'AG'}</div>
            <span className="agent-name">{property.agent.name || 'Agent'}</span>
          </div>
        )}
      </div>
      
      <div className="property-content">
        <h3>{property.title}</h3>
        <p className="price">{property.price}</p>
        <p className="location">
          <FaMapMarkerAlt />
          {property.location}
        </p>
        
        <div className="property-features">
          <div className="feature">
            <span className="feature-value">{beds}</span>
            <span className="feature-label">Beds</span>
          </div>
          <div className="feature">
            <span className="feature-value">{baths}</span>
            <span className="feature-label">Baths</span>
          </div>
          <div className="feature">
            <span className="feature-value">{getAreaValue()}</span>
            <span className="feature-label">Sq Ft</span>
          </div>
        </div>
      </div>
      
      {/* Save/Favorite button */}
      <div 
        className={`save-button ${isSaved ? 'saved' : ''}`} 
        onClick={handleSaveClick}
      >
        {isSaved ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  );
}

export default PropertyCard;