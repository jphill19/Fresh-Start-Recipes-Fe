import { useCallback, useMemo, useState } from 'react';
import styles from './FilterBar.module.css'; // Use CSS Modules
import FilterModal from '../filterModal/filterModal.component';

function FilterIcon({ isActive }) {
  return isActive ? (
    <img src="/white-x.svg" className={styles.xIcon} alt="x" />
  ) : (
    <img src="/caret-down-fill.svg" className={styles.dropdownArrow} alt="drop down arrow" />
  );
}

function FilterBar({ onFilterChange, activeFilters }) {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => {
    setActiveModal(null);
  };

  const ingredientIcon = useMemo(
    () => <FilterIcon isActive={activeFilters['by_ingredient']} />,
    [activeFilters['by_ingredient']]
  );

  const cookingStyleIcon = useMemo(
    () => <FilterIcon isActive={activeFilters['by_style']} />,
    [activeFilters['by_style']]
  );

  const servingsIcon = useMemo(
    () => <FilterIcon isActive={activeFilters['by_serving']} />,
    [activeFilters['by_serving']]
  );

  const priceIcon = useMemo(
    () => <FilterIcon isActive={activeFilters['by_price']} />,
    [activeFilters['by_price']]
  );

  const handleFilterClick = useCallback(
    (filterKey) => {
      if (activeFilters[filterKey]) {
        onFilterChange(filterKey, null);
      } else {
        setActiveModal(filterKey);
      }
    },
    [onFilterChange, activeFilters]
  );

  return (
    <div className={styles.filterBarContainer}>
      <div
        className={`${styles.filterComponent} ${
          activeFilters['by_ingredient'] ? styles.highlighted : ''
        }`}
        onClick={() => handleFilterClick('by_ingredient')}
      >
        Ingredient
        {ingredientIcon}
      </div>

      <div
        className={`${styles.filterComponent} ${
          activeFilters['by_style'] ? styles.highlighted : ''
        }`}
        onClick={() => handleFilterClick('by_style')}
      >
        Cooking Style
        {cookingStyleIcon}
      </div>

      <div
        className={`${styles.filterComponent} ${
          activeFilters['by_serving'] ? styles.highlighted : ''
        }`}
        onClick={() => handleFilterClick('by_serving')}
      >
        Servings
        {servingsIcon}
      </div>

      <div
        className={`${styles.filterComponent} ${
          activeFilters['by_price'] ? styles.highlighted : ''
        }`}
        onClick={() => handleFilterClick('by_price')}
      >
        Price
        {priceIcon}
      </div>

      {activeModal && (
        <FilterModal
          onClose={closeModal}
          activeModal={activeModal}
          onFilterChange={onFilterChange}
          activeFilters={activeFilters}
        />
      )}
    </div>
  );
}

export default FilterBar;
