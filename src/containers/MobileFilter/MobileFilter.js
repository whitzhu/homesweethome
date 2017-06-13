import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../../containers/Filter/Filter';
import { toggleMobileFilter } from '../../actions/index';

require('./mobilefilter.scss');

class MobileFilter extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <div className="mobile-filter-conatiner">
        <div className="mobile-filter-header">
          <div className="close" onClick={() => this.props.toggleMobileFilter(false)}> X </div>
          <span className="mobile-filter-title">
            Filters
            <img className="filter-icon" alt="filter-icon" src="https://s3-us-west-1.amazonaws.com/homesweethomewhit/media-assets/icons/filter.svg" />
          </span>
        </div>
        <Filter />
        <div className="mobile-filter-actions">
          <button className="see-homes-btn" onClick={() => this.props.toggleMobileFilter(false)}>See Homes</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobilefilterOpen: state.mobilefilterOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMobileFilter: (state) => dispatch(toggleMobileFilter(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileFilter);
