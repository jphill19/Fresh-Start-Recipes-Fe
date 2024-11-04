import IngredientList from '../../../component/IngredientList/IngredientList.jsx';
import RecipeCookware from '../../../component/RecipeCookware/RecipeCookware.jsx';
import RecipeInstructions from '../../../component/RecipeInstructions/RecipeInstructions';
import RecipeTips from '../../../component/RecipeTips/RecipeTips';
import {useParams} from 'react-router-dom';
import './RecipePage.css';
import CookingStyleContainer from '../../../component/CookingStyleContainer/CookingStyleContainer.jsx';

function RecipePage () {
  const { recipeId } = useParams();

  return (
    <div className={'recipe-page-container'}>
      <div className={'recipe-image-container'}>
        <img src={recipeId.image.src} alt={recipeId.image.alt} />
      </div>
      <IngredientList />
      <RecipeCookware />
      <RecipeTips />
      <CookingStyleContainer />
      <RecipeInstructions />
    </div>
  );
};

export default RecipePage;