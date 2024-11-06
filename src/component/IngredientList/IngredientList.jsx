import './IngredientList.css';

function IngredientList({ ingredients }) {
  console.log('ingredients: ', ingredients)

  return (
    <div className="ingredients-container">
      <h2>Ingredient List</h2>
      {
        ingredients.map((ingredient, index) => (
          <div key={index} className="individual-ingredient">
            <p>{ingredient.ingredient}</p>
            <p>{ingredient.quantity} {ingredient.measurement}</p>
            <p>${ingredient.price}</p>
          </div>
        ))
      }
    </div>
  );
}

export default IngredientList;