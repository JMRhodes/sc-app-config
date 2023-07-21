import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  CurrentRefinements,
  RefinementList,
  useRefinementList,
  useInfiniteHits,
} from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "BCXURW325T",
  "9a9be1d80cc0544864f653dc5e181b91"
);

function Hit({ hit }) {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4 application" data-assignment="">
        <div className="application-wrapper">
          <Link to={`/app/${hit?.SettingVariantCode}`}>
            <img src={hit?.SettingVariantHeroImageURL} />
            <p>{hit?.SettingName}</p>
          </Link>
        </div>
      </div>
    </>
  );
}

function CustomInfiniteHits(props) {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);

  return Object.entries(hits).map(([key, value]) => <Hit hit={value} />);
}

function App(props) {
  return (
    <InstantSearch
      indexName="steelcase_sandbox_settings"
      searchClient={searchClient}
    >
      <div className="col-12 col-lg-3 category-nav">
        <h3 className="open">Application</h3>
        <CurrentRefinements includedAttributes={["TocAssignment"]} />
        <div className="filter-group">
          <RefinementList attribute="TocAssignment" />
        </div>
      </div>
      <main className="col-12 col-lg-9 content">
        <div className="row">
          <CustomInfiniteHits {...props} />
        </div>
      </main>
    </InstantSearch>
  );
}

export default App;
