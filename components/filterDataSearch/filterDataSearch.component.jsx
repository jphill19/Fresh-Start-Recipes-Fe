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

  const handleCheckboxChange = item => {
    setSelectedId(item.id)
    searchValueSetter(item.attributes.name)
  }

  return (
    <>
      <h2>{name}</h2>
      <p>Input a name of an ingredient, then select from the checkbox</p>
      <input
        type="text"
        placeholder="Search by Ingredient"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-[10px] mb-[12px] text-sm border-2 border-[#ccc] rounded transition-colors duration-300 outline-none focus:border-[#ff6b6b]"
      />
      <div>
        {error && (
          <p className="text-red-500">
            Error fetching data: {error.message}
          </p>
        )}
        {data && data.data.length > 0
          ? data.data.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-2 p-2 rounded transition-colors duration-200 cursor-pointer hover:bg-[#f7f7f7]"
              >
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  checked={selectedId === item.id}
                  onChange={() => handleCheckboxChange(item)}
                  className="appearance-none w-[18px] h-[18px] border-2 border-[#ff6b6b] rounded bg-transparent transition-colors duration-200 checked:bg-[#ff6b6b] peer"
                />
                <label
                  htmlFor={`checkbox-${item.id}`}
                  className="text-sm text-[#333] peer-checked:font-bold peer-checked:text-[#ff6b6b]"
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