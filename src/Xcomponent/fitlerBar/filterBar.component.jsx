

import { useCallback, useMemo, useState } from 'react';
import './filterBar.css'
import FilterModal from '../filterModal/filterModal.component';


function FilterIcon({ isActive }) {

  return isActive ? (
    <img src="/white-x.svg" className="x-icon" alt="x" />
  ) : (
    <img src="/caret-down-fill.svg" className="dropdown-arrow" alt="drop down arrow" />
  );
}

function FilterBar({ onFilterChange, activeFilters }) {
 
  const [activeModal, setActiveModal] = useState(null)

  const closeModal = () => {
    setActiveModal(null);
  };

  const ingredientIcon = useMemo(() => <FilterIcon isActive={activeFilters['by_ingredient']} />, [activeFilters['by_ingredient']]);
  const cookingStyleIcon = useMemo(() => <FilterIcon isActive={activeFilters['by_style']} />, [activeFilters['by_style']]);
  const servingsIcon = useMemo(() => <FilterIcon isActive={activeFilters['by_serving']} />, [activeFilters['by_serving']]);
  const priceIcon = useMemo(() => <FilterIcon isActive={activeFilters['by_price']} />, [activeFilters['by_price']]);
  
 
  const handleFilterClick = useCallback((filterKey) => {
    if (activeFilters[filterKey]) {
      onFilterChange(filterKey, null);
    } else {
      setActiveModal(filterKey); 
    }
  }, [onFilterChange, activeFilters]);

  return (
    <div className="filter-bar-container">
      <div
        className={`filter-component ${activeFilters['by_ingredient'] ? 'highlighted' : ''}`}
        onClick={() => handleFilterClick('by_ingredient')}
      >
        Ingredient
        {ingredientIcon}
      </div>
      
      <div
        className={`filter-component ${activeFilters['by_style'] ? 'highlighted' : ''}`}
        onClick={() => handleFilterClick('by_style')}
      >
        Cooking Style
        {cookingStyleIcon}
      </div>
      
      <div
        className={`filter-component ${activeFilters['by_serving'] ? 'highlighted' : ''}`}
        onClick={() => handleFilterClick('by_serving')}
      >
        Servings
        {servingsIcon}
      </div>
      
      <div
        className={`filter-component ${activeFilters['by_price'] ? 'highlighted' : ''}`}
        onClick={() => handleFilterClick('by_price')}
      >
        Price
        {priceIcon}
      </div>
      
      {activeModal && (
        <FilterModal 
          onClose={closeModal}
          activeModal={activeModal} 
          onFilterChange= {onFilterChange}
          activeFilters = {activeFilters}
          >
        </FilterModal>
      )}
    </div>
  );
}

export default FilterBar;


 