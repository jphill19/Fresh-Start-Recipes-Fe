import { useCallback, useMemo, useState } from 'react'
import FilterModal from '../filterModal/filterModal.component'

function FilterIcon({ isActive }) {
  return isActive ? (
    <img src="/white-x.svg" className="w-[12px] h-[12px] ml-[5px]" alt="x" />
  ) : (
    <img
      src="/caret-down-fill.svg"
      className="w-[12px] h-[12px] ml-[5px]"
      alt="drop down arrow"
    />
  )
}

function FilterBar({ onFilterChange, activeFilters }) {
  const [activeModal, setActiveModal] = useState(null)

  const closeModal = () => {
    setActiveModal(null)
  }

  const ingredientIcon = useMemo(
    () => <FilterIcon isActive={activeFilters['by_ingredient']} />,
    [activeFilters['by_ingredient']]
  )

  const cookingStyleIcon = useMemo(
    () => <FilterIcon isActive={activeFilters['by_style']} />,
    [activeFilters['by_style']]
  )

  const servingsIcon = useMemo(
    () => <FilterIcon isActive={activeFilters['by_serving']} />,
    [activeFilters['by_serving']]
  )

  const priceIcon = useMemo(
    () => <FilterIcon isActive={activeFilters['by_price']} />,
    [activeFilters['by_price']]
  )

  const handleFilterClick = useCallback(
    filterKey => {
      if (activeFilters[filterKey]) {
        onFilterChange(filterKey, null)
      } else {
        setActiveModal(filterKey)
      }
    },
    [onFilterChange, activeFilters]
  )

  return (
    <div
      className="flex gap-[10px] items-center mt-[5px] p-[10px] overflow-x-auto whitespace-normal break-words scrollbar-hide"
    >
      <div
        className={`inline-flex items-center py-[8px] px-[12px] rounded-[20px] bg-${
          activeFilters['by_ingredient'] ? 'black' : '[#f2f2f2]'
        } text-${
          activeFilters['by_ingredient'] ? 'white' : 'black'
        } font-semibold text-[0.7em] cursor-pointer whitespace-nowrap`}
        onClick={() => handleFilterClick('by_ingredient')}
      >
        Ingredient
        {ingredientIcon}
      </div>

      <div
        className={`inline-flex items-center py-[8px] px-[12px] rounded-[20px] bg-${
          activeFilters['by_style'] ? 'black' : '[#f2f2f2]'
        } text-${
          activeFilters['by_style'] ? 'white' : 'black'
        } font-semibold text-[0.7em] cursor-pointer whitespace-nowrap`}
        onClick={() => handleFilterClick('by_style')}
      >
        Cooking Style
        {cookingStyleIcon}
      </div>

      <div
        className={`inline-flex items-center py-[8px] px-[12px] rounded-[20px] bg-${
          activeFilters['by_serving'] ? 'black' : '[#f2f2f2]'
        } text-${
          activeFilters['by_serving'] ? 'white' : 'black'
        } font-semibold text-[0.7em] cursor-pointer whitespace-nowrap`}
        onClick={() => handleFilterClick('by_serving')}
      >
        Servings
        {servingsIcon}
      </div>

      <div
        className={`inline-flex items-center py-[8px] px-[12px] rounded-[20px] bg-${
          activeFilters['by_price'] ? 'black' : '[#f2f2f2]'
        } text-${
          activeFilters['by_price'] ? 'white' : 'black'
        } font-semibold text-[0.7em] cursor-pointer whitespace-nowrap`}
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
  )
}

export default FilterBar
