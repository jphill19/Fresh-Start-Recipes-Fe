import { Fragment, useState, useEffect } from 'react'

function FilterToggleSwitch({ name, searchValueSetter }) {
  const [isSingle, setIsSingle] = useState(true)

  useEffect(() => {
 
    searchValueSetter(isSingle ? 'Single' : 'Multiple')
  }, [isSingle, searchValueSetter])

  const handleToggle = () => {
    const newValue = isSingle ? 'Multiple' : 'Single'
    setIsSingle(!isSingle)
    searchValueSetter(newValue)
  }

  return (
    <Fragment>
     <h2 className="font-bold text-lg">{name}</h2>
      <div
        className="relative flex w-[200px] h-[50px] rounded-[25px] bg-[#ccc] cursor-pointer items-center justify-between mt-[10px] mx-auto transition-colors duration-300"
        onClick={handleToggle}
      >
        <span
          className={`relative  w-1/2 text-center z-20 transition-colors duration-300 ${
            isSingle ? 'text-white font-bold' : ''
          }`}
        >
          Single
        </span>
        <span
          className={`relative  w-1/2 text-center z-20 transition-colors duration-300 ${
            !isSingle ? 'text-white font-bold' : ''
          }`}
        >
          Multiple
        </span>
        <div
          className={`absolute top-0 left-0 w-1/2 h-full rounded-[25px] bg-orange-500 transition-transform duration-300 z-10 ${
            isSingle ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
      </div>
    </Fragment>
  )
}

export default FilterToggleSwitch
