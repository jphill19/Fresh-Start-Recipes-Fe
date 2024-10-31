import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeContainer.css';

function RecipeContainer ({ data }) {
  let recipeList = data;

  return (
    <div className={ 'recipes-container' }>
      {
        recipeList.map((recipe) => {
          return(
            <RecipeCard recipe={ recipe } />
          )
        })
      }
    </div>
  )
};

export default RecipeContainer;