import React from 'react';
import PropTypes from 'prop-types';
import util from '../../util/util';

import Labels from '../Labels/Labels';

require('./card.scss');

const Card = ({ cardData }) => {
  const cardStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${cardData.thumb})`,
  };
  const address = util.addressFormatter(cardData.address);
  return (
    <div className="container">
      <a target="_blank" href={cardData.url} rel="noopener noreferrer">
        {cardData.label ? <Labels type={cardData.label} /> : <Labels /> }
        <div className="img-container" style={cardStyle} />
        <div className="text-container">
          <div className="text-content">
            { cardData.built ?
              <span className="card-built">Built in {cardData.built}</span>
              : null
            }
            <h3 className="card-price">{util.numberFormatter('price', cardData.price)}</h3>
            <h4 className="card-bed-bathroom-sqft">
              <img alt="bedroom-icon" src="https://s3-us-west-1.amazonaws.com/homesweethomewhit/media-assets/icons/bed.svg" />
              <span className="icon-desc">{cardData.beds}bd</span>
              <img alt="bathroom-icon" src="https://s3-us-west-1.amazonaws.com/homesweethomewhit/media-assets/icons/bath.svg" />
              <span className="icon-desc">{cardData.baths}ba</span>
              { cardData.sqft.length > 0 ? <span className="icon-desc">{util.numberFormatter('sqft', cardData.sqft)} sqft</span> : null }
            </h4>
            <h5 className="card-address">{address[0]}</h5>
            <h5 className="card-address">{address[1]}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string,
    built: PropTypes.string,
    beds: PropTypes.string,
    baths: PropTypes.string,
    sqft: PropTypes.string,
    thumb: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};

export default Card;
