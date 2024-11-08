import './filterModal.css'
import FilterDataSearch from '../filterDataSearch/filterDataSearch.component';
import FilterCheckBoxSearch from '../filterCheckBoxSearch/filterCheckBoxSearch.component';
import FilterToggleSwitch from '../filterToggleSwitch/filterToggleSwitch.component';
import { useState } from 'react';

function FilterModal({ onClose, activeModal, onFilterChange}) {
  const [searchValue, setSearchValue ] = useState(null)

  const searchValueSetter = (value) => {
    setSearchValue(value);
  };
  console.log(searchValue)

  const handleResultSearch = () => {
    onFilterChange(activeModal, searchValue)
    onClose()
  }

  const renderFilterContent = () => {
    switch (activeModal) {
      case 'by_ingredient':
        return <FilterDataSearch 
                name="Filter by an ingredient"
                searchValueSetter= {searchValueSetter}
              />;
      case 'by_style':
        return <FilterCheckBoxSearch 
                  options={{ 3: 'Oven', 1: 'Microwave', 2: 'Stove', 0: 'None required' }} 
                  name="Filter by a preferred cooking style"
                  searchValueSetter= {searchValueSetter}
              />;
      case 'by_serving':
        return <FilterToggleSwitch
                  options={{ 3: 'Oven', 1: 'Microwave', 2: 'Stove', 0: 'None required' }} 
                  name="Filter by Servings"
                  searchValueSetter= {searchValueSetter}
              />;
      case 'by_price':
        return <FilterCheckBoxSearch 
                  options={{ '0': 'Less than $5','2': 'Less than $10',  '3': 'Greater than $10' }} 
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
          <button className="modal-button view-results" onClick={handleResultSearch}>View Results</button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
