import { useRouter } from 'next/router'

function FilterResults({ resultsCount }) {
  const router = useRouter()

  const handleReset = () => {
    router.push('/')
  }

  return (
    <div className="flex justify-between items-center p-[10px] mt-[5px] rounded-[10px] gap-[10px]">
      <h2 className="text-base font-semibold text-black m-0">
        {resultsCount} results
      </h2>
      <button
        className="py-[8px] px-[12px] text-[0.8rem] font-semibold text-black bg-white border border-[#ccc] rounded-[20px] cursor-pointer transition-colors duration-300 ease-in-out"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  )
}

export default FilterResults
