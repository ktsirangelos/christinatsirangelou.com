import { BrowserRouter as Router } from "react-router-dom";
import { RoutesComponent as Routes } from "./components/RoutesComponent";
import "./scss/main.scss"

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export { App };
