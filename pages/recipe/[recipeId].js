import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import CookingStyleDropdown from '../../components/cookingStyleDropdown/cookingStyleDropdown.component'
import RecipeList from '../../components/RecipeList/RecipeList.component'
import IngredientList from '../../components/IngredientList/IngredientList.component'
import InstructionsList from '../../components/IntstructionsList/InstructionList.component'
import { recipeDetailsFetches } from '../../api/fresh_start_recipe_api'
import { useStoreLocation } from '../../context/StoreLocationContext'
import ClipLoader from 'react-spinners/ClipLoader'
import useSWR from 'swr'

const fetcher = async (recipeId, locationId) =>
  recipeDetailsFetches(recipeId, locationId).then(res => res.data)

const cookingStyleData = {
  0: { name: 'No Cooking Style', icon: '/none.svg' },
  1: { name: 'Microwave', icon: '/microwave.svg' },
  2: { name: 'Stove Top', icon: '/stove.svg' },
  3: { name: 'Oven', icon: '/oven.svg' },
};

function RecipePage({ initialData, recipeId }) {
  const { locationData } = useStoreLocation()
  const router = useRouter()
  const { recipeId: queryRecipeId } = router.query

  // Use SWR for fetching and caching data
  const { data, error, isValidating } = useSWR(
    queryRecipeId ? ['recipeDetails', queryRecipeId, locationData?.id] : null,
    ([, recipeId, locationId]) => fetcher(recipeId, locationId),
    { fallbackData: initialData, revalidateOnFocus: false }
  )

  const loading = !data && isValidating

  return (
    <main className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <div className="rounded-lg overflow-hidden shadow-md bg-white mb-4">
          <img
            className="w-full h-auto object-cover"
            src={`${data.attributes.image}`}
            alt={`${data.attributes.recipe_name}`}
          />
        </div>

        {/* Recipe name */}
        <h2 className="text-3xl font-semibold text-center text-green-600 mt-2 mb-2">
          {data.attributes.recipe_name}
        </h2>

        {/* Subheading for cooking styles */}
        {data.attributes.instructions.length > 0 && (
          <p className="text-center text-orange-500 text-lg font-medium mb-4">
            Cooking Styles:{' '}
            {data.attributes.instructions
              .map(
                style =>
                  cookingStyleData[style.cooking_style]?.name || 'Unknown'
              )
              .filter(Boolean) // Remove undefined or null values
              .join(', ')}
          </p>
        )}

        <div className="mb-6">
          <IngredientList ingredients={data.attributes.ingredients} />
        </div>

        <div className="mb-6">
          <RecipeList
            items={data.attributes.cookwares}
            title="Cookware List"
            key={1}
          />
        </div>

        {data.attributes.cooking_tips?.length > 0 && (
          <div className="mb-6">
            <RecipeList
              items={data.attributes.cooking_tips}
              title="Recipe Tips"
              key={2}
            />
          </div>
        )}

        {data.attributes.instructions.length === 1 ? (
          <InstructionsList
            instructions={data.attributes.instructions[0].instructions}
            cookingStyle={data.attributes.instructions[0].cooking_style}
          />
        ) : (
          data.attributes.instructions.map((style, index) => (
            <div key={style.cooking_style || `style-${index}`} className="mb-6">
              <CookingStyleDropdown
                cookingStyle={style.cooking_style}
                instructions={style.instructions}
              />
            </div>
          ))
        )}
      </div>
    </main>
  )
}

export async function getStaticProps({ params }) {
  const { recipeId } = params
  try {
    const response = await recipeDetailsFetches(recipeId)
    const initialData = response.data

    return {
      props: { initialData, recipeId },
      revalidate: 120
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      notFound: true,
      revalidate: 60
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default RecipePage
