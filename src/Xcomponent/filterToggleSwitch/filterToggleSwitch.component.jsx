import './filterToggleSwitch.css'
import { Fragment, useState, useEffect} from 'react';


function FilterToggleSwitch({ name, searchValueSetter }) {
  const [isSingle, setIsSingle] = useState(true);

  useEffect(() => {
    // Set the initial search value when the component mounts
    searchValueSetter(isSingle ? 'Single' : 'Multiple');
  }, [isSingle]);

  const handleToggle = () => {
    const newValue = isSingle ? 'Multiple' : 'Single';
    setIsSingle(!isSingle);
    searchValueSetter(newValue); 
  };

  return (
    <Fragment>
      <h2>{name}</h2>
      <div className="toggle-switch" onClick={handleToggle}>
        <span className={`toggle-option ${isSingle ? 'active' : ''}`}>Single</span>
        <span className={`toggle-option ${!isSingle ? 'active' : ''}`}>Multiple</span>
        <div className={`toggle-slider ${isSingle ? 'single' : 'multiple'}`} />
      </div>
    </Fragment>
  );
}

export default FilterToggleSwitch;