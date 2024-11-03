import { Fragment, useState, useEffect } from 'react';
import { ingredientFilter } from '../home/../../api/fresh_start_recipe_api';
import './filterDataSearch.css';

function FilterDataSearch({ name, searchValueSetter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const data = await ingredientFilter(searchTerm);
          console.log('data', data);
          setResults(data.data);
          setIsDropdownOpen(true);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        setResults([]);
        setIsDropdownOpen(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectItem = (item) => {
    setSearchTerm(item.attributes.name);
    setIsDropdownOpen(false);
    searchValueSetter(item.attributes.name)
  };

  return (
    <Fragment>
      <h2>{name}</h2>
      <div className="dropdown-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
          onFocus={() => results.length > 0 && setIsDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
        />
        {isDropdownOpen && results.length > 0 && (
          <ul className="dropdown-menu">
            {results.map((item) => (
              <li
                key={item.id}
                className="dropdown-item"
                onMouseDown={() => handleSelectItem(item)}
              >
                {item.attributes.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
}

export default FilterDataSearch;
