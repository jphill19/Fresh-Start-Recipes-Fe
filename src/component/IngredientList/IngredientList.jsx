import './IngredientList.css';

function IngredientList({ ingredients }) {
  console.log('ingredients: ', ingredients)

  const totalCost = ingredients.reduce((total, ingredient) => {
    return total + ingredient.price;
  }, 0);

  return (
    <div className="ingredients-container">
      <h2>Ingredient List</h2>
      {
        ingredients.map((ingredient, index) => (
          <div key={index} className="individual-ingredient">
            <p>{ingredient.ingredient}</p>
            <p>{ingredient.quantity} {ingredient.measurement}</p>
            <p>${ingredient.price.toFixed(2)}</p>
          </div>
        ))
      }
      <div className="total-price">
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default IngredientList;