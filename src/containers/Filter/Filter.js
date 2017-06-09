import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterListingData } from '../../actions/index';

require('./filter.scss');

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: 'null',
    };
    this.onFilterClick = this.onFilterClick.bind(this);
  }
  onFilterClick(category, sort) {
    this.props.filterListingData(category, sort);
    this.setState({
      activeBtn: category,
    });
  }

  render() {
    return (
      <div className="filter-container">
        <button className={`filter-price filter-btn ${this.state.activeBtn === 'price' ? 'active' : ''}`}  onClick={() => this.onFilterClick('price', 'descending')}>
          <p>Price</p>
        </button>
        <button className={`filter-beds filter-btn ${this.state.activeBtn === 'beds' ? 'active' : ''}`} onClick={() => this.onFilterClick('beds', 'descending')}>
          <p>Beds</p>
        </button>
        <button className={`filter-baths filter-btn ${this.state.activeBtn === 'baths' ? 'active' : ''}`} onClick={() => this.onFilterClick('baths', 'descending')}>
          <p>Baths</p>
        </button>
        <button className={`filter-sqft filter-btn ${this.state.activeBtn === 'sqft' ? 'active' : ''}`} onClick={() => this.onFilterClick('sqft', 'descending')}>
          <p>Sq Ft</p>
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterListingData: (category, sort) => dispatch(filterListingData(category, sort)),
  };
}

Filter.propTypes = {
  filterListingData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filter);
