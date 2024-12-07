import { Link } from 'react-router-dom';
import './RecipeCard.css';

export function RecipeCard ({ recipe , excludedIngredients, onIngredientClick, recipeId}) {
  const { recipe_name, serving_size, ingredients, image, total_price} = recipe;
  
  const updatedTotalPrice = ingredients.reduce((sum, ingredient) => {
    const isExcluded = excludedIngredients[ingredient.ingredient];
    const price = isExcluded ? 0 : ingredient.price;
    return sum + price;
  }, 0);

    const renderIngredientRow = (ingredient, index) => {
      const isExcluded = excludedIngredients[ingredient.ingredient];
      return (
        <div className="ingredient-row" key={index}>
          <button
            className={`ingredient-button ${isExcluded ? 'disabled' : ''}`}
            onClick={() => onIngredientClick(ingredient.ingredient)}
          >
            {ingredient.ingredient}
          </button>
          <span className={`ingredient-price ${isExcluded ? 'zeroed' : ''}`}>
            ${isExcluded ? '0.00' : ingredient.price.toFixed(2)}
          </span>
        </div>
      );
    };
  
  return (
    <div className="recipe-card-wrap" aria-label={`Recipe card for ${recipe_name}`} tabIndex="0">
      <Link to={`/recipe/${recipeId}`} className="recipe-link">
        <h2 className="recipe-title">{recipe_name}</h2>
        <img className="recipe-image" src={`${recipe.image}`} alt={`Image of ${recipe.recipe_name}` }/>
      </Link>
      <div className="ingredients-box">
        {ingredients.map(renderIngredientRow)}
      </div>
      <div className="recipe-card-footer">
        <p className="serving-size">{`Servings: ${serving_size}`}</p>
        <p className="total-cost">{`Total Cost: $${updatedTotalPrice.toFixed(2)}`}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
