import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="page-navbar">
      <ul>
        <li>
          <NavLink to="/">CTα</NavLink>
        </li>
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/public">Public</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
