import { useParams } from 'react-router-dom';
import './IngredientList.css';

function IngredientManager() {
  const { recipeId } = useParams();

  return (
    <div className={'ingredients-container'}>
      {
        recipeId.ingredients.map((ingredient) => {
          return (
            <div className={'individual-ingredient'}>
              
            </div>
          )
        })
      }
    </div>
  );
};

export default IngredientManager;