import { useState } from 'react';
import { useRouter } from 'next/router';

function SearchBox({ showSearch, toggleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?by_recipe=${encodeURIComponent(searchQuery)}`);
    }
    toggleSearch();
    setSearchQuery('');
  };

  return (
    <div
      className={`${
        showSearch ? 'block' : 'hidden'
      } bg-white mt-4 w-full px-4`}
    >
      <form onSubmit={handleSearchSubmit} className="relative max-w-lg mx-auto pb-2">
        <input
          type="search"
          placeholder="Search by Recipe Name..."
          value={searchQuery}
          onChange={handleInputChange}
          maxLength="50"
          className="w-full py-2 pl-12 pr-4 text-black text-base font-medium border border-gray-700 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-700 transition duration-200"
          title="Search recipes by entering keywords"
        />
        <button
          type="submit"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-main-color focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 015.3 13.7l5.7 5.7a1 1 0 01-1.4 1.4l-5.7-5.7A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
