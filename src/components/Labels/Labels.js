import React from 'react';
import PropTypes from 'prop-types';

require('./labels.scss');

const Labels = ({ type }) => <div className={type ? `labels-container-${type}` : 'labels-container'}></div>;

Labels.propTypes = {
  type: PropTypes.string.isRequired,
};

Labels.defaultProps = {
  type: '',
};

export default Labels;

