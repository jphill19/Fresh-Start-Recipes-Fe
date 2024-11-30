import { useState } from 'react';
import styles from '../RecipeList/RecipeList.module.css'

const cookingStyleNames = {
  0: 'No Cooking Style',
  1: 'Microwave',
  2: 'Stove Top',
  3: 'Oven / Toaster Oven',
};

function CookingStyleDropdown({ cookingStyle, instructions }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className={isOpen ? styles.listContainerOpen : styles.listContainer}>
      <button
        type="button"
        className={styles.listTitle}
        onClick={toggleDropdown}
      >
        {`${cookingStyleNames[cookingStyle]} Instructions`}
        <img
          src={isOpen ? '/caret-up-fill.svg' : '/caret-down-fill.svg'}
          alt={isOpen ? "Collapse" : "Expand"}
          className={styles.caretIcon}
        />
      </button>
      {isOpen && (
        <div className={styles.listInner}>
          {instructions.map((step) => (
            <li key={step.instruction_step} className={styles.individualItemContainer}>
              <p>
                <strong>Step {step.instruction_step}:</strong> {step.instruction}
              </p>
            </li>
          ))}
        </div>
      )}
    </ul>
  );
}

export default CookingStyleDropdown;
