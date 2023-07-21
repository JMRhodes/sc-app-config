import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Variant from "./Routes/Variant";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <section className="products-main">
      <div className="container">
        <div className="row">
          <BrowserRouter basename="/sc-app-config">
            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route
                path="/app/:variantId"
                element={<Variant />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
