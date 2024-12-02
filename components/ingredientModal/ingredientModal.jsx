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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
      <div className="bg-white rounded-lg p-5 w-4/5 max-w-[500px] max-h-[80vh] shadow-lg relative z-[1001] flex flex-col animate-fadeIn">
        <IngredientDataSearch
          quantity={quantity}
          setQuantity={setQuantity}
          measurement={measurement}
          setMeasurement={setMeasurement}
          setIngredient={setIngredient}
          setPrice={setPrice}
          setProductId={setProductId}
        />
        <div className="flex justify-end gap-2.5 mt-5">
          <button
            className="py-2.5 px-4 rounded cursor-pointer text-base bg-[#f0f0f0] text-[#333]"
            onClick={onClose}
          >
            Reset
          </button>
          <button
            className="py-2.5 px-4 rounded cursor-pointer text-base bg-[#ff6b6b] text-white"
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
