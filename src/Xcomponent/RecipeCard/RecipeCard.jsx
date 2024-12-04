import Link from 'next/link'
import styles from './RecipeCard.module.css'

export function RecipeCard({
  recipe,
  excludedIngredients,
  onIngredientClick,
  recipeId
}) {
  const { recipe_name, serving_size, ingredients, image, total_price } = recipe

  const updatedTotalPrice = ingredients.reduce((sum, ingredient) => {
    const isExcluded = excludedIngredients[ingredient.ingredient]
    const price = isExcluded ? 0 : ingredient.price
    return sum + price
  }, 0)

  const renderIngredientRow = (ingredient, index) => {
    const isExcluded = excludedIngredients[ingredient.ingredient]
    return (
      <div className={styles.ingredientRow} key={index}>
        <button
          className={`${styles.ingredientButton} ${isExcluded ? styles.disabled : ''}`}
          onClick={() => onIngredientClick(ingredient.ingredient)}
        >
          {ingredient.ingredient}
        </button>
        <span
          className={`${styles.ingredientPrice} ${isExcluded ? styles.zeroed : ''}`}
        >
          ${isExcluded ? '0.00' : ingredient.price.toFixed(2)}
        </span>
      </div>
    )
  }

  return (
    <div
      className={styles.recipeCardWrap}
      alt={`Recipe card for ${recipe_name}`}
      tabIndex="0"
    >
      <Link href={`/recipe/${recipeId}`}>
        <a className={styles.recipeLink}>
          <h2 className={styles.recipeTitle}>{recipe_name}</h2>
          <img
            className={styles.recipeImage}
            src={image}
            alt={image.alt || `Image of ${recipe_name}`}
          />
        </a>
      </Link>
      <div className={styles.ingredientsBox}>
        {ingredients.map(renderIngredientRow)}
      </div>
      <div className={styles.recipeCardFooter}>
        <p className={styles.servingSize}>{`Servings: ${serving_size}`}</p>
        <p
          className={styles.totalCost}
        >{`Total Cost: $${updatedTotalPrice.toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export default RecipeCard