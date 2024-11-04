import {useParams} from 'react-router-dom';
import 'RecipeCookware.css';

function RecipeCookware () {
  const {recipeId} = useParams();

  return (
    <p>I will be a component...</p>
  )
}

export default RecipeCookware;