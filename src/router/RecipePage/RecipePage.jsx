import CookingStyleDropdown from '../../component/cookingStyleDropdown/cookingStyleDropdown.jsx';
import RecipeList from '../../component/RecipeList/RecipeList.jsx';
import IngredientList from '../../component/IngredientList.jsx/IngredientList.jsx';
import { useParams } from 'react-router-dom';
import { recipeDetailsFetches } from '../../api/fresh_start_recipe_api.js';
import { useState, useEffect, Fragment } from 'react';
import { useStoreLocation } from '../../context/StoreLocationContext';
import './RecipePage.css'
import ClipLoader from "react-spinners/ClipLoader";
import InstructionsList from '../../component/IntstructionsList/InstructionList.jsx';

function RecipePage() {
  const [data, setData] = useState({});
  const { recipeId } = useParams();
  const [loading, setLoading] = useState(true);
  const {locationData} = useStoreLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await recipeDetailsFetches(recipeId, locationData ? locationData.id : undefined);
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
    <Fragment>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <>
          <h2 className="recipe-page-title">{data.attributes.recipe_name}</h2>
          <img className="recipe-page-image" src={`${data.attributes.image}`} alt={`${data.attributes.recipe_name}`}/>
          {data.attributes && (
            <>
              <IngredientList ingredients={data.attributes.ingredients} servingSize={data.attributes.serving_size} recipeId={recipeId}/>
              <RecipeList items={data.attributes.cookwares} title="Cookware List" />
              {data.attributes.cooking_tips && data.attributes.cooking_tips.length > 0 && (
                <RecipeList items={data.attributes.cooking_tips} title="Recipe Tips" />
              )}
              {data.attributes.instructions.length === 1 ? (
                <InstructionsList instructions={data.attributes.instructions[0].instructions}/>
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

export default RecipePage;
