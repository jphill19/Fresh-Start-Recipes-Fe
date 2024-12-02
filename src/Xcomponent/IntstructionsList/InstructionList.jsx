import React from 'react'

import './InstructionList.css'

function InstructionsList({ instructions }) {
  if (!instructions || instructions.length === 0) {
    return <p>No instructions available.</p>
  }

  return (
    <div
      className="instructions-container"
      data-testid="instructions-container"
    >
      <h2 className="instructions-title" aria-label="Cooking Instructions">
        Cooking Instructions
      </h2>
      <ul className="instructions-list" aria-label="List of instructions">
        {instructions.map(step => (
          <li key={step.instruction_step} className="instruction-item">
            <p className="instruction-step">Step {step.instruction_step}</p>
            <p className="instruction-text">{step.instruction}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InstructionsList
