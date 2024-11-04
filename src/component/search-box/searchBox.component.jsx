import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './searchBox.css'



function SearchBox({ showSearch, toggleSearch}) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    if (searchQuery.trim()) {
      navigate(`/?by_recipe=${encodeURIComponent(searchQuery)}`);
    }
    toggleSearch();
    setSearchQuery('')
  };


  return (
    <div className={`search-container ${showSearch ? 'show' : ''}`}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder="Search by Recipe Name..."
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
      </form>
    </div>
  );
}

export default SearchBox;
