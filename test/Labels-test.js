import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Labels from '../src/components/Labels/Labels';

describe('<Labels />', () => {
  it('has prop "type" to render label dynamically', () => {
    const wrapper = shallow(<Labels type="new" />);
    expect(wrapper.instance().props.type).to.equal('new');
  });
});