import React from "react";

const cookingStyleData = {
  0: { name: "No Cooking Style", icon: "/none.svg" },
  1: { name: "Microwave", icon: "/microwave.svg" },
  2: { name: "Stove Top", icon: "/pan.svg" },
  3: { name: "Oven / Toaster Oven", icon: "/oven.svg" },
};

function InstructionsList({ instructions, cookingStyle }) {


  if (!instructions || instructions.length === 0) {
    return <p>No instructions available.</p>;
  }

  
  const sortedInstructions = [...instructions].sort(
    (a, b) => a.instruction_step - b.instruction_step
  );

  return (
    <div
      className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-full"
      data-testid="instructions-container"
    >
      <h2 className="text-lg p-3 font-semibold mb-3 flex items-center">
        <img
          src={cookingStyleData[cookingStyle]?.icon || "/none.svg"}
          alt=""
          className="h-5 w-5 mr-2"
        />
        Cooking Instructions
      </h2>
      <ul className="list-none p-0 m-0" aria-label="List of instructions">
        {sortedInstructions.map((step) => (
          <li
            key={step.instruction_step} 
            className="mb-3 p-3 border-l-4 border-orange-400 bg-gray-50 rounded-sm"
          >
            <p className="font-bold text-green-600 mb-1 text-base">
              Step {step.instruction_step}
            </p>
            <p className="text-gray-700 text-sm">{step.instruction}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstructionsList;