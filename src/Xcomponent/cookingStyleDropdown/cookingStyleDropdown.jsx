import { useState } from 'react'
import './cookingStyleDropdown.css'

const cookingStyleNames = {
  0: 'No Cooking Style',
  1: 'Microwave',
  2: 'Stove Top',
  3: 'Oven / Toaster Oven'
}

function CookingStyleDropdown({ cookingStyle, instructions }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ul className={isOpen ? 'list-container-open' : 'list-container'}>
      <button type="button" className="list-title" onClick={toggleDropdown}>
        {`${cookingStyleNames[cookingStyle]} Instructions`}
        <img
          src={isOpen ? '/caret-up-fill.svg' : '/caret-down-fill.svg'}
          alt={isOpen ? 'Collapse' : 'Expand'}
          className="caret-icon"
        />
      </button>
      {isOpen && (
        <div className="list-inner">
          {instructions.map(step => (
            <li
              key={step.instruction_step}
              className="individual-item-container"
            >
              <p>
                <strong>Step {step.instruction_step}:</strong>{' '}
                {step.instruction}
              </p>
            </li>
          ))}
        </div>
      )}
    </ul>
  )
}

export default CookingStyleDropdown
