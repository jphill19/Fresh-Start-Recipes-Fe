import { Fragment, useState, useEffect } from "react";
import { Link, NavLink, Outlet,  useLocation, useNavigate } from "react-router-dom";
import { useStoreLocation } from '../../context/StoreLocationContext';
import SearchBox from '../search-box/searchBox.component'
import "./header.css"

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const {locationData, storeLocation} = useStoreLocation()
  const location = useLocation();
  const navigate = useNavigate()

  const isHomePage = location.pathname === "/";

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!isHomePage) {
      setShowSearch(false);
    }
  }, [isHomePage]);


  return (
    <Fragment>
      <header className="header-section">
        <nav className="nav-bar">
          <div className="nav-section left-section">
            <NavLink to="/location" className="nav-link location-wrapper">
              <img src="/geo-alt-fill.svg" alt="location-icon" className="location-icon" />
              {locationData.name && (
                <span className="location-inline-label">{locationData.name}</span>
              )}
            </NavLink>
          </div>
          <div className="nav-section center-section">
            <Link to="/">
              <img src="/fresh-start-recipes.png" alt="Site Logo" className="logo" />
            </Link>
          </div>
          <div className="nav-section right-section">
          {isHomePage ? (
              <button className="search-button" onClick={toggleSearch}>
                <img
                  src="/search.svg"
                  alt="search-icon"
                  className={`search-icon ${showSearch ? 'rotate' : ''}`}
                />
              </button>
            ) : (
              <button className="home-button" onClick={handleHomeClick}>
                <img
                  src="/house.svg"
                  alt="home-icon"
                  className="home-icon"
                />
              </button>
            )}
          </div>
        </nav>
        
        <SearchBox showSearch={showSearch} toggleSearch={toggleSearch} />
      </header>
      <Outlet />
    </Fragment>
  );
}


export default Header;

