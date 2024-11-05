import './IngredientList.css';

function IngredientList({ ingredients }) {
  console.log('ingredients: ', ingredients)

  return (
    <div className="ingredients-container">
      {
        ingredients.map((ingredient, index) => (
          <div key={index} className="individual-ingredient">
            <p>Name: {ingredient.ingredient}</p>
            <p>Measurement: {ingredient.measurement}</p>
            <p>Price: {ingredient.price}</p>
          </div>
        ))
      }
    </div>
  );
}

export default IngredientList;