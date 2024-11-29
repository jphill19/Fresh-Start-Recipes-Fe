import { Fragment, useState } from 'react';
import styles from './filterCheckBoxSearch.module.css'; // Use CSS Modules for styling

function FilterCheckBoxSearch({ options, name, searchValueSetter }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedId(id);
    searchValueSetter(id); 
  };

  return (
    <Fragment>
      <h2>{name}</h2>
      <div className={styles.filterContainer}>
        {Object.entries(options).map(([id, label]) => (
          <div key={id} className={styles.filterCheckbox}>
            <input
              type="checkbox"
              id={`checkbox-${id}`}
              checked={selectedId === id}
              onChange={() => handleCheckboxChange(id)}
            />
            <label htmlFor={`checkbox-${id}`}>{label}</label>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default FilterCheckBoxSearch;

// Add getServerSideProps or getStaticProps if needed for fetching options
export async function getStaticProps() {
  // Example static options; replace with dynamic fetching logic as needed
  const options = {
    1: 'Option 1',
    2: 'Option 2',
    3: 'Option 3',
  };

  return {
    props: {
      options,
    },
  };
}
