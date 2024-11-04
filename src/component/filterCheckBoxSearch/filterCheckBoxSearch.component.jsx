import './filterCheckBoxSearch.css'
import { Fragment, useState } from 'react';


function FilterCheckBoxSearch({options, name, searchValueSetter}) {
  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedId(id);
    searchValueSetter(id); 
  };

  return (
    <Fragment>
      <h2>{name}</h2>
      {Object.entries(options).map(([id, label]) => (
        <label key={id} className="filter-checkbox">
          <input
            type="checkbox"
            checked={selectedId === id}
            onChange={() => handleCheckboxChange(id)}
          />
          <label htmlFor={`checkbox-${id}`}>{label}</label>
        </label>
      ))}
    </Fragment>
  );
}

export default FilterCheckBoxSearch;