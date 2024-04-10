import { Route, Routes } from "react-router-dom";
import { Layout } from "@/pages/components/layout/Layout";
import { Home } from "@/pages/home/Home";
import { Work } from "@/pages/work/Work";
import { Public } from "@/pages/public/Public";
import { About } from "@/pages/about/About";
import { Project } from "@/pages/projects/Project";
import { PageNotFound } from "@/pages/404/NotFound";
import { RouteNames } from "@/utils/routes";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={RouteNames.WORK}>
          <Route index element={<Work />} />
          <Route path=":projectTitle" element={<Project />} />
        </Route>
        <Route path={RouteNames.PUBLIC} element={<Public />} />
        <Route path={RouteNames.ABOUT} element={<About />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
