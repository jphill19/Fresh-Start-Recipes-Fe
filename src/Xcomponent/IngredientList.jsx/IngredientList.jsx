import './IngredientList.css'
import { useStoreLocation } from '../../../context/StoreLocationContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function IngredientList({ ingredients, servingSize, recipeId }) {
  const [excludedIngredients, setExcludedIngredients] = useState({})
  const { locationData } = useStoreLocation()
  const navigate = useNavigate()

  const handleIngredientClick = ingredientName => {
    setExcludedIngredients(prevState => {
      const newState = { ...prevState }
      if (newState[ingredientName]) {
        delete newState[ingredientName]
      } else {
        newState[ingredientName] = true
      }
      return newState
    })
  }

  const totalPrice = ingredients.reduce((total, ingredient) => {
    const isExcluded = excludedIngredients[ingredient.ingredient]
    return total + (isExcluded ? 0 : ingredient.price)
  }, 0)

  const totalPriceLabel = locationData
    ? `${locationData.name} Total Price`
    : 'Total Price'

  return (
    <div className="ingredients-container">
      <h2 className="ingredient-list-title">Ingredient List</h2>
      {servingSize && (
        <p className="serving-size">Serving Size: {servingSize}</p>
      )}

      {ingredients.map((ingredient, index) => {
        const isExcluded = excludedIngredients[ingredient.ingredient] || false

        return (
          <div key={index} className="individual-ingredient">
            <button
              className={`ingredient-button ${isExcluded ? 'disabled' : ''}`}
              onClick={() => handleIngredientClick(ingredient.ingredient)}
            >
              <div className="ingredient-info">
                <p className="ingredient-name">{ingredient.ingredient}</p>
                <p className="ingredient-measurement">
                  {ingredient.quantity} {ingredient.measurement}
                </p>
              </div>
              <p className="ingredient-price">
                ${isExcluded ? '0.00' : ingredient.price.toFixed(2)}
              </p>
            </button>
          </div>
        )
      })}

      <div className="total-price">
        <p className="total-price-label">{totalPriceLabel}</p>
        <p className="total-price-amount">${totalPrice.toFixed(2)}</p>
      </div>

      {locationData.id === null && (
        <button
          className="set-location-button"
          onClick={() => navigate(`/location/${recipeId}`)}
        >
          Get Prices for a local store
        </button>
      )}
    </div>
  )
}

export default IngredientList
