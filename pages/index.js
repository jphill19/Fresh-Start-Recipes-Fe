// pages/index.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FilterBar from '../components/fitlerBar/filterBar.component';
import FilterResults from '../components/filterResults/filterResults.component';
import RecipeContainer from '../components/RecipeContainer/RecipeContainer';
import ClipLoader from 'react-spinners/ClipLoader';
import { recipeFetches } from '../api/fresh_start_recipe_api';

export default function Home({ initialData, initialFilters }) {
  const router = useRouter();
  const [indexData, setIndexData] = useState(initialData);
  const [activeFilters, setActiveFilters] = useState(initialFilters);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!router.isReady || router.isFallback) return;

    const filtersObj = { ...router.query };


    if (JSON.stringify(filtersObj) !== JSON.stringify(activeFilters)) {
      setActiveFilters(filtersObj);
      fetchFilteredData(filtersObj);
    }
  }, [router.isReady, router.query]);

  if (router.isFallback) {
    return (
      <div className="flex justify-center items-center h-52">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  const fetchFilteredData = async (filtersObj) => {
    setLoading(true);
    try {
      const queryString = new URLSearchParams(filtersObj).toString();
      const data = await recipeFetches(queryString);
      setIndexData(data.data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filterKey, value) => {
    const recognizedFilters = ['by_ingredient', 'by_style', 'by_serving', 'by_price', 'by_recipe'];

    if (!recognizedFilters.includes(filterKey)) {
      console.error(`Unrecognized filter key: ${filterKey}`);
      return;
    }

    const currentFilters = { ...activeFilters };

    if (value) {
      currentFilters[filterKey] = value;
    } else {
      delete currentFilters[filterKey];
    }

    // Push updated filters to the router's query.
    router.push({
      pathname: '/',
      query: currentFilters,
    }, undefined, { shallow: true });
  };

  return (
    <>
      <FilterBar
        onFilterChange={handleFilterChange}
        activeFilters={activeFilters}
      />
      {Object.keys(activeFilters).length > 0 && (
        <FilterResults resultsCount={indexData.length} />
      )}
      {loading ? (
        <div className="flex justify-center items-center h-52">
          <ClipLoader color="#green" size={50} />
        </div>
      ) : (
        <RecipeContainer data={indexData} />
      )}
    </>
  );
}

export async function getStaticProps() {
  try {
    const data = await recipeFetches('');
    return {
      props: {
        initialData: data.data,
        initialFilters: {},
      },
      revalidate: 900, 
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialData: [],
        initialFilters: {},
      },
      revalidate: 120,
    };
  }
}
