import { NavLink, useLocation } from "react-router-dom";
import { RouteNames } from "@/utils/routes";
import "./NavBar.scss";

export const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="page-navbar">
      <ul>
        <li>
          <NavLink to={RouteNames.HOME}>
            {location.pathname === RouteNames.HOME ? <h1>CTα</h1> : "CTα"}
          </NavLink>
        </li>
        <li>
          <NavLink to={RouteNames.WORK}>
            {location.pathname === RouteNames.WORK ? <h1>Work</h1> : "Work"}
          </NavLink>
        </li>
        <li>
          <NavLink to={RouteNames.PUBLIC}>
            {location.pathname === RouteNames.PUBLIC ? (
              <h1>Public</h1>
            ) : (
              "Public"
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={RouteNames.ABOUT}>
            {location.pathname === RouteNames.ABOUT ? <h1>About</h1> : "About"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
