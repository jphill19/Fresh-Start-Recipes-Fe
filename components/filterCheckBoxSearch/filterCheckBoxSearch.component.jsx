import { Fragment, useState } from 'react';

function FilterCheckBoxSearch({ options, name, searchValueSetter }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedId(id);
    searchValueSetter(id);
  };

  return (
    <Fragment>
      <h2 className="font-bold text-lg">{name}</h2>
      <div>
        {Object.entries(options).map(([id, label]) => (
          <div
            key={id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
          >
            <input
              type="radio"
              id={`radio-${id}`} // Matches the label's htmlFor
              name="ingredient"
              value={id}
              checked={selectedId === id}
              onChange={() => handleCheckboxChange(id)}
              className="
                appearance-none
                w-6 h-6
                border-2 border-orange-500
                rounded-full
                bg-transparent
                checked:border-green-500
                checked:bg-green-400
                text-green-500
                focus:outline-none
                focus:ring-2
                focus:ring-orange-500
                focus:ring-offset-2
                transition-colors
                duration-200
                peer
              "
              style={{ aspectRatio: '1 / 1' }}
            />
            <label
              htmlFor={`radio-${id}`} // Matches the input's id
              className="text-base text-gray-800 peer-checked:font-semibold peer-checked:text-orange-500 transition-all"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default FilterCheckBoxSearch;