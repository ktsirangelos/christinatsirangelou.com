import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/pages/components/layout/Layout";
import { Home } from "@/pages/home/Home";
import { Work } from "@/pages/work/Work";
import { Public } from "@/pages/public/Public";
import { About } from "@/pages/about/About";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="work" element={<Work />} />
      <Route path="public" element={<Public />} />
      <Route path="about" element={<About />} />
    </Route>
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);

export { RoutesComponent };
