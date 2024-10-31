import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./header.css"

function Header() {
  return (
    <Fragment>
        <header class="header-section">
          <nav class="nav-bar">
            <NavLink to="/location" class="nav-link"><img src="/geo-alt-fill.svg" alt="logcation-cion" class="location-icon"/></NavLink>
            <Link to="/"><img src="/fresh-start-recipes.png" alt="Site Logo" class="logo"/></Link>
            <button class="search-button"><img src="/search.svg" alt="search-icon" class="search-icon"/></button>
          </nav>
        </header>
        <Outlet/>
    </Fragment>
  );
}
export default Header;
