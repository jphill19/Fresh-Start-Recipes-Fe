import { Link } from 'react-router-dom';
import './RecipeCard.css';

export function RecipeCard ({ recipe , excludedIngredients, onIngredientClick}) {
  const {recipeId, recipe_name, serving_size, ingredients, image, total_price} = recipe;

  
    const updatedTotalPrice = ingredients.reduce((sum, ingredient) => {
      const isExcluded = excludedIngredients[ingredient.ingredient_id];
      const price = isExcluded ? 0 : ingredient.price;
      return sum + price;
    }, 0);

    const renderIngredientRow = (ingredient, index) => {
      const isExcluded = excludedIngredients[ingredient.ingredient_id];
      return (
        <div className="ingredient-row" key={index}>
          <button
            className={`ingredient-button ${isExcluded ? 'disabled' : ''}`}
            onClick={() => onIngredientClick(ingredient.ingredient_id)}
          >
            {ingredient.ingredient}
          </button>
          <span className={`ingredient-price ${isExcluded ? 'zeroed' : ''}`}>
            ${isExcluded ? '0.00' : ingredient.price.toFixed(2)}
          </span>
        </div>
      );
    };
  
  return (
    <div className="recipe-card-wrap" alt={`Recipe card for ${recipe_name}`} tabIndex="0">
      <Link to={`/recipe/${recipeId}`} className="recipe-link">
        <h2 className="recipe-title">{recipe_name}</h2>
        <img className="recipe-image" src={image} alt={image.alt} />
      </Link>
      <div className="ingredients-box">
        {ingredients.map(renderIngredientRow)}
      </div>
      <div className="recipe-card-footer">
        <p className="serving-size">{`Servings: ${serving_size}`}</p>
        <p className="total-cost">{`Total Cost: $${updatedTotalPrice.toFixed(2)}`}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
  // return (
  //   <div className={'recipe-card-wrap'} alt={`Recipe card for ${ title }`} tabindex='0'>
  //     <div className={'recipe-ingredient-and-image-display'} >
  //       <div className={ 'ingredients-box' }>
  //         {
  //           ingredients.map((ingredient) => {
  //             return (
  //               <div className={ `${ ingredient }-button ingredient-button-wrapper` } alt={ `${ ingredient }, click to remove ingredient from recipe list if you already have it.` }>
  //                 <button className={`button-element`}>{ ingredient.name }<span> {ingredient.price} </span></button>
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //       <Link to={ `/recipe/${ recipeId }` }>
  //        {/* <img className={ 'recipe-image-actual' } src={ image.src } alt={ `${ image.alt }` } /> */}
  //        <img className={ 'recipe-image-actual' } src={'/taco.jpeg' } alt={ `${ image.alt }` } />
  //       </Link>
  //     </div>
  //     <Link to={ `/recipe/${ recipeId }` }>
  //       <div className={ 'reipe-card-summary-bar' }>
  //         <p className={ 'total-cost' } alt={ `Total price is` }>{ /** calculation function */ }</p>
  //         <p className={ 'recipe-title' }>{ `${title}` }</p>
  //         <p className={ 'seving-size' }>{ `Servings: ${serving_size}` }</p>
  //       </div>
  //     </Link>
  //   </div>
  // )



  // The arrangment below is for the HORIZONTAL ORIENTATION of the the recipe card

  // return (
  //   <div className={'recipe-card-wrap'} alt={`Recipe card for ${ title }`} tabindex='0'>
  //     <div className={'recipe-ingredient-and-image-display'} >
  //       <div className={ 'ingredients-box' }>
  //         {
  //           ingredients.map((ingredient) => {
  //             return (
  //               <div className={ `${ ingredient.name }-button ingredient-button-wrapper` } alt={ `${ ingredient.name }, click to remove ingredient from recipe list if you already have it.` }>
  //                 <button className={`button-element`}>{ ingredient.name }<span> {ingredient.price} </span></button>
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //       <div className={ 'recipe-image-contianer' }>
  //         <Link to={ `/recipe/${ recipeId }` }>
  //           <img className={ 'recipe-image-actual' } src={ image.src } alt={ `${ image.alt }` } />
  //         </Link>
  //       </div>
  //     </div>
  //     <Link to={ `/recipe/${ recipeId }` }>
  //       <div className={ 'reipe-card-summary-bar' }>
  //         <p className={ 'total-cost' } alt={ `Total price is` }>{ /** calculation function */ }</p>
  //         <p className={ 'recipe-title' }>{ `${title}` }</p>
  //         <p className={ 'seving-size' }>{ `Servings: ${serving_size}` }</p>
  //       </div>
  //     </Link>
  //   </div>
  // )

  // The arrangment below is for the VERTICAL ORIENTATION of the the recipe card