import { useState } from 'react'
import './RecipeList.css'

function RecipeList({ items, title }) {
  const [open, setOpen] = useState(false)
  if (!items || items.length === 0) return null

  const isTipsTitle = title === 'Recipe Tips'

  return (
    <ul className={open ? 'list-container-open' : 'list-container'}>
      <button
        type="button"
        className={`list-title ${isTipsTitle ? 'tips-title' : ''}`}
        onClick={() => setOpen(!open)}
      >
        {title} {isTipsTitle && '💡'}
        <img
          src={open ? '/caret-up-fill.svg' : '/caret-down-fill.svg'}
          alt={open ? 'Collapse' : 'Expand'}
          className="caret-icon"
        />
      </button>
      {open && (
        <div className="list-inner">
          {items.map((item, index) => (
            <li key={index} className="individual-item-container">
              <p>{item}</p>
            </li>
          ))}
        </div>
      )}
    </ul>
  )
}

export default RecipeList
