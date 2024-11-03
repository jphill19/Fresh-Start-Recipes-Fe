import FilterBar from "../../component/fitlerBar/filterBar.component";
import  { Fragment, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterResults from "../../component/filterResults/filterResults.component";
import recipeFetches from '../home/../../api/fresh_start_recipe_api'
import RecipeContainer from "../../component/RecipeContainer/RecipeContainer";

function Home() {
  const [indexData, setIndexData] = useState([]);
  console.log("data",indexData)
  const [activeFilters, setActiveFilters] = useState({}); 
  console.log("filters", activeFilters)
  const location = useLocation();
  const navigate = useNavigate();


  const fetchFilteredData = async (filters) => {
    console.log('Fetching data with filters:', filters.toString());
  
    try {
      const data = await recipeFetches(filters.toString());
      setIndexData(data.data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  useEffect(() => {
    const filters = new URLSearchParams(location.search);

    //Edge case, setting active filters whenever the user refreshes the page
    const initialFilters = {};
    filters.forEach((value, key) => {
      initialFilters[key] = value;
    });

    setActiveFilters(initialFilters);
    fetchFilteredData(filters);
  }, [location.search]);

  const handleFilterChange = (filterKey, value) => {
    const filters = new URLSearchParams(location.search);

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
    navigate(`${location.pathname}?${filters.toString()}`);
  };

  return (
    <Fragment>
      <FilterBar onFilterChange={handleFilterChange} activeFilters={activeFilters} />
      {Object.keys(activeFilters).length > 0 ? (
        <FilterResults resultsCount={indexData.length}/>
      ) : null}
      <RecipeContainer data={indexData}/>
    </Fragment>
  );
}

export default Home;
