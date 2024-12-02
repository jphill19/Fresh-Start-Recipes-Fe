import { useState } from 'react'
import FilterDataSearch from '../filterDataSearch/filterDataSearch.component'
import FilterCheckBoxSearch from '../filterCheckBoxSearch/filterCheckBoxSearch.component'
import FilterToggleSwitch from '../filterToggleSwitch/filterToggleSwitch.component'

function FilterModal({ onClose, activeModal, onFilterChange }) {
  const [searchValue, setSearchValue] = useState(null)

  const searchValueSetter = value => {
    setSearchValue(value)
  }

  const handleResultSearch = () => {
    onFilterChange(activeModal, searchValue)
    onClose()
  }

  const renderFilterContent = () => {
    switch (activeModal) {
      case 'by_ingredient':
        return (
          <FilterDataSearch
            name="Filter by an ingredient"
            searchValueSetter={searchValueSetter}
          />
        )
      case 'by_style':
        return (
          <FilterCheckBoxSearch
            options={{
              3: 'Oven',
              1: 'Microwave',
              2: 'Stove',
              0: 'None required'
            }}
            name="Filter by a preferred cooking style"
            searchValueSetter={searchValueSetter}
          />
        )
      case 'by_serving':
        return (
          <FilterToggleSwitch
            options={{
              3: 'Oven',
              1: 'Microwave',
              2: 'Stove',
              0: 'None required'
            }}
            name="Filter by Servings"
            searchValueSetter={searchValueSetter}
          />
        )
      case 'by_price':
        return (
          <FilterCheckBoxSearch
            options={{
              0: 'Less than $5',
              2: 'Less than $10',
              3: 'Greater than $10'
            }}
            name="Filter by Prices"
            searchValueSetter={searchValueSetter}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-5 w-4/5 max-w-[500px] max-h-[80vh] shadow-lg relative z-50 animate-fadeIn flex flex-col overflow-visible">
        {renderFilterContent()}
        <div className="flex justify-end gap-[10px] mt-5">
          <button
            className="py-[10px] px-[15px] border-none rounded cursor-pointer text-base bg-[#f0f0f0] text-[#333]"
            onClick={onClose}
          >
            Reset
          </button>
          <button
            className="py-[10px] px-[15px] border-none rounded cursor-pointer text-base bg-[#ff6b6b] text-white"
            onClick={handleResultSearch}
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
