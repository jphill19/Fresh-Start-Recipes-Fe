import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { ingredientFilter } from '../../api/fresh_start_recipe_api';
import styles from './filterDataSearch.module.css';

function FilterDataSearch({ name, searchValueSetter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  
  const { data, error } = useSWR(
    debouncedTerm ? [debouncedTerm, 'for_ingredient='] : null,
    ([filter, params]) => ingredientFilter(filter, params),
    {
      dedupingInterval: 120000, 
    }
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (item) => {
    setSelectedId(item.id);
    searchValueSetter(item.attributes.name);
  };

  return (
    <>
      <h2>{name}</h2>
      <p>Input a name of an ingredient, then select from the checkbox</p>
      <input
        type="text"
        placeholder="Search by Ingredient"
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
      <div>
        {error && <p className={styles.errorMessage}>Error fetching data: {error.message}</p>}
        {data && data.data.length > 0 ? (
          data.data.map((item) => (
            <div key={item.id} className={styles.filterCheckbox}>
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                checked={selectedId === item.id}
                onChange={() => handleCheckboxChange(item)}
              />
              <label htmlFor={`checkbox-${item.id}`}>
                {item.attributes.name}
              </label>
            </div>
          ))
        ) : (
          debouncedTerm && (
            <p className={styles.noResultsMessage}>
              No ingredients found for "{debouncedTerm}".
            </p>
          )
        )}
      </div>
    </>
  );
}

export default FilterDataSearch;
