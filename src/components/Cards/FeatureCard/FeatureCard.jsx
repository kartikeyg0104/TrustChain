import React from 'react';
import './FeatureCard.css';

function FeatureCard({ feature }) {
  const { icon, title, description } = feature;
  
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;