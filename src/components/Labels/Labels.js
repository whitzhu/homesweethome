import React from 'react';

require('./labels.scss');

const Labels = ({ type }) => <div className={type ? `labels-container-${type}` : 'labels-container'}></div>;

export default Labels;

