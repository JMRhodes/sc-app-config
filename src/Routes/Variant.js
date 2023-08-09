import React from "react";
import { useParams } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  Configure,
  useHits,
} from "react-instantsearch-hooks-web";
import AppHeader from "./../Components/AppHeader";
import VariantFilters from "./../Components/VariantFilters";

const searchClient = algoliasearch(
  "BCXURW325T",
  "9a9be1d80cc0544864f653dc5e181b91"
);

function View({ hit }) {
  const VisualizationJson = JSON.parse(hit?.VisualizationJson);

  return (
    <>
      <div className="row">
        <AppHeader name={hit?.SettingName} />
        <div className="col-12 application" data-assignment="">
          <div className="application-wrapper">{hit?.SettingName}</div>
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={VisualizationJson.renderURL} />
            </div>
            <div className="col-12 col-md-4 offset-md-2">
              <VariantFilters />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SingleHit(props) {
  const { hits, isLastPage, showMore } = useHits(props);

  return Object.entries(hits).map(([key, value]) => <View hit={value} />);
}

function Variant(props) {
  let { variantId } = useParams();

  return (
    <InstantSearch
      indexName="steelcase_sandbox_settings"
      searchClient={searchClient}
    >
      <main className="col-12 content">
        <Configure query={variantId} />
        <SingleHit {...props} />
      </main>
    </InstantSearch>
  );
}

export default Variant;
