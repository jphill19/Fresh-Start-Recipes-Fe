import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function RecipeCard({
  recipe,
  excludedIngredients,
  onIngredientClick,
  recipeId
}) {
  const { recipe_name, serving_size, ingredients, image } = recipe

  const [isUpdating, setIsUpdating] = useState(false)

  const [totalPrice, setTotalPrice] = useState(() =>
    ingredients.reduce((sum, ingredient) => {
      const isExcluded = excludedIngredients[ingredient.ingredient]
      return sum + (isExcluded ? 0 : ingredient.price)
    }, 0)
  )

  useEffect(() => {
    const newTotal = ingredients.reduce((sum, ingredient) => {
      const isExcluded = excludedIngredients[ingredient.ingredient]
      return sum + (isExcluded ? 0 : ingredient.price)
    }, 0)

    if (newTotal !== totalPrice) {
      setIsUpdating(true)
      setTimeout(() => setIsUpdating(false), 300) 
      setTotalPrice(newTotal)
    }
  }, [excludedIngredients, ingredients, totalPrice])

  const renderIngredientRow = (ingredient, index) => {
    const isExcluded = excludedIngredients[ingredient.ingredient]
    return (
      <div
        key={ingredient.ingredient || `ingredient-${index}`} 
        className="flex items-center p-2 border-b border-gray-100"
      >
        <label className="flex items-center w-full">
          <input
            type="checkbox"
            checked={isExcluded}
            onChange={() => onIngredientClick(ingredient.ingredient)}
            className="form-checkbox h-4 w-4 text-green-600 mr-2 focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 border border-orange-400 rounded-sm"
          />
          <span
            className={`text-sm pr-1 ${
              isExcluded ? 'text-gray-500 line-through' : 'text-gray-800'
            }`}
          >
            {ingredient.ingredient}
          </span>
          <span
            className={`text-sm ml-auto ${
              isExcluded ? 'text-gray-500 line-through' : 'text-gray-700'
            }`}
          >
            ${isExcluded ? '0.00' : ingredient.price.toFixed(2)}
          </span>
        </label>
      </div>
    )
  }
  const uniqueIngredients = Array.from(
    new Map(ingredients.map(item => [item.ingredient, item])).values()
  )

  return (
    <div
      className="rounded-lg border border-gray-200 bg-gradient-to-b from-white via-[#f9fdf9] to-white px-3 pt-3 pb-4 shadow-sm w-full"
      tabIndex="0"
    >
      <Link href={`/recipe/${recipeId}`}>
        <div className="active:bg-gray-200 transition-transform active:scale-95 cursor-pointer">
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={image.alt || `Image of ${recipe_name}`}
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold mt-2 flex items-center justify-between text-green-600">
            {recipe_name}
            <div className="flex items-center space-x-2">
            <img
                src="/chef-hat.svg"
                alt="Icon"
                className="h-5 w-5"
              />
              <span className="text-orange-400 text-lg">&rarr;</span>
            </div>
          </h2>
        </div>
      </Link>

      <div className="border-b border-gray-200 my-2"></div>

      <div className="flex flex-col gap-2 mb-4 pointer-events-auto">
        {uniqueIngredients.map(renderIngredientRow)}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-700 pt-3 border-t border-gray-300">
        <p className="m-0 font-medium">{`Servings: ${serving_size}`}</p>
        <p
          className={`m-0 font-medium transition-all duration-300 ${
            isUpdating
              ? 'opacity-50 translate-y-[-5px]'
              : 'opacity-100 translate-y-0'
          }`}
        >
          {`Total Cost: $${totalPrice.toFixed(2)}`}
        </p>
      </div>
    </div>
  )
}

export default RecipeCard
