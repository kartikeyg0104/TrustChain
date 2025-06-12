import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaTh, FaThList, FaSort, FaFilter } from 'react-icons/fa';
import PropertyCard from './PropertyCard';
import { featuredProperties } from '../data/properties';
import '../Styles/Property_Listing.css';

function Property_Listing() {
  const [properties, setProperties] = useState(featuredProperties || []);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [showFavorites, setShowFavorites] = useState(false);

  // Filter state
  const [filters, setFilters] = useState({
    priceRange: 'Any Price',
    bedrooms: 'Any',
    propertyType: 'Any',
    verification: 'Any'
  });
  
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('search') || '';
  
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  
  useEffect(() => {
    setLoading(true);
    let filteredProperties = [...featuredProperties];
    
    // Apply search query filter
    if (searchQuery) {
      filteredProperties = filteredProperties.filter(property => {
        // Make sure to check if the properties exist before using string methods
        const propertyTitle = property.title?.toLowerCase() || '';
        const propertyLocation = property.location?.toLowerCase() || '';
        const searchTermLower = searchQuery.toLowerCase();
        
        return propertyTitle.includes(searchTermLower) || 
               propertyLocation.includes(searchTermLower);
      });
    }
    
    // Apply property type filter from the URL if any
    const typeParam = new URLSearchParams(location.search).get('type');
    if (typeParam) {
      setFilters(prev => ({...prev, propertyType: typeParam}));
    }
    
    // Apply property type filter
    if (filters.propertyType !== 'Any') {
      filteredProperties = filteredProperties.filter(property => {
        if (filters.propertyType === 'Houses') return property.title.includes('House') || property.title.includes('Villa');
        if (filters.propertyType === 'Apartments') return property.title.includes('Apartment') || property.title.includes('Flat');
        if (filters.propertyType === 'Condos') return property.title.includes('Condo');
        if (filters.propertyType === 'Villas') return property.title.includes('Villa');
        return true;
      });
    }

    // Apply other filters
    // Filter by price range
    if (filters.priceRange !== 'Any Price') {
      const [minPrice, maxPrice] = filters.priceRange.split(' - ').map(price => 
        parseInt(price.replace(/[^0-9]/g, ''))
      );
      filteredProperties = filteredProperties.filter(property => {
        const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
        return (!isNaN(minPrice) ? propertyPrice >= minPrice : true) && 
               (!isNaN(maxPrice) ? propertyPrice <= maxPrice : true);
      });
    }
    
    // Filter by bedrooms
    if (filters.bedrooms !== 'Any') {
      const minBeds = parseInt(filters.bedrooms);
      filteredProperties = filteredProperties.filter(property => {
        const beds = parseInt(property.beds || property.details?.beds?.split(' ')[0] || '0');
        return beds >= minBeds;
      });
    }
    
    // Apply verification filter
    if (filters.verification !== 'Any') {
      filteredProperties = filteredProperties.filter(property => 
        property.verified === (filters.verification === 'Verified')
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        filteredProperties.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filteredProperties.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'newest':
        filteredProperties.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }
    
    setProperties(filteredProperties);
    setLoading(false);
  }, [searchQuery, filters, sortOption, location.search]);
  
  const handlePropertyTypeFilter = (type) => {
    navigate(`/properties?type=${type}`);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/properties?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="property-listing-page">
      {/* Hero Header */}
      <div className="property-hero-header">
        <div className="hero-content">
          <h1>Find Your Perfect Property</h1>
          <p>Explore verified properties with TrustChain's secure transactions</p>
          
          <form className="property-search-form" onSubmit={handleSearch}>
            <div className="search-bar-container">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by location, property name, or features"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-button">Search</button>
            </div>
          </form>
          
          <div className="property-type-filters">
            <button 
              className={filters.propertyType === 'Houses' ? 'active' : ''}
              onClick={() => handlePropertyTypeFilter('Houses')}
            >
              Houses
            </button>
            <button 
              className={filters.propertyType === 'Apartments' ? 'active' : ''}
              onClick={() => handlePropertyTypeFilter('Apartments')}
            >
              Apartments
            </button>
            <button 
              className={filters.propertyType === 'Condos' ? 'active' : ''}
              onClick={() => handlePropertyTypeFilter('Condos')}
            >
              Condos
            </button>
            <button 
              className={filters.propertyType === 'Villas' ? 'active' : ''}
              onClick={() => handlePropertyTypeFilter('Villas')}
            >
              Villas
            </button>
          </div>
          
          <div className="explore-all-container">
            <button 
              className="explore-all-button"
              onClick={() => {
                setFilters({
                  priceRange: 'Any Price',
                  bedrooms: 'Any',
                  propertyType: 'Any',
                  verification: 'Any'
                });
                navigate('/properties');
              }}
            >
              Explore All Properties
            </button>
          </div>
        </div>
      </div>
      
      <div className="property-results-container">
        <div className="results-header">
          <div className="results-count">
            <span>{properties.length} Properties Found</span>
            <button 
              className="favorites-button"
              onClick={() => setShowFavorites(!showFavorites)}
            >
              {showFavorites ? 'All Properties' : 'Show Favorites'}
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
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            
            <button className="filter-button" title="More Filters">
              <FaFilter /> Filters
            </button>
          </div>
        </div>
        
        {/* Property Grid */}
        <div className={`property-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
          {loading ? (
            <div className="loading">Loading properties...</div>
          ) : properties.length === 0 ? (
            <div className="no-properties">
              <h3>No properties found</h3>
              <p>Try adjusting your search criteria or explore all properties</p>
            </div>
          ) : (
            properties.map(property => (
              <div key={property.id} className="property-card-wrapper">
                <PropertyCard property={property} />
              </div>
            ))
          )}
        </div>
        
        {/* Pagination controls */}
        {properties.length > 0 && (
          <div className="pagination">
            <button 
              className={currentPage === 1 ? 'disabled' : ''}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="page-indicator">Page {currentPage}</span>
            <button 
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Property_Listing;