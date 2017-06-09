import React from 'react';
import Card from '../src/components/Card/Card';

describe('<Card />', () => {
  let wrapper;
  beforeEach( () => {
    const data =
      {
        beds: '4',
        baths: '2',
        address: '178 Pennyworth Avenue, Depew, NY 14043',
        price: '839,345',
        sqft: '3000',
        built: '2015',
        label: 'new',
        thumb: 'https://s3-us-west-1.amazonaws.com/homesweethomewhit/media-assets/homes/13.jpg',
        url: 'http://trulia.com',
      };
    wrapper = shallow(<Card cardData={data}/>);
  });
  it('has card data prop to render card details dynamically', () => {
      expect(wrapper.instance().props.cardData).to.exist;
  });
  it('contains property image', () => {
    expect(wrapper.find('.img-container')).to.have.length(1);
  });
  it('contains property pricing', () => {
     expect(wrapper.find('.card-price')).to.have.length(1);
  });
  it('contains property address', () => {
     expect(wrapper.find('.card-address')).to.have.length(2);
  });
  it('contains bed and bathroom icon', () => {
     expect(wrapper.find('.icon-desc')).to.have.length(3);
  });
  it('contains heart shape that can be toggled on or off');
});
