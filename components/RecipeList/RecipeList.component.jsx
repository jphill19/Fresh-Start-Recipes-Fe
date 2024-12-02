import { useState } from 'react';

function RecipeList({ items, title }) {
  const [open, setOpen] = useState(false);
  if (!items || items.length === 0) return null;

  const isTipsTitle = title === 'Recipe Tips';

  return (
    <ul
      className={`list-none p-0 mt-3 w-full border border-gray-600 rounded-lg bg-white shadow-lg ${
        open ? 'overflow-visible' : 'overflow-hidden'
      }`}
    >
      <button
        type="button"
        className={`flex items-center justify-between p-4 bg-gray-100 font-bold text-lg text-gray-800 cursor-pointer border-none outline-none transition-colors duration-200 w-full overflow-hidden text-ellipsis whitespace-nowrap ${
          isTipsTitle ? 'bg-gray-100 text-gray-800' : ''
        }`}
        onClick={() => setOpen(!open)}
      >
        {title} {isTipsTitle && '💡'}
        <img
          src={open ? '/caret-up-fill.svg' : '/caret-down-fill.svg'}
          alt={open ? 'Collapse' : 'Expand'}
          className="w-5 h-5 flex-shrink-0"
        />
      </button>
      {open && (
        <div className="bg-white w-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="p-4 text-gray-800 border-t border-gray-200 text-base transition-colors duration-200 w-full break-words"
            >
              <p className="m-0 pr-4 whitespace-normal break-words">{item}</p>
            </li>
          ))}
        </div>
      )}
    </ul>
  );
}

export default RecipeList;
