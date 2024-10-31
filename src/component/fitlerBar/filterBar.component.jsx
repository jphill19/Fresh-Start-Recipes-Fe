import './filterBar.css'
import FilterDataSearch from '../filterDataSearch/filterDataSearch.component';
import FilterCheckBoxSearch from '../filterCheckBoxSearch/filterCheckBoxSearch.component';
import FilterToggleSwitch from '../filterToggleSwitch/filterToggleSwitch.component';

function FilterBar() {

  return (
    <div className='filter-bar-container'>
      <FilterDataSearch/>
      <FilterCheckBoxSearch />
      <FilterToggleSwitch />
      <FilterCheckBoxSearch />
    </div>
  );
}

export default FilterBar;