
import FilterDataSearch from '../filterDataSearch/filterDataSearch.component';
import FilterCheckBoxSearch from '../filterCheckBoxSearch/filterCheckBoxSearch.component';
import FilterToggleSwitch from '../filterToggleSwitch/filterToggleSwitch.component';
import './filterBar.css'

function FilterBar({ onFilterChange, activeFilters }) {
  return (
    <div className='filter-bar-container'>
      <div
        className={`filter-component ${activeFilters['filterQuery-ingredient'] ? 'highlighted' : ''}`}
        onClick={() => onFilterChange('filterQuery-ingredient', activeFilters['filterQuery-ingredient'] ? null : 123)} // Replace 123 with actual ID
      >
        Ingredient
        <img src="/caret-down-fill.svg" className="dropdown-arrow"/>
      </div>
      <div
        className={`filter-component ${activeFilters['filterQuery-cookingStyle'] ? 'highlighted' : ''}`}
        onClick={() => onFilterChange('filterQuery-cookingStyle', activeFilters['filterQuery-cookingStyle'] ? null : 1)} // Example enum value
      >
        Cooking Style
        <img src="/caret-down-fill.svg" className="dropdown-arrow"/>
      </div>
      <div
        className={`filter-component ${activeFilters['filterQuery-servings'] ? 'highlighted' : ''}`}
        onClick={() => onFilterChange('filterQuery-servings', activeFilters['filterQuery-servings'] ? null : 'batch')}
      >
        Servings
        <img src="/caret-down-fill.svg" className="dropdown-arrow"/>
      </div>
      <div
        className={`filter-component ${activeFilters['filterQuery-price'] ? 'highlighted' : ''}`}
        onClick={() => onFilterChange('filterQuery-price', activeFilters['filterQuery-price'] ? null : '<5')}
      >
        Price
        <img src="/caret-down-fill.svg" className="dropdown-arrow"/>
      </div>
    </div>
  );
}

export default FilterBar;
