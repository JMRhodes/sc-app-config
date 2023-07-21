import React from "react";
import { useParams } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits, Configure } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "BCXURW325T",
  "9a9be1d80cc0544864f653dc5e181b91"
);

function Variant(props) {
  let { variantId } = useParams();

  return (
    <InstantSearch
      indexName="steelcase_sandbox_settings"
      searchClient={searchClient}
    >
      <main className="col-12 content">
        <div className="row">
          <Configure query={variantId} />
          <Hits />
        </div>
      </main>
    </InstantSearch>
  );
}

export default Variant;
