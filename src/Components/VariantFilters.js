import React from "react";

const OptionThemes = (props) => (
  <>
    <div className="option-header">
      <label>Theme</label>
    </div>
    <ul className="option open">
      <li
        className="option-setting Neutral"
        data-group-name="Theme"
        data-value-name="Neutral"
        data-variant-code="03a6832e-8892-438e-895d-931e4177e345"
      >
        <img
          src="https://scspspecprod.blob.core.windows.net/public/setting/CAFE1/theme/NEUTRAL/HeroImage_CAFE1_NEUTRAL.png"
          alt="Neutral Theme"
        />
        <span>Neutral</span>
        <span class="subtitle ">Theme</span>
      </li>
    </ul>
  </>
);

const VariantFilters = (props) => (
  <div className="options">
    <div className="option-accordion">
      <OptionThemes />
    </div>
  </div>
);

export default VariantFilters;
