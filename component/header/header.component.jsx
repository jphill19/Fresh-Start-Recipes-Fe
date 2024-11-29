import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStoreLocation } from "../../context/StoreLocationContext";
import SearchBox from "../search-box/searchBox.component";
import styles from "./header.module.css"; // Using CSS Modules

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const { locationData } = useStoreLocation();
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  useEffect(() => {
    if (!isHomePage) {
      setShowSearch(false);
    }
  }, [isHomePage]);

  return (
    <Fragment>
      <header className={styles.headerSection}>
        <nav className={styles.navBar}>
          <div className={`${styles.navSection} ${styles.leftSection}`}>
            <a href="/location" className={`${styles.navLink} ${styles.locationWrapper}`}>
              <img
                src="/geo-alt-fill.svg"
                alt="location-icon"
                className={styles.locationIcon}
              />
              {locationData.name && (
                <span className={styles.locationInlineLabel}>
                  {locationData.name}
                </span>
              )}
            </a>
          </div>
          <div className={`${styles.navSection} ${styles.centerSection}`}>
            <a href="/">
              <img
                src="/fresh-start-recipes.png"
                alt="Site Logo"
                className={styles.logo}
              />
            </a>
          </div>
          <div className={`${styles.navSection} ${styles.rightSection}`}>
            {isHomePage ? (
              <button className={styles.searchButton} onClick={toggleSearch}>
                <img
                  src="/search.svg"
                  alt="search-icon"
                  className={`${styles.searchIcon} ${
                    showSearch ? styles.rotate : ""
                  }`}
                />
              </button>
            ) : (
              <button className={styles.homeButton} onClick={handleHomeClick}>
                <img
                  src="/house.svg"
                  alt="home-icon"
                  className={styles.homeIcon}
                />
              </button>
            )}
          </div>
        </nav>

        <SearchBox showSearch={showSearch} toggleSearch={toggleSearch} />
      </header>
    </Fragment>
  );
}

export default Header;
