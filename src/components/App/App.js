import React from 'react';

import Listing from '../../containers/Listing/Listing';
import Navbar from '../Navbar/Navbar';

require('./app.scss');

const App = () => (
  <div className="app-container">
    <Navbar />
    <Listing />
  </div>
);

export default App;
