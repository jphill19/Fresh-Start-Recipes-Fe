import { useState } from 'react'
import { useRouter } from 'next/router'
import { useStoreLocation } from '../../context/StoreLocationContext'

function IngredientList({ ingredients, servingSize, recipeId }) {
  const [excludedIngredients, setExcludedIngredients] = useState({})
  const { locationData } = useStoreLocation()
  const router = useRouter()

  const handleIngredientClick = (ingredientName) => {
    setExcludedIngredients((prevState) => {
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
    <div className="max-w-[600px] mx-auto p-[20px] bg-white rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <h2 className="text-left text-[#ff6b6b] mb-[20px] text-[1.7em] font-bold tracking-[1px]">
        Ingredient List
      </h2>
      {servingSize && (
        <p className="text-base text-[#666666] mb-[12px]">
          Serving Size: {servingSize}
        </p>
      )}

      {ingredients.map((ingredient, index) => {
        const isExcluded = excludedIngredients[ingredient.ingredient] || false

        return (
          <div key={index} className="mb-[12px]">
            <button
              className={`flex justify-between items-center py-0 px-3 bg-${
                isExcluded ? '[#f2f2f2]' : '[#f9f9f9]'
              } border border-[#ddd] rounded-[6px] text-[0.95em] text-${
                isExcluded ? '[#999999]' : '[#333]'
              } ${
                isExcluded ? 'cursor-not-allowed line-through' : 'cursor-pointer'
              } w-full transition-colors duration-200`}
              onClick={() => handleIngredientClick(ingredient.ingredient)}
            >
              <div className="flex flex-col items-start">
                <p className="font-bold text-[#333333] mb-1">
                  {ingredient.ingredient}
                </p>
                <p className="text-[#666666] text-[0.9em]">
                  {ingredient.quantity} {ingredient.measurement}
                </p>
              </div>
              <p className="text-[#333333] font-bold text-right min-w-[60px]">
                $
                {isExcluded
                  ? '0.00'
                  : ingredient.price.toFixed(2)}
              </p>
            </button>
          </div>
        )
      })}

      <div className="flex justify-between items-center pt-[16px] border-t border-t-[#e0e0e0] text-[1.1em] font-bold text-[#333333] mt-[20px]">
        <p className="text-[1.1em] text-[#333333]">
          {totalPriceLabel}
        </p>
        <p className="text-[1.1em] font-bold text-right text-[#333333] min-w-[60px]">
          ${totalPrice.toFixed(2)}
        </p>
      </div>

      {locationData?.id === null && (
        <button
          className="block p-3 mt-[16px] bg-[#ff6b6b] text-white text-base font-bold border-none rounded-[6px] cursor-pointer text-center transition-colors duration-300 ease-in-out hover:bg-[#e85c5c] hover:shadow-md active:bg-[#d14d4d]"
          onClick={() => router.push(`/location/${recipeId}`)}
        >
          Get Prices for a Local Store
        </button>
      )}
    </div>
  )
}

export default IngredientList
