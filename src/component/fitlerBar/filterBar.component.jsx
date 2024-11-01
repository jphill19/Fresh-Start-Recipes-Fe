
import FilterDataSearch from '../filterDataSearch/filterDataSearch.component';
import FilterCheckBoxSearch from '../filterCheckBoxSearch/filterCheckBoxSearch.component';
import FilterToggleSwitch from '../filterToggleSwitch/filterToggleSwitch.component';
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
  console.log(activeModal)

  const closeModal = () => {
    setActiveModal(null);
  };

  const ingredientIcon = useMemo(() => <FilterIcon isActive={activeFilters['filterQuery-ingredient']} />, [activeFilters['filterQuery-ingredient']]);
  const cookingStyleIcon = useMemo(() => <FilterIcon isActive={activeFilters['filterQuery-cookingStyle']} />, [activeFilters['filterQuery-cookingStyle']]);
  const servingsIcon = useMemo(() => <FilterIcon isActive={activeFilters['filterQuery-servings']} />, [activeFilters['filterQuery-servings']]);
  const priceIcon = useMemo(() => <FilterIcon isActive={activeFilters['filterQuery-price']} />, [activeFilters['filterQuery-price']]);
  
  // Memoize event handlers to avoid recreating functions on each render
  // const handleIngredientFilter = useCallback(() => {
  //   onFilterChange('filterQuery-ingredient', activeFilters['filterQuery-ingredient'] ? null : 123);
  // }, [onFilterChange, activeFilters]);

  // const handleCookingStyleFilter= useCallback(() => {
  //   onFilterChange('filterQuery-cookingStyle', activeFilters['filterQuery-cookingStyle'] ? null : 1);
  // }, [onFilterChange, activeFilters]);

  // const handleServingsFilter = useCallback(() => {
  //   onFilterChange('filterQuery-servings', activeFilters['filterQuery-servings'] ? null : 'batch');
  // }, [onFilterChange, activeFilters]);

  // const handlePriceFilter = useCallback(() => {
  //   onFilterChange('filterQuery-price', activeFilters['filterQuery-price'] ? null : '<5');
  // }, [onFilterChange, activeFilters]);


  const handleIngredientClick = useCallback(() => {
    setActiveModal('ingredient'); 
  }, []);

  const handleCookingStyleClick = useCallback(() => {
    setActiveModal('cookingStyle');
  }, []);

  const handleServingsClick = useCallback(() => {
    setActiveModal('servings');
  }, []);

  const handlePriceClick = useCallback(() => {
    setActiveModal('price');
  }, []);


  return (
    <div className="filter-bar-container">
      <div
        className={`filter-component ${activeFilters['filterQuery-ingredient'] ? 'highlighted' : ''}`}
        onClick={handleIngredientClick}
      >
        Ingredient
        {ingredientIcon}
      </div>
      
      <div
        className={`filter-component ${activeFilters['filterQuery-cookingStyle'] ? 'highlighted' : ''}`}
        onClick={handleCookingStyleClick}
      >
        Cooking Style
        {cookingStyleIcon}
      </div>
      
      <div
        className={`filter-component ${activeFilters['filterQuery-servings'] ? 'highlighted' : ''}`}
        onClick={handleServingsClick}
      >
        Servings
        {servingsIcon}
      </div>
      
      <div
        className={`filter-component ${activeFilters['filterQuery-price'] ? 'highlighted' : ''}`}
        onClick={handlePriceClick}
      >
        Price
        {priceIcon}
      </div>
      {activeModal && (
        <FilterModal onClose={closeModal}>
              <h2>{`Filter by ${activeModal}`}</h2>
              <p>Details or options for {activeModal} filter.</p>
        </FilterModal>
      )}
    </div>
  );
}

export default FilterBar;


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
//         className={`filter-component ${activeFilters['filterQuery-ingredient'] ? 'highlighted' : ''}`}
//         onClick={() => onFilterChange('filterQuery-ingredient', activeFilters['filterQuery-ingredient'] ? null : 123)} // Replace 123 with actual ID
//       >
//         Ingredient
//         <FilterIcon isActive={activeFilters['filterQuery-ingredient'] ? true : false} />
//       </div>
      
//       <div
//         className={`filter-component ${activeFilters['filterQuery-cookingStyle'] ? 'highlighted' : ''}`}
//         onClick={() => onFilterChange('filterQuery-cookingStyle', activeFilters['filterQuery-cookingStyle'] ? null : 1)} // Example enum value
//       >
//         Cooking Style
//         <FilterIcon isActive={activeFilters['filterQuery-cookingStyle'] ? true : false} />
//       </div>
      
//       <div
//         className={`filter-component ${activeFilters['filterQuery-servings'] ? 'highlighted' : ''}`}
//         onClick={() => onFilterChange('filterQuery-servings', activeFilters['filterQuery-servings'] ? null : 'batch')}
//       >
//         Servings
//         <FilterIcon isActive={activeFilters['filterQuery-servings'] ? true : false} />
//       </div>
      
//       <div
//         className={`filter-component ${activeFilters['filterQuery-price'] ? 'highlighted' : ''}`}
//         onClick={() => onFilterChange('filterQuery-price', activeFilters['filterQuery-price'] ? null : '<5')}
//       >
//         Price
//         <FilterIcon isActive={activeFilters['filterQuery-price'] ? true : false} />
//       </div>
//     </div>
//   );
// }

// export default FilterBar;