import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import CookingStyleDropdown from '../../components/cookingStyleDropdown/cookingStyleDropdown.component';
import RecipeList from '../../components/RecipeList/RecipeList.component';
import IngredientList from '../../components/IngredientList/IngredientList.component';
import InstructionsList from '../../components/IntstructionsList/InstructionList.component';
import { recipeDetailsFetches } from '../../api/fresh_start_recipe_api';
import { useStoreLocation } from '../../context/StoreLocationContext';
import ClipLoader from 'react-spinners/ClipLoader';
import useSWR from 'swr';

const fetcher = async (recipeId, locationId) =>
  recipeDetailsFetches(recipeId, locationId).then((res) => res.data);

function RecipePage({ initialData, recipeId }) {
  const { locationData } = useStoreLocation();
  const router = useRouter();
  const { recipeId: queryRecipeId } = router.query;

  // Use SWR for fetching and caching data
  const { data, error, isValidating } = useSWR(
    queryRecipeId
      ? ['recipeDetails', queryRecipeId, locationData?.id]
      : null,
    ([, recipeId, locationId]) => fetcher(recipeId, locationId),
    { fallbackData: initialData, revalidateOnFocus: false }
  );

  const loading = !data && isValidating;

  return (
    <Fragment>
      {loading ? (
        <div className="flex justify-center items-center h-[200px]">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : error || !data ? (
        <p>Something went wrong...</p>
      ) : (
        <>
          <img
            className="w-[800px] max-w-full h-auto block mx-auto"
            style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)' }}
            src={`${data.attributes.image}`}
            alt={`${data.attributes.recipe_name}`}
          />
          <h2
            className="text-[2rem] text-[#333] font-bold mt-2 mb-4 tracking-[1px] text-center overflow-hidden text-ellipsis whitespace-normal"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
          >
            {data.attributes.recipe_name}
          </h2>
          {data.attributes && (
            <>
              <IngredientList
                ingredients={data.attributes.ingredients}
                servingSize={data.attributes.serving_size}
                recipeId={queryRecipeId}
              />
              <RecipeList
                items={data.attributes.cookwares}
                title="Cookware List"
              />
              {data.attributes.cooking_tips &&
                data.attributes.cooking_tips.length > 0 && (
                  <RecipeList
                    items={data.attributes.cooking_tips}
                    title="Recipe Tips"
                  />
                )}
              {data.attributes.instructions.length === 1 ? (
                <InstructionsList
                  instructions={data.attributes.instructions[0].instructions}
                />
              ) : (
                data.attributes.instructions.map((style, index) => (
                  <CookingStyleDropdown
                    key={index}
                    cookingStyle={style.cooking_style}
                    instructions={style.instructions}
                  />
                ))
              )}
            </>
          )}
        </>
      )}
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  const { recipeId } = params;
  try {
    const response = await recipeDetailsFetches(recipeId);
    const initialData = response.data;

    return {
      props: { initialData, recipeId },
      revalidate: 120,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
      revalidate: 60,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default RecipePage;
