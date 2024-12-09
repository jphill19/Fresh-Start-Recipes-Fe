import { Fragment, useState, useEffect } from 'react'
import { ingredientFilter } from '../../api/fresh_start_recipe_api'


function FilterDataSearch({
  setQuantity,
  setMeasurement,
  setProductId,
  setPrice,
  setIngredient,
  quantity,
  measurement
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  const [results, setResults] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedTerm) {
        try {
          const data = await ingredientFilter(debouncedTerm, 'for_dev=')
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

  const handleSearchChange = (event, setData) => {
    setData(event.target.value)
  }

  const handleCheckboxChange = ingredient => {
    setSelectedId(ingredient.product_ID)
    setPrice(ingredient.price)
    setIngredient(ingredient.description)
    setProductId(ingredient.product_ID)
  }

  return (
    <Fragment>
      <input
        type="number"
        placeholder="Quantity"
        name="quantity"
        onChange={event => handleSearchChange(event, setQuantity)}
        value={quantity}
        required
      />
      <input
        type="text"
        placeholder="Unit of Measure"
        name="measurement"
        onChange={event => handleSearchChange(event, setMeasurement)}
        value={measurement}
        required
      />
      <h2>Ingredient</h2>
      <p>Input a name of an ingredient then select from checkbox</p>
      <input
        type="text"
        placeholder="Search by Ingredient"
        value={searchTerm}
        onChange={event => handleSearchChange(event, setSearchTerm)}
        className="search-input"
      />

      <div>
        {results.length > 0
          ? results.map(ingredient => (
              <div key={ingredient.product_ID} className="filter-checkbox">
                <input
                  type="checkbox"
                  id={`checkbox-${ingredient.product_ID}`}
                  checked={selectedId === ingredient.product_ID}
                  onChange={() => handleCheckboxChange(ingredient)}
                />
                <label htmlFor={`checkbox-${ingredient.product_ID}`}>
                  {ingredient.description}
                  {ingredient.price}
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
