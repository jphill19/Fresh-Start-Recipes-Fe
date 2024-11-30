import React from 'react';
import styles from './InstructionList.module.css'

function InstructionsList({ instructions }) {
  if (!instructions || instructions.length === 0) {
    return <p>No instructions available.</p>;
  }

  return (
    <div className={styles.instructionsContainer} data-testid="instructions-container">
      <h2 className={styles.instructionsTitle} aria-label="Cooking Instructions">
        Cooking Instructions
      </h2>
      <ul className={styles.instructionsList} aria-label="List of instructions">
        {instructions.map((step) => (
          <li key={step.instruction_step} className={styles.instructionItem}>
            <p className={styles.instructionStep}>Step {step.instruction_step}</p>
            <p className={styles.instructionText}>{step.instruction}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstructionsList;
