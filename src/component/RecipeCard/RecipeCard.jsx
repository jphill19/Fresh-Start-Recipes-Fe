import { Link } from 'react-router-dom';
import './RecipeCard.css';

export function RecipeCard ({ recipe }) {
  const {recipeId, title, servingSize, ingredients, image} = recipe;

  // The arrangment below is for the HORIZONTAL ORIENTATION of the the recipe card

  return (
    <div className={'recipe-card-wrap'} alt={`Recipe card for ${ title }`} tabindex='0'>
      <div className={'recipe-ingredient-and-image-display'} >
        <div className={ 'ingredients-box' }>
          {
            ingredients.map((ingredient) => {
              return (
                <div className={ `${ ingredient.name }-button ingredient-button-wrapper` } alt={ `${ ingredient.name }, click to remove ingredient from recipe list if you already have it.` }>
                  <button className={`button-element`}>{ ingredient.name }<span> {ingredient.price} </span></button>
                </div>
              )
            })
          }
        </div>
        <div className={ 'recipe-image-contianer' }>
          <Link to={ `/recipe/${ recipeId }` }>
            <img className={ 'recipe-image-actual' } src={ image.src } alt={ `${ image.alt }` } />
          </Link>
        </div>
      </div>
      <Link to={ `/recipe/${ recipeId }` }>
        <div className={ 'reipe-card-summary-bar' }>
          <p className={ 'total-cost' } alt={ `Total price is` }>{ /** calculation function */ }</p>
          <p className={ 'recipe-title' }>{ `${title}` }</p>
          <p className={ 'seving-size' }>{ `Servings: ${servingSize}` }</p>
        </div>
      </Link>
    </div>
  )

  // The arrangment below is for the VERTICAL ORIENTATION of the the recipe card

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
  //       <Link to={ `/recipe/${ recipeId }` }>
  //        <img className={ 'recipe-image-actual' } src={ image.src } alt={ `${ image.alt }` } />
  //       </Link>
  //     </div>
  //     <Link to={ `/recipe/${ recipeId }` }>
  //       <div className={ 'reipe-card-summary-bar' }>
  //         <p className={ 'total-cost' } alt={ `Total price is` }>{ /** calculation function */ }</p>
  //         <p className={ 'recipe-title' }>{ `${title}` }</p>
  //         <p className={ 'seving-size' }>{ `Servings: ${servingSize}` }</p>
  //       </div>
  //     </Link>
  //   </div>
  // )
}

export default RecipeCard;