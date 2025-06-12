import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaFilter, FaTh, FaThList } from 'react-icons/fa';
import AgentCard from './AgentCard';
import { topAgents } from '../data/agents';
import '../Styles/Agents.css';

function Agents() {
  const [agents, setAgents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('engagement');
  const [agentCategory, setAgentCategory] = useState('All');
  const [showFavorites, setShowFavorites] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('search') || '';
  
  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    let filteredAgents = [...topAgents];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredAgents = filteredAgents.filter(agent => 
        agent.name.toLowerCase().includes(term) || 
        agent.title?.toLowerCase().includes(term) ||
        agent.company?.toLowerCase().includes(term) ||
        agent.specialty?.toLowerCase().includes(term)
      );
    }
    
    if (agentCategory !== 'All') {
      filteredAgents = filteredAgents.filter(agent => 
        agent.specialty === agentCategory
      );
    }
    
    if (sortBy === 'engagement') {
      filteredAgents.sort((a, b) => b.engagement - a.engagement);
    } else if (sortBy === 'listings') {
      filteredAgents.sort((a, b) => b.listings - a.listings);
    } else if (sortBy === 'name') {
      filteredAgents.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setAgents(filteredAgents);
  }, [searchTerm, agentCategory, sortBy]);

  const handleCategoryFilter = (category) => {
    setAgentCategory(category);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/agents?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="agents-page">
      <div className="agents-hero-header">
        <div className="hero-content">
          <h1>Find Your Perfect Agent</h1>
          <p>Connect with verified real estate professionals who can guide your property journey</p>
          
          <form className="agent-search-form" onSubmit={handleSearch}>
            <div className="search-bar-container">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by name, specialty, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-button">Search</button>
            </div>
          </form>
          
          <div className="agent-type-filters">
            <button 
              className={agentCategory === 'All' ? 'active' : ''}
              onClick={() => handleCategoryFilter('All')}
            >
              All Agents
            </button>
            <button 
              className={agentCategory === 'Residential' ? 'active' : ''}
              onClick={() => handleCategoryFilter('Residential')}
            >
              Residential
            </button>
            <button 
              className={agentCategory === 'Commercial' ? 'active' : ''}
              onClick={() => handleCategoryFilter('Commercial')}
            >
              Commercial
            </button>
            <button 
              className={agentCategory === 'Luxury' ? 'active' : ''}
              onClick={() => handleCategoryFilter('Luxury')}
            >
              Luxury
            </button>
            <button 
              className={agentCategory === 'Investment' ? 'active' : ''}
              onClick={() => handleCategoryFilter('Investment')}
            >
              Investment
            </button>
          </div>
          
          <div className="explore-all-container">
            <button 
              className="explore-all-button"
              onClick={() => setAgentCategory('All')}
            >
              Explore All Agents
            </button>
          </div>
        </div>
      </div>
      
      <div className="agents-results-container">
        <div className="results-header">
          <div className="results-count">
            <span>{agents.length} Agents Found</span>
            <button 
              className="favorites-button"
              onClick={() => setShowFavorites(!showFavorites)}
            >
              {showFavorites ? 'All Agents' : 'Show Favorites'}
            </button>
          </div>
          
          <div className="view-options">
            <div className="view-buttons">
              <button 
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <FaTh />
              </button>
              <button 
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
                title="List View"
              >
                <FaThList />
              </button>
            </div>
            
            <div className="sort-options">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="engagement">Highest Engagement</option>
                <option value="listings">Most Listings</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
            
            <button className="filter-button" title="More Filters">
              <FaFilter /> Filters
            </button>
          </div>
        </div>
        
        <div className={`agent-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
          {agents.length === 0 ? (
            <div className="no-agents">
              <h3>No agents found</h3>
              <p>Try adjusting your search criteria or explore all agents</p>
            </div>
          ) : (
            agents.map(agent => (
              <div key={agent.id} className="agent-card-wrapper">
                <AgentCard agent={agent} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Agents;