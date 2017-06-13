import React from 'react';
import logger from 'redux-logger';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Listing from '../../containers/Listing/Listing';
import Navbar from '../Navbar/Navbar';
import reducer from '../../reducers';

require('./app.scss');

const middleware = process.env.NODE_ENV === 'production' ? [] : [logger]
const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

ReactGA.initialize('UA-101037817-1');
ReactGA.pageview(window.location.pathname);

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <Navbar />
      <Listing />
    </div>
  </Provider>
);

export default App;
