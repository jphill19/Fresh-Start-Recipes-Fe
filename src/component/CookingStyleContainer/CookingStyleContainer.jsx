import './CookingStyleContainer.css';
import { useState } from 'react';
import RecipeInstructions from '../../component/RecipeInstructions/RecipeInstructions.jsx';

function CookingStyleContainer({ cookingStyles }) {

  return (
      cookingStyles.map((style, index) => (
        <RecipeInstructions instructions={style.instructions} style={style.cooking_style} />
      ))
  );
}

export default CookingStyleContainer;