import React, { Component } from 'react';

import '../css/Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">Make food not _______________</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
