import { useState } from 'react';

const cookingStyleData = {
  0: { name: 'No Cooking Style', icon: '/none.svg' },
  1: { name: 'Microwave', icon: '/microwave.svg' },
  2: { name: 'Stove Top', icon: '/stove.svg' },
  3: { name: 'Oven / Toaster Oven', icon: '/oven.svg' },
};

function CookingStyleDropdown({ cookingStyle, instructions }) {
  const [isOpen, setIsOpen] = useState(false);

  const validInstructions = Array.isArray(instructions) ? instructions : [];
  const sortedInstructions = [...validInstructions].sort(
    (a, b) => a.instruction_step - b.instruction_step
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const styleInfo = cookingStyleData[cookingStyle] || cookingStyleData[0];

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-full mb-4 transition-all duration-300 ease-in-out">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full text-left p-3 bg-white
                   font-semibold text-gray-800 text-lg rounded-md
                   hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
      >
        <div className="flex items-center space-x-2">
          <img src={styleInfo.icon} alt="" className="h-6 w-6" />
          <span>{styleInfo.name} Instructions</span>
        </div>
        <img
          src={isOpen ? '/caret-up-fill.svg' : '/caret-down-fill.svg'}
          alt={isOpen ? 'Collapse' : 'Expand'}
          className="w-6 h-6 flex-shrink-0"
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
        } overflow-hidden`}
      >
        {sortedInstructions.length === 0 ? (
          <p className="text-gray-600 text-sm">No instructions available.</p>
        ) : (
          <ul className="list-none p-0 m-0 space-y-3">
            {sortedInstructions.map((step, index) => (
              <li
                key={index}
                className="p-3 border-l-4 border-orange-400 bg-gray-50 rounded-sm"
              >
                <p className="font-bold text-green-600 mb-1 text-base">
                  Step {step.instruction_step}
                </p>
                <p className="text-gray-700 text-sm">{step.instruction}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CookingStyleDropdown;
