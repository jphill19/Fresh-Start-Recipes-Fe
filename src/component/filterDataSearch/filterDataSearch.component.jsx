import { Fragment, useState} from 'react';
import './filterDataSearch.css'


function FilterDataSearch({ name, searchValueSetter}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(`${apiEndpoint}?query=${searchTerm}`);
  //         const data = await response.json();
  //         setResults(data.results); // Update with fetched results
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchData();
  //   } else {
  //     setResults([]); // Clear results if search term is empty
  //   }
  // }, [searchTerm, apiEndpoint]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <Fragment>
      <h2>{name}</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div>
        {results.map((item) => (
          <label key={item.id} className="filter-option">
            <input type="checkbox" />
            {item.name}
          </label>
        ))}
      </div>
    </Fragment>
  );
}

export default FilterDataSearch;