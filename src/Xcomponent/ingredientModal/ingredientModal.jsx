// import './filterModal.css'
import IngredientDataSearch from '../ingredientDataSearch/ingredientDataSearch'
import { useState } from 'react'

function IngredientModal({ onClose, onFilterChange }) {
  const [searchValue, setSearchValue] = useState(null)
  const [quantity, setQuantity] = useState('')
  const [measurement, setMeasurement] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [productId, setProductId] = useState('')

  const searchValueSetter = value => {
    setSearchValue(value)
  }

  const handleResultSearch = () => {
    const ingredientObject = {
      quantity: quantity,
      measurement: measurement,
      ingredient: ingredient,
      price: price,
      productId: productId
    }
    onFilterChange(ingredientObject)
    onClose()
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <IngredientDataSearch
          quantity={quantity}
          setQuantity={setQuantity}
          measurement={measurement}
          setMeasurement={setMeasurement}
          setIngredient={setIngredient}
          setPrice={setPrice}
          setProductId={setProductId}
        />
        <div className="modal-actions">
          <button className="modal-button reset" onClick={onClose}>
            Reset
          </button>
          <button
            className="modal-button view-results"
            onClick={handleResultSearch}
          >
            Add Ingredient
          </button>
        </div>
      </div>
    </div>
  )
}

export default IngredientModal
