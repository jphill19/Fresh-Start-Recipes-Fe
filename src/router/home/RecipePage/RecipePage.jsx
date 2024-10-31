import IngredientManager from '../../../component/IngredientManager/IngredientManager';
import RecipeInstructions from '../../../component/RecipeInstructions/RecipeInstructions';
import RecipeTips from '../../../component/RecipeTips/RecipeTips';
import { useParams } from 'react';
import './RecipePage.css';

function RecipePage () {
  const { recipeId } = useParams();

  return (
    <p>I will be a component...</p>
  )
};

export default RecipePage;