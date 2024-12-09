import { useState, useRef } from "react";

function RecipeList({ items, title }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null); // Move this above the conditional return

  // If items are empty or not provided, return null
  if (!items || items.length === 0) return null;

  const isTipsTitle = title === "Recipe Tips";
  const icon = isTipsTitle ? "/lightbulb.svg" : "/cookware.svg";
  const iconAlt = isTipsTitle ? "Tips" : "Cookware";

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-full mb-4 transition-all duration-300 ease-in-out">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left p-3 bg-white
                   font-semibold text-gray-800 text-lg rounded-md
                   hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center space-x-2">
          <img src={icon} alt={iconAlt} className="h-6 w-6" />
          <span>{title}</span>
        </div>
        <img
          src={open ? "/caret-up-fill.svg" : "/caret-down-fill.svg"}
          alt={open ? "Collapse" : "Expand"}
          className="w-6 h-6 flex-shrink-0"
        />
      </button>

      <div
        ref={contentRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <ul className="bg-white w-full list-none p-0 m-0">
          {items.map((item, index) => (
            <li
              key={index}
              className="p-3 text-gray-700 border-t border-gray-200 text-sm break-words hover:bg-gray-50"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeList;
