import { useState } from 'react';
import { useRouter } from 'next/router';
import { useStoreLocation } from '../../context/StoreLocationContext';
import styles from './IngredientList.module.css'; // CSS Modules

function IngredientList({ ingredients, servingSize, recipeId }) {
  const [excludedIngredients, setExcludedIngredients] = useState({});
  const { locationData } = useStoreLocation();
  const router = useRouter();

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

  const totalPrice = ingredients.reduce((total, ingredient) => {
    const isExcluded = excludedIngredients[ingredient.ingredient];
    return total + (isExcluded ? 0 : ingredient.price);
  }, 0);

  const totalPriceLabel = locationData ? `${locationData.name} Total Price` : 'Total Price';

  return (
    <div className={styles.ingredientsContainer}>
      <h2 className={styles.ingredientListTitle}>Ingredient List</h2>
      {servingSize && <p className={styles.servingSize}>Serving Size: {servingSize}</p>}

      {ingredients.map((ingredient, index) => {
        const isExcluded = excludedIngredients[ingredient.ingredient] || false;

        return (
          <div key={index} className={styles.individualIngredient}>
            <button
              className={`${styles.ingredientButton} ${isExcluded ? styles.disabled : ''}`}
              onClick={() => handleIngredientClick(ingredient.ingredient)}
            >
              <div className={styles.ingredientInfo}>
                <p className={styles.ingredientName}>{ingredient.ingredient}</p>
                <p className={styles.ingredientMeasurement}>
                  {ingredient.quantity} {ingredient.measurement}
                </p>
              </div>
              <p className={styles.ingredientPrice}>
                ${isExcluded ? '0.00' : ingredient.price.toFixed(2)}
              </p>
            </button>
          </div>
        );
      })}

      <div className={styles.totalPrice}>
        <p className={styles.totalPriceLabel}>{totalPriceLabel}</p>
        <p className={styles.totalPriceAmount}>${totalPrice.toFixed(2)}</p>
      </div>

      {locationData?.id === null && (
        <button
          className={styles.setLocationButton}
          onClick={() => router.push(`/location/${recipeId}`)}
        >
          Get Prices for a Local Store
        </button>
      )}
    </div>
  );
}

export default IngredientList;
