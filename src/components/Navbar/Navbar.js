import React from 'react';

import Filter from '../Filter/Filter';

require ('./navbar.scss');

const Navbar = () => (
  <div className="navbar-container">
    <div className="logo">Home Sweet Home</div>
    <div className="fitler"><Filter /></div>
  </div>
);

export default Navbar;
