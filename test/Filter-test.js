import React from 'react';

import Filter from '../src/components/Filter/Filter';

describe('<Filter />', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<Filter/>);
  });
  it('contains filter for bedrooms', () => {
    expect(wrapper.find('.filter-beds')).to.exist;
  });
  it('contains filter for bathrooms', () => {
    expect(wrapper.find('.filter-baths')).to.exist;
  });
  it('contains filter for sqft', () => {
    expect(wrapper.find('.filter-sqft')).to.exist;
  });
  it('contains slidable filters');
});