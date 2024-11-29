import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FilterBar from '../component/fitlerBar/filterBar.component';
import FilterResults from '../component/filterResults/filterResults.component';
import RecipeContainer from '../component/RecipeContainer/RecipeContainer';
import ClipLoader from 'react-spinners/ClipLoader';
import { recipeFetches } from '../api/fresh_start_recipe_api';

export default function Home() {
  const [indexData, setIndexData] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const fetchFilteredData = async (filters) => {
    setLoading(true);
    try {
      const data = await recipeFetches(filters.toString());
      setIndexData(data.data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!router.isReady) return; 

    const filters = new URLSearchParams(router.query);

    const initialFilters = {};
    filters.forEach((value, key) => {
      initialFilters[key] = value;
    });

    setActiveFilters(initialFilters);
    fetchFilteredData(filters);
  }, [router.isReady, router.query]);

  const handleFilterChange = (filterKey, value) => {
    const filters = new URLSearchParams(router.query);

    if (value) {
      filters.set(filterKey, value);
      setActiveFilters((prevFilters) => ({ ...prevFilters, [filterKey]: value }));
    } else {
      filters.delete(filterKey);
      setActiveFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[filterKey];
        return updatedFilters;
      });
    }

    router.push({
      pathname: router.pathname,
      query: Object.fromEntries(filters.entries()),
    });
  };

  return (
    <>
      <FilterBar onFilterChange={handleFilterChange} activeFilters={activeFilters} />
      {Object.keys(activeFilters).length > 0 ? (
        <FilterResults resultsCount={indexData.length} />
      ) : null}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <RecipeContainer data={indexData} />
      )}
    </>
  );
}
