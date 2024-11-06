import './RecipeInstructions.css';

function RecipeInstructions ({ instructions }) {
  console.log('INSTRUCTIONS: ', instructions)
  return (
    <div className="instructions-container">
      <h3>Instructions:</h3>
      {instructions.map((style, index) => (
        <div key={index} className="cooking-style">
          <p>Step {style.instruction_step}: {style.instruction}</p>
        </div>
      ))}
    </div>
  )
};

export default RecipeInstructions;