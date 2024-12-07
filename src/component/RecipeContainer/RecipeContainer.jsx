import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeContainer.css';
import { useState, useEffect } from 'react';

function RecipeContainer({ data = [] }) { 
  const [excludedIngredients, setExcludedIngredients] = useState({});
  
  useEffect(() => {
    setExcludedIngredients({});
  }, []);

  const handleIngredientClick = (ingredientId) => {
    setExcludedIngredients((prevState) => {
      const newState = { ...prevState };
      if (newState[ingredientId]) {
        delete newState[ingredientId];
      } else {
        newState[ingredientId] = true;
      }
      return newState;
    });
  };

  return (
    <div className="recipes-container">
      {data.length > 0 ? (
        data.map((recipe) => (
          <RecipeCard
            recipe={recipe.attributes}
            excludedIngredients={excludedIngredients}
            onIngredientClick={handleIngredientClick}
            key={recipe.id} 
            recipeId = {recipe.id}
          />
        ))
      ) : (
        <p>No recipes available.</p> 
      )}
    </div>
  );
}

export default RecipeContainer;