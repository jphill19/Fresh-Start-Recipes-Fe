import { useState } from "react";
import styles from './RecipeList.module.css'; // Use CSS Modules

function RecipeList({ items, title }) {
  const [open, setOpen] = useState(false);
  if (!items || items.length === 0) return null;

  const isTipsTitle = title === "Recipe Tips";

  return (
    <ul className={open ? styles.listContainerOpen : styles.listContainer}>
      <button
        type="button"
        className={`${styles.listTitle} ${isTipsTitle ? styles.tipsTitle : ""}`}
        onClick={() => setOpen(!open)}
      >
        {title} {isTipsTitle && "💡"}
        <img
          src={open ? '/caret-up-fill.svg' : '/caret-down-fill.svg'}
          alt={open ? "Collapse" : "Expand"}
          className={styles.caretIcon}
        />
      </button>
      {open && (
        <div className={styles.listInner}>
          {items.map((item, index) => (
            <li key={index} className={styles.individualItemContainer}>
              <p>{item}</p>
            </li>
          ))}
        </div>
      )}
    </ul>
  );
}

export default RecipeList;
