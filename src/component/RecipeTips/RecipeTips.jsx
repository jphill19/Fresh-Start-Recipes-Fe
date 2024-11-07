import './RecipeTips.css';

function RecipeTips ({ cookingTips }) {
  
  // Cooking tips for Recipe #3 displaying duplicate tips
  if (!cookingTips.length) {
    return
  } else {
    return (
      <div className="cooking-tips-container">
      {
        cookingTips.map((cookingTip, index) => (
          <div key={index} className="individual-cooking-tip-container">
            <p>{cookingTip}</p>
          </div>
        ))
      }
    </div>
    )
  }
};

export default RecipeTips;