import { BrowserRouter as Router } from "react-router-dom";
import { RoutesComponent as Routes } from "./components/RoutesComponent";
import "./scss/main.scss";

export const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
