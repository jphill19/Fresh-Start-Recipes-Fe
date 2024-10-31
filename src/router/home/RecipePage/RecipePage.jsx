import { useParams } from 'react';
import './RecipePage.css';

function RecipePage () {
  const { recipeId } = useParams();

  return (
    <p>I will be a component...</p>
  )
};

export default RecipePage;