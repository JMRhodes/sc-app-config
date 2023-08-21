import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Archive from "./Archive";
import Workspace from "./Workspace";

const Router = () => (
  <section className="products-main">
    <BrowserRouter basename="/sc-app-config">
      <Routes>
        <Route exact path="/" element={<Archive />} />
        <Route path="/app/:variantId" element={<Workspace />}></Route>
      </Routes>
    </BrowserRouter>
  </section>
);

export default Router;
