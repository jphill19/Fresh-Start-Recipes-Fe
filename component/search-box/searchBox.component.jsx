import { useState } from 'react';
import { useRouter } from 'next/router'; // Next.js routing
import styles from './searchBox.module.css'; // Adjusted for CSS Modules

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
    <div className={`${styles.searchContainer} ${showSearch ? styles.show : ''}`}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder="Search by Recipe Name..."
          value={searchQuery}
          maxLength="50"
          onChange={handleInputChange}
          className={styles.searchInput}
          title="Only letters and spaces are allowed"
        />
      </form>
    </div>
  );
}

export default SearchBox;
