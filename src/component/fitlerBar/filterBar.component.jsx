

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


 // const handleIngredientClick = useCallback(() => {
  //   setActiveModal('ingredient'); 
  // }, []);

  // const handleCookingStyleClick = useCallback(() => {
  //   setActiveModal('cookingStyle');
  // }, []);

  // const handleServingsClick = useCallback(() => {
  //   setActiveModal('servings');
  // }, []);

  // const handlePriceClick = useCallback(() => {
  //   if (activeFilters['by_price']){
  //     onFilterChange('by_price', null )
  //   } else { 
  //     setActiveModal('price');
  //   }
  // }, []);

 // Memoize event handlers to avoid recreating functions on each render
  // const handleIngredientFilter = useCallback(() => {
  //   onFilterChange('by_ingredient', activeFilters['by_ingredient'] ? null : 123);
  // }, [onFilterChange, activeFilters]);

  // const handleCookingStyleFilter= useCallback(() => {
  //   onFilterChange('by_style', activeFilters['by_style'] ? null : 1);
  // }, [onFilterChange, activeFilters]);

  // const handleServingsFilter = useCallback(() => {
  //   onFilterChange('by_serving', activeFilters['by_serving'] ? null : 'batch');
  // }, [onFilterChange, activeFilters]);

  // const handlePriceFilter = useCallback(() => {
  //   onFilterChange('by_price', activeFilters['by_price'] ? null : '<5');
  // }, [onFilterChange, activeFilters]);



// function FilterIcon({ isActive }) {
//   console.log("Filter Icon Render")
//   return isActive ? (
//     <img src="/white-x.svg" className="x-icon" alt="x" />
//   ) : (
//     <img src="/caret-down-fill.svg" className="dropdown-arrow" alt="drop down arrow" />
//   );
// }

// function FilterBar({ onFilterChange, activeFilters }) {
//   console.log("Filter Bar Render")
//   return (
//     <div className='filter-bar-container'>
//       <div
//         className={`filter-component ${activeFilters['by_ingredient'] ? 'highlighted' : ''}`}
//         onClick={() => onFilterChange('by_ingredient', activeFilters['by_ingredient'] ? null : 123)} // Replace 123 with actual ID
//       >
//         Ingredient
//         <FilterIcon isActive={activeFilters['by_ingredient'] ? true : false} />
//       </div>
      
//       <div
//         className={`filter-component ${activeFilters['by_style'] ? 'highlighted' : ''}`}
//         onClick={() => onFilterChange('by_style', activeFilters['by_style'] ? null : 1)} // Example enum value
//       >
//         Cooking Style
//         <FilterIcon isActive={activeFilters['by_style'] ? true : false} />
//       </div>
      
//       <div
//         className={`filter-component ${activeFilters['by_serving'] ? 'highlighted' : ''}`}
//         onClick={() => onFilterChange('by_serving', activeFilters['by_serving'] ? null : 'batch')}
//       >
//         Servings
//         <FilterIcon isActive={activeFilters['by_serving'] ? true : false} />
//       </div>
      
//       <div
//         className={`filter-component ${activeFilters['by_price'] ? 'highlighted' : ''}`}
//         onClick={() => onFilterChange('by_price', activeFilters['by_price'] ? null : '<5')}
//       >
//         Price
//         <FilterIcon isActive={activeFilters['by_price'] ? true : false} />
//       </div>
//     </div>
//   );
// }

// export default FilterBar;