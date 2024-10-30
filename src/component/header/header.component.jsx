import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <Fragment>
        <h1>test</h1>
        <Outlet/>
    </Fragment>
  );
}
export default Header;
