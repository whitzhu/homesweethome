import React from 'react';

import App from '../src/components/App/App';

describe('<App />', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow( <App />);
  });
  it('contains navbar section');
  it('contains listing section');
});
