import { useState, useEffect } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

function RecipeContainer({ data = [] }) {
  const [excludedIngredients, setExcludedIngredients] = useState({})

  useEffect(() => {
    setExcludedIngredients({})
  }, [])

  const handleIngredientClick = (ingredientId) => {
    setExcludedIngredients((prevState) => {
      const newState = { ...prevState }
      if (newState[ingredientId]) {
        delete newState[ingredientId]
      } else {
        newState[ingredientId] = true
      }
      return newState
    })
  }

  return (
    <div className="flex flex-col items-center justify-center w-[95%] p-[8px] gap-[16px]">
      {data.length > 0 ? (
        data.map((recipe) => (
          <RecipeCard
            recipe={recipe.attributes}
            excludedIngredients={excludedIngredients}
            onIngredientClick={handleIngredientClick}
            key={recipe.id}
            recipeId={recipe.id}
          />
        ))
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  )
}

export default RecipeContainer