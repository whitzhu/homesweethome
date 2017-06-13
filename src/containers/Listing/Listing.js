import React, { Component } from 'react';
import { connect } from 'react-redux';
import util from '../../util/util';
import dataSuperman from '../../../supermanRealty.json';
import dataBatman from '../../../batmanRealty.json';

import Card from '../../components/Card/Card';
import FilterButton from '../../components/FilterButton/FilterButton';
import MobileFilter from '../../containers/MobileFilter/MobileFilter';
import { fetchListingData, toggleMobileFilter } from '../../actions/index';

require('./listing.scss');

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderListingToCards = this.renderListingToCards.bind(this);
  }

  componentWillMount() {
    this.props.fetchListingData();
  }

  renderListingToCards() {
    return this.props.listings.map((listing, index) => <Card key={index} cardData={listing} />);
  }

  render() {
    return (
      <div className="listing-outer-container">
        <div className="listing-inner-container">
          {this.renderListingToCards()}
          <FilterButton toggleMobileFilter={this.props.toggleMobileFilter} />
           { this.props.mobileFilterOpen ? <MobileFilter /> : null }
          <div className="listing-bottom" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listings: state.listing,
    mobileFilterOpen: state.mobileFilterOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchListingData: () => dispatch(fetchListingData()),
    toggleMobileFilter: (state) => dispatch(toggleMobileFilter(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
