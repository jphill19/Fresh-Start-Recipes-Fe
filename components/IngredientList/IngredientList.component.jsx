import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStoreLocation } from "../../context/StoreLocationContext";

function IngredientList({ ingredients, servingSize, recipeId }) {
  const [excludedIngredients, setExcludedIngredients] = useState({});
  const { locationData } = useStoreLocation();
  const router = useRouter();

  const [isUpdating, setIsUpdating] = useState(false);
  const [totalPrice, setTotalPrice] = useState(() =>
    ingredients.reduce((sum, ingredient) => {
      const isExcluded = excludedIngredients[ingredient.ingredient];
      return sum + (isExcluded ? 0 : ingredient.price);
    }, 0)
  );

  const totalPriceLabel = locationData
    ? `${locationData.name} Total Price`
    : "Total Price";

  const handleIngredientClick = (ingredientName) => {
    setExcludedIngredients((prevState) => {
      const newState = { ...prevState };
      if (newState[ingredientName]) {
        delete newState[ingredientName];
      } else {
        newState[ingredientName] = true;
      }
      return newState;
    });
  };

  // Animate price changes:
  useEffect(() => {
    const newTotal = ingredients.reduce((sum, ingredient) => {
      const isExcluded = excludedIngredients[ingredient.ingredient];
      return sum + (isExcluded ? 0 : ingredient.price);
    }, 0);

    if (newTotal !== totalPrice) {
      setIsUpdating(true);
      setTimeout(() => setIsUpdating(false), 300); // Reset after animation
      setTotalPrice(newTotal);
    }
  }, [excludedIngredients, ingredients, totalPrice]);

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-full">
      <h2 className="text-lg font-semibold text-green-600 flex items-center mb-4">
        <img src="/recipe.svg" alt="Ingredients" className="h-10 w-10 mr-2" />
        Ingredient List
      </h2>

      {servingSize && (
        <p className="text-base text-gray-600 mb-4">
          Serving Size: {servingSize}
        </p>
      )}

      <div className="flex flex-col gap-2 mb-4">
        {ingredients.map((ingredient, index) => {
          const isExcluded = excludedIngredients[ingredient.ingredient] || false;
          return (
            <div key={index} className="flex items-center p-2 border-b border-gray-100">
              <label className="flex items-center w-full cursor-pointer">
                <input
                  type="checkbox"
                  checked={isExcluded}
                  onChange={() => handleIngredientClick(ingredient.ingredient)}
                  className="form-checkbox h-4 w-4 text-green-500 mr-2 focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 border border-orange-400 rounded-sm"
                />
                <div className="flex flex-col">
                  <span
                    className={`text-sm font-medium ${
                      isExcluded ? "text-gray-500 line-through" : "text-gray-800"
                    }`}
                  >
                    {ingredient.ingredient}
                  </span>
                  <span className="text-xs text-gray-500">
                    {ingredient.quantity} {ingredient.measurement}
                  </span>
                </div>
                <span
                  className={`ml-auto text-sm font-bold ${
                    isExcluded ? "text-gray-500 line-through" : "text-gray-800"
                  }`}
                >
                  ${isExcluded ? "0.00" : ingredient.price.toFixed(2)}
                </span>
              </label>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-gray-300 text-sm text-gray-700">
        <p className="m-0 font-medium">{totalPriceLabel}</p>
        <p
          className={`m-0 font-medium transition-all duration-300 ${
            isUpdating ? "opacity-50 translate-y-[-5px]" : "opacity-100 translate-y-0"
          }`}
        >
          ${totalPrice.toFixed(2)}
        </p>
      </div>

      {locationData?.id === null && (
        <button
          className="block w-full p-3 mt-4 bg-orange-500 text-white font-bold rounded-md 
                     transition-colors duration-200 hover:bg-orange-600 active:bg-orange-700"
          onClick={() => router.push(`/location/${recipeId}`)}
        >
          Get Prices for a Local Store
        </button>
      )}
    </div>
  );
}

export default IngredientList;