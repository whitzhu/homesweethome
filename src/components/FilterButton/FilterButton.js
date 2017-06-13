import React from 'react';

require('./filterbutton.scss');

const FilterButton = ({ toggleMobileFilter }) => (
  <div className="filter-button-container">
    <div className="filter-button" onClick={toggleMobileFilter}>
      FILTERS
      <img className="filter-icon" alt="filter-icon" src="https://s3-us-west-1.amazonaws.com/homesweethomewhit/media-assets/icons/filter.svg" />
    </div>
  </div>
);

export default FilterButton;
