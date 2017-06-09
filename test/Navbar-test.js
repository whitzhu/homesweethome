import React from 'react';

import Navbar from '../src/components/Navbar/Navbar';

describe('<Navbar />', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<Navbar />);
  });
  it('displays app logo', () => {
    expect(wrapper.find('.logo')).to.exist;
  });
  it('contains filters', () => {
    expect(wrapper.find('.fitler')).to.exist;
  });
  it('collapes in mobile');
});