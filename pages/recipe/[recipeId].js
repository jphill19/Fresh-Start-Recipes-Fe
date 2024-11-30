import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import CookingStyleDropdown from '../../component/cookingStyleDropdown/cookingStyleDropdown.component'
import RecipeList from '../../component/RecipeList/RecipeList.component';
import IngredientList from '../../component/IngredientList/IngredientList.component';
// import InstructionsList from '../../components/InstructionsList/InstructionsList.component';
import InstructionsList from '../../component/IntstructionsList/InstructionList.component';
import { recipeDetailsFetches } from '../../api/fresh_start_recipe_api';
import { useStoreLocation } from '../../context/StoreLocationContext';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from '../../styles/recipepage.module.css';


function RecipePage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { locationData } = useStoreLocation();
  const router = useRouter();
  const { recipeId } = router.query;

  useEffect(() => {
    if (!recipeId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await recipeDetailsFetches(recipeId, locationData ? locationData.id : undefined);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData({});
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [recipeId, locationData]);

  return (
    <Fragment>
      {loading ? (
        <div className={styles.loaderContainer}>
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : Object.keys(data).length ? (
        <>
          <img
            className={styles.recipePageImage}
            src={`${data.attributes.image}`}
            alt={`${data.attributes.recipe_name}`}
          />
          <h2 className={styles.recipePageTitle}>{data.attributes.recipe_name}</h2>
          {data.attributes && (
            <>
              <IngredientList
                ingredients={data.attributes.ingredients}
                servingSize={data.attributes.serving_size}
                recipeId={recipeId}
              />
              <RecipeList items={data.attributes.cookwares} title="Cookware List" />
              {data.attributes.cooking_tips && data.attributes.cooking_tips.length > 0 && (
                <RecipeList items={data.attributes.cooking_tips} title="Recipe Tips" />
              )}
              {data.attributes.instructions.length === 1 ? (
                <InstructionsList instructions={data.attributes.instructions[0].instructions} />
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
      ) : (
        <p>Something went wrong...</p>
      )}
    </Fragment>
  );
}

export default RecipePage;
