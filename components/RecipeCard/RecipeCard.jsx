import Link from 'next/link'
import Image from 'next/image'

export function RecipeCard({
  recipe,
  excludedIngredients,
  onIngredientClick,
  recipeId
}) {
  const { recipe_name, serving_size, ingredients, image } = recipe

  // Calculate the updated total price
  const updatedTotalPrice = ingredients.reduce((sum, ingredient) => {
    const isExcluded = excludedIngredients[ingredient.ingredient]
    const price = isExcluded ? 0 : ingredient.price
    return sum + price
  }, 0)

  // Render each ingredient row
  const renderIngredientRow = (ingredient, index) => {
    const isExcluded = excludedIngredients[ingredient.ingredient]
    return (
      <div className="flex items-center" key={index}>
        <button
          className={`flex-grow p-[10px] bg-[#f7f7f7] border border-[#e2e2e2] rounded text-left text-[0.9em] text-[#333333] cursor-pointer mr-[8px] whitespace-normal overflow-hidden text-ellipsis ${
            isExcluded ? 'bg-[#d3d3d3] text-[#888888] line-through' : ''
          }`}
          onClick={() => onIngredientClick(ingredient.ingredient)}
        >
          {ingredient.ingredient}
        </button>
        <span
          className={`text-[0.9em] text-[#555555] min-w-[60px] text-right ${
            isExcluded ? 'text-[#888888] line-through' : ''
          }`}
        >
          ${isExcluded ? '0.00' : ingredient.price.toFixed(2)}
        </span>
      </div>
    )
  }

  return (
    <div
      className="bg-white border border-[#e2e2e2] rounded-[8px] p-[16px] my-[16px] mx-auto w-[90%] max-w-[600px] shadow-sm"
      tabIndex="0"
    >
      <Link href={`/recipe/${recipeId}`}>
        <h2 className="text-[1.5em] text-[#333333] mb-[12px] cursor-pointer">
          {recipe_name}
        </h2>
        <Image
          className="w-full h-auto rounded-[8px] object-cover mb-[16px]"
          src={image}
          alt={image.alt || `Image of ${recipe_name}`}
          width={300}
          height={200}
        />
      </Link>
      <div className="flex flex-col gap-[8px] mb-[16px]">
        {ingredients.map(renderIngredientRow)}
      </div>
      <div className="flex justify-between text-[0.9em] text-[#555555] border-t border-[#e2e2e2] pt-[12px]">
        <p className="m-0">{`Servings: ${serving_size}`}</p>
        <p className="m-0">{`Total Cost: $${updatedTotalPrice.toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export default RecipeCard
