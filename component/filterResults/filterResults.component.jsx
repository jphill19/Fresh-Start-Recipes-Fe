import { useRouter } from 'next/router';
import styles from './filterResults.module.css';

function FilterResults({ resultsCount }) {
  const router = useRouter();

  const handleReset = () => {
    router.push('/');
  };

  return (
    <div className={styles.filterResultsContainer}>
      <h2 className={styles.resultsCount}>{resultsCount} results</h2>
      <button className={styles.resetButton} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default FilterResults;
