import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('Amazon');
  const [query, setQuery] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = () => {
    let url = '';
    switch (activeTab) {
      case 'Amazon':
        url = `https://www.amazon.com/s?k=${query}`;
        break;
      case 'Ebay':
        url = `https://www.ebay.com/sch/i.html?_nkw=${query}`;
        break;
      case 'Walmart':
        url = `https://www.walmart.com/search/?query=${query}`;
        break;
      case 'Homedepot':
        url = `https://www.homedepot.com/s/${query}`;
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="search-tabs">
      <div className="tabs">
        {['Amazon', 'Ebay', 'Walmart', 'Homedepot'].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search on ${activeTab}`}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;