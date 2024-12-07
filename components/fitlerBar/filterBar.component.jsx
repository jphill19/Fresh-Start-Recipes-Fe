import { useCallback, useState } from 'react'
import FilterModal from '../filterModal/filterModal.component'

function FilterIcon({ isActive }) {
  return isActive ? (
    <img src="/white-x.svg" className="w-[16px] h-[16px] ml-[5px] mx-2" alt="x" />
  ) : (
    <img
      src="/caret-down-fill.svg"
      className="w-[16px] h-[16px] ml-[5px] mx-2"
      alt="drop down arrow"
    />
  )
}

function FilterBar({ onFilterChange, activeFilters }) {
  const [activeModal, setActiveModal] = useState(null)

  const closeModal = () => {
    setActiveModal(null)
  }

  const handleFilterClick = useCallback(
    (filterKey) => {
      if (activeFilters[filterKey]) {
        onFilterChange(filterKey, null)
      } else {
        setActiveModal(filterKey)
      }
    },
    [onFilterChange, activeFilters]
  )

  const filters = [
    { key: 'by_ingredient', label: 'Ingredient' },
    { key: 'by_style', label: 'Cooking Style' },
    { key: 'by_serving', label: 'Servings' },
    { key: 'by_price', label: 'Price' },
  ]

  return (
    <div
      className="flex gap-[10px] items-center mt-[5px] p-[10px] overflow-x-auto whitespace-normal break-words scrollbar-hide"
    >
      {filters.map(({ key, label }) => (
        <div
          key={key}
          className={`inline-flex items-center py-[8px] px-[12px] rounded-[20px] font-semibold text-[0.8em] cursor-pointer whitespace-nowrap ${
            activeFilters[key]
              ? 'bg-black bg-opacity-80 text-white'
              : 'bg-gray-200 bg-opacity-50 text-black'
          }`}
          onClick={() => handleFilterClick(key)}
        >
          {label}
          <FilterIcon isActive={activeFilters[key]} />
        </div>
      ))}

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
