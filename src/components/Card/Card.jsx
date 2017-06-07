import React from 'react';
import bed from '../../../public/media/bed.svg';
import bath from '../../../public/media/bath.svg';

require('./card.scss');

const Card = () => (
  <div className="container">
    <div className="img-container">
    </div>
    <div className="text-container">
      <div className="text-content">
        <h3 className="card-price">$2,395,000</h3>
        <h4 className="card-bed-bathroom-sqft">
          <img alt="bedroom-icon" src={bed} />
          <span className="icon-desc">4bd</span>
          <img alt="bathroom-icon" src={bath} />
          <span className="icon-desc">2ba</span>
          <span className="icon-desc">2942 sqft</span>
        </h4>
        <h5 className="card-address-street">3228 Clay St</h5>
        <h5 className="card-address-city">Presidio Heights, San Francisco, CA</h5>
      </div>
    </div>
  </div>
);

export default Card;
