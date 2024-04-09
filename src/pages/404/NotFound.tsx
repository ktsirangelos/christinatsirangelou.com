import { NavLink } from "react-router-dom";
import "./NotFound.scss";

export const PageNotFound = () => {
  return (
    <div className="container">
      <h1>Oh oh! Page Not Found :/</h1>
      <NavLink to="/">
        <h2 className="link">Okay, take me back Home :]</h2>
      </NavLink>
    </div>
  );
};

export const ProjectNotFound = () => {
  return (
    <div className="container">
      <h1>Oh oh! Project Not Found :/</h1>
      <NavLink to="/work">
        <h2 className="link">Okay, take me back to Work :]</h2>
      </NavLink>
    </div>
  );
};
