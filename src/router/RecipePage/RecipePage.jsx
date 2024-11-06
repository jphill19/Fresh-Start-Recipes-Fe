import IngredientList from '../../component/IngredientList/IngredientList.jsx';
import RecipeCookware from '../../component/RecipeCookware/RecipeCookware.jsx';
import RecipeInstructions from '../../component/RecipeInstructions/RecipeInstructions.jsx';
import RecipeTips from '../../component/RecipeTips/RecipeTips.jsx';
import { useParams } from 'react-router-dom';
import CookingStyleContainer from '../../component/CookingStyleContainer/CookingStyleContainer.jsx';
import { recipeDetailsFetches } from '../../api/fresh_start_recipe_api';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function RecipePage() {
  const [data, setData] = useState({});
  const { recipeId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await recipeDetailsFetches(recipeId);
        setData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData({});
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [recipeId]);

  return (
    <div className="recipe-page-container">
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <>
          <div className="recipe-image-container">
            <img src="/taco.jpeg" alt="Recipe" />
          </div>
          <p className={'recipe-page-title'} >{data.attributes.recipe_name}</p>
          {data.attributes && (
            <>
              <IngredientList ingredients={data.attributes.ingredients} />
              <RecipeCookware cookwares={data.attributes.cookwares} />
              <RecipeTips cookingTips={data.attributes.cooking_tips} />
              <CookingStyleContainer 
                cookingStyles={data.attributes.instructions} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default RecipePage;