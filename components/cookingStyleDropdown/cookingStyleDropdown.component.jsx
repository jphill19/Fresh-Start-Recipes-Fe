import { useState } from 'react';

const cookingStyleNames = {
  0: 'No Cooking Style',
  1: 'Microwave',
  2: 'Stove Top',
  3: 'Oven / Toaster Oven'
};

function CookingStyleDropdown({ cookingStyle, instructions }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul
      className={`list-none p-0 mt-3 w-full border border-gray-600 rounded-lg bg-white shadow-lg ${
        isOpen ? 'overflow-visible' : 'overflow-hidden'
      }`}
    >
      <button
        type="button"
        className="flex items-center justify-between p-4 bg-gray-100 font-bold text-lg text-gray-800 cursor-pointer border-none outline-none transition-colors duration-200 w-full overflow-hidden text-ellipsis whitespace-nowrap"
        onClick={toggleDropdown}
      >
        {`${cookingStyleNames[cookingStyle]} Instructions`}
        <img
          src={isOpen ? '/caret-up-fill.svg' : '/caret-down-fill.svg'}
          alt={isOpen ? 'Collapse' : 'Expand'}
          className="w-5 h-5 flex-shrink-0"
        />
      </button>
      {isOpen && (
        <div className="bg-white w-full">
          {instructions.map((step) => (
            <li
              key={step.instruction_step}
              className="p-4 text-gray-800 border-t border-gray-200 text-base transition-colors duration-200 w-full break-words"
            >
              <p className="m-0 pr-4 whitespace-normal break-words">
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
