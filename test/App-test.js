import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('<App />', () => {
  it('renders title', () => {
    // expect(true).equal(true);
    const wrapper = shallow( <App />);
    expect(wrapper.text()).to.equal('Home Sweet Home!');
  });
});
