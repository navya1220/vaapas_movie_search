// src/components/SearchBar.js

import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='searchInput'>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
