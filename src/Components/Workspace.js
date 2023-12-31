import React from "react";
import { useParams } from "react-router-dom";
import {
  InstantSearch,
  Configure,
  useHits,
} from "react-instantsearch-hooks-web";
import AppHeader from "./AppHeader";
import VariantFilters from "./VariantFilters";

const View = ({ hit }) => {
  const VisualizationJson = JSON.parse(hit?.VisualizationJson);

  return (
    <>
      <div className="row">
        <AppHeader name={hit?.SettingName} />
        <div className="application" data-assignment="">
          <div className="application-wrapper">{hit?.SettingName}</div>
          <img src={VisualizationJson.renderURL} alt="" />
          <VariantFilters />
        </div>
      </div>
    </>
  );
};

const SingleHit = (props) => {
  const { hits } = useHits(props);

  return Object.entries(hits).map(([key, value]) => <View hit={value} />);
};

const Workspace = (props) => {
  let { variantId } = useParams();

  return (
    <InstantSearch
      indexName="steelcase_sandbox_settings"
      searchClient={props.searchClient}
    >
      <main className="col-12 content">
        <Configure query={variantId} />
        <SingleHit />
      </main>
    </InstantSearch>
  );
};

export default Workspace;
