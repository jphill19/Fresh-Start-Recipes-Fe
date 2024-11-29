import { Fragment, useState, useEffect } from 'react';
import styles from './FilterToggleSwitch.module.css'; // Use CSS Modules for styling

function FilterToggleSwitch({ name, searchValueSetter }) {
  const [isSingle, setIsSingle] = useState(true);

  useEffect(() => {
    // Set the initial search value when the component mounts
    searchValueSetter(isSingle ? 'Single' : 'Multiple');
  }, [isSingle, searchValueSetter]);

  const handleToggle = () => {
    const newValue = isSingle ? 'Multiple' : 'Single';
    setIsSingle(!isSingle);
    searchValueSetter(newValue);
  };

  return (
    <Fragment>
      <h2>{name}</h2>
      <div className={styles.toggleSwitch} onClick={handleToggle}>
        <span className={`${styles.toggleOption} ${isSingle ? styles.active : ''}`}>
          Single
        </span>
        <span className={`${styles.toggleOption} ${!isSingle ? styles.active : ''}`}>
          Multiple
        </span>
        <div
          className={`${styles.toggleSlider} ${isSingle ? styles.single : styles.multiple}`}
        />
      </div>
    </Fragment>
  );
}

export default FilterToggleSwitch;
