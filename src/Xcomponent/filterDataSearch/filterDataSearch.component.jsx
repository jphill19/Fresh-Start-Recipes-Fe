import { Fragment, useState, useEffect } from 'react'
import { ingredientFilter } from '../../../api/fresh_start_recipe_api'
import './filterDataSearch.css'

function FilterDataSearch({ name, searchValueSetter }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  const [results, setResults] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedTerm) {
        try {
          const data = await ingredientFilter(debouncedTerm)
          setResults(data.data)
        } catch (error) {
          console.error('Error fetching data:', error)
          setResults([])
        }
      } else {
        setResults([])
      }
    }

    fetchData()
  }, [debouncedTerm])

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleCheckboxChange = item => {
    setSelectedId(item.id)
    searchValueSetter(item.attributes.name)
  }

  return (
    <Fragment>
      <h2>{name}</h2>
      <p>Input a name of an ingredient then select from checkbox</p>
      <input
        type="text"
        placeholder="Search by Ingredient"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <div>
        {results.length > 0
          ? results.map(item => (
              <div key={item.id} className="filter-checkbox">
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  checked={selectedId === item.id}
                  onChange={() => handleCheckboxChange(item)}
                  maxLength="40"
                />
                <label htmlFor={`checkbox-${item.id}`}>
                  {item.attributes.name}
                </label>
              </div>
            ))
          : debouncedTerm && (
              <p className="no-results-message">
                No ingredients found for "{debouncedTerm}".
              </p>
            )}
      </div>
    </Fragment>
  )
}

export default FilterDataSearch
