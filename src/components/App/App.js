import React from 'react';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Listing from '../../containers/Listing/Listing';
import Navbar from '../Navbar/Navbar';
import reducer from '../../reducers';

require('./app.scss');

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <Navbar />
      <Listing />
    </div>
  </Provider>
);

export default App;
