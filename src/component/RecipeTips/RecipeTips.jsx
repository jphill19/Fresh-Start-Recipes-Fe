import { useParams } from 'react-router-dom';
import './RecipeTips.css';

function RecipeTips () {
  const {recipeId} = useParams();
  
  return (
    <p>I will be a component...</p>
  )
};

export default RecipeTips;