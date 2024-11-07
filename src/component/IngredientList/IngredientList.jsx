import './IngredientList.css';
import { useState } from 'react';

function IngredientList({ ingredients }) {
  const [excludedIngredients, setExcludedIngredients] = useState({});

  const handleIngredientClick = (ingredientName) => {
    setExcludedIngredients((prevState) => {
      const newState = { ...prevState };
      if (newState[ingredientName]) {
        delete newState[ingredientName];
      } else {
        newState[ingredientName] = true;
      }
      return newState;
    });
  };

  const totalPrice = ingredients.reduce((total, ingredient) => {
    const isExcluded = excludedIngredients[ingredient.ingredient];
    return total + (isExcluded ? 0 : ingredient.price);
  }, 0);

  return (
    <div className="ingredients-container">
      <h2>Ingredient List</h2>
      {ingredients.map((ingredient) => {
        const isExcluded = excludedIngredients[ingredient.ingredient] || false;

        return (
          <div key={ingredient.ingredient_id} className="individual-ingredient">
            <button
              className={`ingredient-button ${ingredient.ingredient} ${isExcluded ? 'disabled' : ''}`}
              onClick={() => handleIngredientClick(ingredient.ingredient)}
              >
              <p>{ingredient.ingredient}</p> <br />
              <p>{ingredient.quantity} {ingredient.measurement}</p> <br />
              <p>${isExcluded ? '0.00' : ingredient.price.toFixed(2)}</p>
            </button>
          </div>
        );
      })}
      <div className="total-price">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default IngredientList;