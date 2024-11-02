import FilterBar from "../../component/fitlerBar/filterBar.component";
import  { Fragment, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const data = {
  "data": [
    {
      "title": "Recipe 1",
      "servingSize": 1,
      "ingredients": [
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "00"
        }
      ],
      "image": {
        "src": "image-url-1",
        "alt": "Recipe 1 Image"
      },
  
    },
    {
      "title": "Recipe 2",
      "servingSize": 4,
      "ingredients": [
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "$$"
        }
      ],
      "image": {
        "src": "image-url-2",
        "alt": "Recipe 2 Image"
      },

    }
  ]
}



function Home() {
  const [indexData, setIndexData] = useState([]);
  const [activeFilters, setActiveFilters] = useState({}); // Track filter values
  const location = useLocation();
  const navigate = useNavigate();

  const fetchFilteredData = (filters) => {
    console.log('Fetching data with filters:', filters.toString());
    setIndexData([/* filtered data based on filters */]);
  };

  useEffect(() => {
    const filters = new URLSearchParams(location.search);

    //Edge case, setting active filters whenever the user refreshes the page
    const initialFilters = {};
    filters.forEach((value, key) => {
      initialFilters[key] = value;
    });

    setActiveFilters(initialFilters);
    //

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
      <div>
        {indexData.map((item, index) => (
          <div key={index}>{/* Render item details */}</div>
        ))}
      </div>
    </Fragment>
  );
}

export default Home;
