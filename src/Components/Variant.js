import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
} from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "BCXURW325T",
  "9a9be1d80cc0544864f653dc5e181b91"
);

function Variant(props) {
  return (
    <InstantSearch
      indexName="steelcase_sandbox_settings"
      searchClient={searchClient}
    >
      <main className="col-12 content">
        <div className="row">
          Variant Single View
        </div>
      </main>
    </InstantSearch>
  );
}

export default Variant;
