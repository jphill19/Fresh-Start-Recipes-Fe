import './CookingStyleContainer.css';
import RecipeInstructions from '../../component/RecipeInstructions/RecipeInstructions.jsx';

function CookingStyleContainer({ cookingStyles }) {
  console.log('COOKINGSTYLES: ', cookingStyles)

  return (
    <div className="cooking-style-container">
      {cookingStyles.map((style, index) => (
        <>{console.log('Style: ', style.instructions)}
        <div key={index} className="cooking-style">
          <h4>Cooking Style: {style.cooking_style}</h4>
            <RecipeInstructions instructions={style.instructions} />
        </div>
        </>
      ))}
    </div>
  );
}

export default CookingStyleContainer;