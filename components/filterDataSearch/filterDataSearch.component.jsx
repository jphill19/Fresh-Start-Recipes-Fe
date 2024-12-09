import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { ingredientFilter } from '../../api/fresh_start_recipe_api'

function FilterDataSearch({ name, searchValueSetter }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const { data, error } = useSWR(
    debouncedTerm ? [debouncedTerm, 'for_ingredient='] : null,
    ([filter, params]) => ingredientFilter(filter, params),
    {
      dedupingInterval: 120000
    }
  )

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleRadioChange = item => {
    setSelectedId(item.id)
    searchValueSetter(item.attributes.name)
  }

  return (
    <>
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-gray-700">
        Input a name of an ingredient, then select from the radio buttons
      </p>
      <input
        type="text"
        placeholder="Search by Ingredient"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-[10px] mb-[12px] mt-2 text-sm border-2 border-[#ccc] rounded transition-colors duration-300 outline-none focus:border-orange-500"
      />
      <div>
        {error && (
          <p className="text-red-500">Error fetching data: {error.message}</p>
        )}
        {data && data.data.length > 0
          ? data.data.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
              >
              <input
                type="radio"
                id={`radio-${item.id}`} 
                name="ingredient"
                value={item.id}
                checked={selectedId === item.id}
                onChange={() => handleRadioChange(item)}
                className="
                  appearance-none
                  w-6 h-6
                  border-2 border-orange-500
                  rounded-full
                  bg-transparent
                  checked:border-green-500
                  checked:bg-green-400
                  text-green-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-500
                  focus:ring-offset-2
                  transition-colors
                  duration-200
                  peer
                "
                  style={{ aspectRatio: '1 / 1' }}
                />
                <label
                  htmlFor={`radio-${item.id}`} 
                  className="text-base text-gray-800 peer-checked:font-semibold peer-checked:text-orange-500 transition-all cursor-pointer"
                >
                  {item.attributes.name}
                </label>
              </div>
            ))
          : debouncedTerm && (
              <p className="text-gray-500">
                No ingredients found for "{debouncedTerm}".
              </p>
            )}
      </div>
    </>
  )
}

export default FilterDataSearch
