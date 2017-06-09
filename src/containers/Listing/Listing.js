import React, { Component } from 'react';
import util from '../../util/util';
import dataSuperman from '../../../supermanRealty.json';
import dataBatman from '../../../batmanRealty.json';

import Card from '../../components/Card/Card';

require('./listing.scss');

export default class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: dataSuperman.items,
    };
    this.renderListingToCards = this.renderListingToCards.bind(this);
  }

  componentWillMount() {
    util.normalizeListing(dataBatman, (normalizedData) => {
      let combinedList = this.state.listings.slice();
      combinedList = combinedList.concat(normalizedData);
      this.setState({
        listings: combinedList,
      });
    });
  }

  renderListingToCards() {
    return this.state.listings.map(listing => <Card cardData={listing} />);
  }

  render() {
    return (
      <div className="listing-outer-container">
        <div className="listing-inner-container">
          {this.renderListingToCards()}
        </div>
      </div>
    );
  }
}
