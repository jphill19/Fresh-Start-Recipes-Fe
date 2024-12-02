// pages/[[...filters]].js
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

  if (router.isFallback) {
    return (
      <div className="flex justify-center items-center h-52">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  useEffect(() => {
    if (!router.isReady) return;

    const filters = router.query.filters || [];
    const filtersObj = {};

    for (let i = 0; i < filters.length; i += 2) {
      filtersObj[filters[i]] = filters[i + 1];
    }

    // Check if filters have changed
    if (JSON.stringify(filtersObj) !== JSON.stringify(activeFilters)) {
      setActiveFilters(filtersObj);
      fetchFilteredData(filtersObj);
    }
  }, [router.isReady, router.query.filters]);

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
    const recognizedFilters = ['by_ingredient', 'by_style', 'by_serving', 'by_price'];

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

    const filtersArray = Object.entries(currentFilters).flat();

    router.push({
      pathname: '/',
      query: { filters: filtersArray },
    });
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
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <RecipeContainer data={indexData} />
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const filters = params.filters || [];
  const filtersObj = {};

  for (let i = 0; i < filters.length; i += 2) {
    filtersObj[filters[i]] = filters[i + 1];
  }

  const recognizedFilters = ['by_ingredient', 'by_style', 'by_serving', 'by_price'];

  const filterKeys = Object.keys(filtersObj);
  const unrecognizedFilters = filterKeys.filter(key => !recognizedFilters.includes(key));

  if (unrecognizedFilters.length > 0) {
    return {
      notFound: true,
    };
  }

  const queryString = new URLSearchParams(filtersObj).toString();
  const data = await recipeFetches(queryString);

  return {
    props: {
      initialData: data.data,
      initialFilters: filtersObj,
    },
    revalidate: 120, // Revalidate every 120 seconds
  };
}

export async function getStaticPaths() {
  // Optionally pre-render certain filter combinations
  return {
    paths: [{ params: { filters: [] } }], // Pre-render the root path
    fallback: 'blocking',
  };
}
