import { useState } from 'react'
import { useRouter } from 'next/router'

function SearchBox({ showSearch, toggleSearch }) {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?by_recipe=${encodeURIComponent(searchQuery)}`)
    }
    toggleSearch()
    setSearchQuery('')
  }

  return (
    <div
      className={`transition-[max-height,opacity] ease duration-400 overflow-hidden bg-white mt-2 w-[95%] ${
        showSearch
          ? 'max-h-[60px] sm:max-h-[50px] opacity-100 p-2 sm:p-0'
          : 'max-h-0 opacity-0'
      }`}
    >
      <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder="Search by Recipe Name..."
          value={searchQuery}
          maxLength="50"
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded font-medium text-base box-border sm:text-sm"
          title="Only letters and spaces are allowed"
        />
      </form>
    </div>
  )
}

export default SearchBox
