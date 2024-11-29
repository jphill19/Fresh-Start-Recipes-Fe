import './filterResults.css'
import { useNavigate } from 'react-router-dom';


function FilterResults({ resultsCount }) {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate('/');
  };

  return (
    <div className="filter-results-container">
      <h2 className="results-count">{resultsCount} results</h2>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default FilterResults;