import Link from 'next/link';
import styles from '../styles/notfound.module.css'; // Use CSS Modules for styling

function NotFound() {
  return (
    <div className={styles.notFoundBackdrop}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.notFoundTitle}>404 - Recipe Not Found!</h1>
        <p className={styles.notFoundMessage}>
          Oops! It looks like the recipe you're looking for is missing from our cookbook.
        </p>
        <div className={styles.notFoundEmoji}>🍲 🥕 🍋 🍞</div>
        <Link href="/" className={styles.notFoundLink}>
          Return to the Kitchen
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
