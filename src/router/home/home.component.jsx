import FilterBar from "../../component/fitlerBar/filterBar.component";
import  { Fragment, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterResults from "../../component/filterResults/filterResults.component";
import {recipeFetches} from '../home/../../api/fresh_start_recipe_api'
import RecipeContainer from "../../component/RecipeContainer/RecipeContainer";
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const [indexData, setIndexData] = useState([]);
  const [activeFilters, setActiveFilters] = useState({}); 
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  const fetchFilteredData = async (filters) => {
    console.log('Fetching data with filters:', filters.toString());
    setLoading(true)
  
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
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <ClipLoader color="#36d7b7" size={50} /> {/* Customize the spinner color and size */}
        </div>
      ) : (
        <RecipeContainer data={indexData} />
      )}
    </Fragment>
  );
}

export default Home;
