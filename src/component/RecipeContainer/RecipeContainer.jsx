import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeContainer.css';

function RecipeContainer({ data = [] }) { 
  console.log("data", data);
  return (
    <div className="recipes-container">
      {data.length > 0 ? (
        data.map((recipe) => (
          <RecipeCard
            recipe={recipe.attributes} 
            key={recipe.id} 
          />
        ))
      ) : (
        <p>No recipes available.</p> 
      )}
    </div>
  );
}

export default RecipeContainer;