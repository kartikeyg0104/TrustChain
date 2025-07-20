import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegHeart, FaHeart, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { addNotification } from '../data/notifications';
import '../Styles/PropertyCard.css';

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(property?.saved || false);
  
  if (!property) return null;
  const badgeClass = property.badge?.toLowerCase() || 'standard';
  
  const getBeds = () => {
    if (property.details?.beds) {
      return property.details.beds.split(' ')[0]; 
    }
    return property.beds || '0';
  };
  
  const getBaths = () => {
    if (property.details?.baths) {
      return property.details.baths.split(' ')[0]; 
    }
    return property.baths || '0';
  };
  const getAreaValue = () => {
    if (property.details?.area) {
      const areaStr = property.details.area;
      return areaStr.split(' ')[0]; 
    }
    
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
    
    setIsSaved(!isSaved);
    
    if (!isSaved) {
      // Generate notification for saving property
      addNotification('property_liked', {
        propertyTitle: property.title,
        propertyId: property.id
      });
    }
  };
  
  return (
    <div className="property-card" onClick={handleCardClick}>
      <div className="property-image-container">
        <img src={property.image} alt={property.title} />
        
        {/* Badge (Premium, Featured, etc) */}
        {property.badge && (
          <div className={`property-badge ${badgeClass}`}>{property.badge}</div>
        )}
        
        {}
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
            <span className="feature-value">{getBeds()}</span>
            <span className="feature-label">Beds</span>
          </div>
          <div className="feature">
            <span className="feature-value">{getBaths()}</span>
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