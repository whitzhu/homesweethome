import React from 'react';

import Filter from '../../containers/Filter/Filter';

require('./navbar.scss');

const Navbar = () => (
  <div className="navbar-container">
    <img className="logo" alt="logo" src="https://s3-us-west-1.amazonaws.com/homesweethomewhit/media-assets/icons/homesweethomelogo-dark.svg" />
    <div className="fitler">
      <span className="filter-header">
        <img className="filter-icon" alt="filter-icon" src="https://s3-us-west-1.amazonaws.com/homesweethomewhit/media-assets/icons/filter.svg" />
        Filters
      </span>
      <Filter />
    </div>
    <div className="author-section">
      <a className="author-name" href="https://www.behance.net/whitzhu">Whitney Zhu</a>
    </div>
  </div>
);

export default Navbar;
