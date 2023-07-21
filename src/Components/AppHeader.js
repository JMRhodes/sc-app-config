import React from "react";
import { Link } from "react-router-dom";

function Variant(props) {
  return (
    <div class="container">
      <h1>{props.name}</h1>
      <div class="breadcrumbs">
        <label>
          <Link to={`/`}>
            Applications
          </Link>
        </label>
        <span>/</span>
        <label class="app-name">Detail View</label>
      </div>
    </div>
  );
}

export default Variant;
