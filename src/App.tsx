import { BrowserRouter as Router } from "react-router-dom";
import { RoutesComponent as Routes } from "./components/RoutesComponent";
import { ScrollToTop } from "@/utils/ScrollToTop";
import "./scss/main.scss";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  );
};
