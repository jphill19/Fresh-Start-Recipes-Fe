import './RecipeInstructions.css';
import { useState } from 'react';

function RecipeInstructions({ instructions, style }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h3 className={`cooking-style`} onClick={() => setOpen(!open)}>Cooking Style: {style}</h3>
      {
        open && 
        <div className="instructions-container">
          <h4>Instructions:</h4>
          {instructions.map((style, index) => (
            <div key={index} className="cooking-instruction">
              <p>Step {style.instruction_step}: {style.instruction}</p>
            </div>
          ))}
        </div>
      }
    </>
  )
};

export default RecipeInstructions;