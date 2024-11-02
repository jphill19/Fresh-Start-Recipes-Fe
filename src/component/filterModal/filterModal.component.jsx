import './filterModal.css'
import FilterDataSearch from '../filterDataSearch/filterDataSearch.component';
import FilterCheckBoxSearch from '../filterCheckBoxSearch/filterCheckBoxSearch.component';
import FilterToggleSwitch from '../filterToggleSwitch/filterToggleSwitch.component';
import { useState } from 'react';

function FilterModal({ onClose, type, activeModal}) {
  const [searchValue, setSearchValue ] = useState(null)

  const searchValueSetter = (value) => {
    setSearchValue(value);
  };
  console.log(searchValue)

  const renderFilterContent = () => {
    switch (activeModal) {
      case 'filterQuery-ingredient':
        return <FilterDataSearch 
                name="Filter by a ingredient"
                searchValueSetter= {searchValueSetter}
              />;
      case 'filterQuery-cookingStyle':
        return <FilterCheckBoxSearch 
                  options={{ 1: 'Oven', 2: 'Microwave', 3: 'Stove', 4: 'None required' }} 
                  name="Filter by a preffered cooking style"
                  searchValueSetter= {searchValueSetter}
              />;
      case 'filterQuery-servings':
        return <FilterToggleSwitch
                  options={{ 1: 'Oven', 2: 'Microwave', 3: 'Stove', 4: 'None required' }} 
                  name="Filter by Servings"
                  searchValueSetter= {searchValueSetter}
              />;
      case 'filterQuery-price':
        return <FilterCheckBoxSearch 
                  options={{ '<5': 'Less than $5', '<10': 'Less than $10', '>5': 'Greater than $5', '>10': 'Greater than $10' }} 
                  name="Filter by Prices"
                  searchValueSetter= {searchValueSetter}
              />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {renderFilterContent()}
        <div className="modal-actions">
          <button className="modal-button reset" onClick={onClose}>Reset</button>
          <button className="modal-button view-results" onClick={onClose}>View Results</button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
