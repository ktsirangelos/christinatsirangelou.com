import { NavLink } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="container">
      <h1>Oh oh! Page Not Found :/</h1>
      <NavLink to="/">
        <h2 className="link">Okay, take me back :]</h2>
      </NavLink>
    </div>
  );
};
