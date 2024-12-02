import { Fragment, useState } from 'react'

function FilterCheckBoxSearch({ options, name, searchValueSetter }) {
  const [selectedId, setSelectedId] = useState(null)

  const handleCheckboxChange = (id) => {
    setSelectedId(id)
    searchValueSetter(id)
  }

  return (
    <Fragment>
      <h2 className="text-lg font-semibold mb-4">{name}</h2>
      <div>
        {Object.entries(options).map(([id, label]) => (
          <div key={id} className="flex items-center gap-2 my-3">
            <input
              type="checkbox"
              id={`checkbox-${id}`}
              checked={selectedId === id}
              onChange={() => handleCheckboxChange(id)}
              className="peer appearance-none w-[18px] h-[18px] border-2 border-[#ff6b6b] rounded bg-transparent transition-colors duration-200 checked:bg-[#ff6b6b]"
            />
            <label
              htmlFor={`checkbox-${id}`}
              className="text-sm text-[#333] font-normal peer-checked:font-bold peer-checked:text-[#ff6b6b]"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default FilterCheckBoxSearch
