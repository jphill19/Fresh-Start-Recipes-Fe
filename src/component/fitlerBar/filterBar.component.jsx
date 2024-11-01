
import FilterDataSearch from '../filterDataSearch/filterDataSearch.component';
import FilterCheckBoxSearch from '../filterCheckBoxSearch/filterCheckBoxSearch.component';
import FilterToggleSwitch from '../filterToggleSwitch/filterToggleSwitch.component';
import { useCallback, useMemo } from 'react';
import './filterBar.css'

function FilterIcon({ isActive }) {
  console.log("rerendering filter icon");
  return isActive ? (
    <img src="/white-x.svg" className="x-icon" alt="x" />
  ) : (
    <img src="/caret-down-fill.svg" className="dropdown-arrow" alt="drop down arrow" />
  );
}

function FilterBar({ onFilterChange, activeFilters }) {
  console.log("rerendering filter bar");


  const ingredientIcon = useMemo(() => <FilterIcon isActive={!!activeFilters['filterQuery-ingredient']} />, [activeFilters['filterQuery-ingredient']]);
  const cookingStyleIcon = useMemo(() => <FilterIcon isActive={!!activeFilters['filterQuery-cookingStyle']} />, [activeFilters['filterQuery-cookingStyle']]);
  const servingsIcon = useMemo(() => <FilterIcon isActive={!!activeFilters['filterQuery-servings']} />, [activeFilters['filterQuery-servings']]);
  const priceIcon = useMemo(() => <FilterIcon isActive={!!activeFilters['filterQuery-price']} />, [activeFilters['filterQuery-price']]);

  // Memoize event handlers to avoid recreating functions on each render
  const handleIngredientClick = useCallback(() => {
    onFilterChange('filterQuery-ingredient', activeFilters['filterQuery-ingredient'] ? null : 123);
  }, [onFilterChange, activeFilters]);

  const handleCookingStyleClick = useCallback(() => {
    onFilterChange('filterQuery-cookingStyle', activeFilters['filterQuery-cookingStyle'] ? null : 1);
  }, [onFilterChange, activeFilters]);

  const handleServingsClick = useCallback(() => {
    onFilterChange('filterQuery-servings', activeFilters['filterQuery-servings'] ? null : 'batch');
  }, [onFilterChange, activeFilters]);

  const handlePriceClick = useCallback(() => {
    onFilterChange('filterQuery-price', activeFilters['filterQuery-price'] ? null : '<5');
  }, [onFilterChange, activeFilters]);

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
    </div>
  );
}

export default FilterBar;
