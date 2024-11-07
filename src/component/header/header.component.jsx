import { Fragment, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import SearchBox from '../search-box/searchBox.component'
import "./header.css"

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Fragment>
        <header className="header-section">
          <nav className="nav-bar">
            <NavLink to="/location" className="nav-link"><img src="/geo-alt-fill.svg" alt="logcation-icon" className="location-icon"/></NavLink>
            <Link to="/"><img src="/fresh-start-recipes.png" alt="Site Logo" className="logo"/></Link>
            <button className="search-button" onClick={toggleSearch}>
              <img src="/search.svg" alt="search-icon" className={`search-icon ${showSearch ? 'rotate' : ''}`}/>
            </button>
          </nav>
          
           <SearchBox showSearch={showSearch} toggleSearch={toggleSearch}/>
        </header>
        <Outlet/> 
    </Fragment>
  );
}
export default Header;
