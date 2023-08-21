import React from "react";
import { Link } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  CurrentRefinements,
  RefinementList,
  useInfiniteHits,
} from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "BCXURW325T",
  "9a9be1d80cc0544864f653dc5e181b91"
);

const Hit = ({ hit }) => {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4 application" data-assignment="">
        <div className="application-wrapper">
          <Link to={`/app/${hit?.SettingVariantCode}`}>
            <img src={hit?.SettingVariantHeroImageURL} alt="" />
            <p>{hit?.SettingName}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

const CustomInfiniteHits = (props) => {
  const { hits } = useInfiniteHits(props);

  return Object.entries(hits).map(([key, value]) => <Hit hit={value} />);
};

const Archive = (props) => (
  <InstantSearch
    indexName="steelcase_sandbox_settings"
    searchClient={searchClient}
  >
    <div className="facets">
      <h3 className="open">Application</h3>
      <CurrentRefinements includedAttributes={["TocAssignment"]} />
      <div className="facet-group">
        <RefinementList attribute="TocAssignment" />
      </div>
    </div>
    <main className="content">
      <CustomInfiniteHits {...props} />
    </main>
  </InstantSearch>
);

export default Archive;
