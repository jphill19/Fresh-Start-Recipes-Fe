import { useParams } from 'react-router-dom';
import './IngredientList.css';

function IngredientList({ ingredients }) {
  console.log('ingredients: ', ingredients)

  return (
    <div className={'ingredients-container'}>
      {/* {
        recipeId.ingredients.map((ingredient) => {
          return (
            <div className={'individual-ingredient'}>
              
            </div>
          )
        })
      } */}
    </div>
  );
};

export default IngredientList;