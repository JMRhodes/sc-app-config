import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import Archive from "./Archive";
import Workspace from "./Workspace";

const searchClient = algoliasearch(
  "BCXURW325T",
  "9a9be1d80cc0544864f653dc5e181b91"
);

const Router = () => (
  <section className="products-main">
    <BrowserRouter basename="/sc-app-config">
      <Routes>
        <Route
          exact
          path="/"
          element={<Archive searchClient={searchClient} />}
        />
        <Route
          path="/app/:variantId"
          element={<Workspace searchClient={searchClient} />}
        />
      </Routes>
    </BrowserRouter>
  </section>
);

export default Router;
