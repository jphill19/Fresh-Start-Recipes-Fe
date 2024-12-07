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
<div className="w-full p-4 space-y-4">
{data.length > 0 ? (
  data.map((recipe, index) => (
    <RecipeCard
      recipe={recipe.attributes}
      excludedIngredients={excludedIngredients}
      onIngredientClick={handleIngredientClick}
      key={recipe.id || `recipe-${index}`} // Fallback key
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
