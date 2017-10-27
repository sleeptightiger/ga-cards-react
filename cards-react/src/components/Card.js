import React, { Component } from 'react';

import '../css/Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    }
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(e) {
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }

  render() {

    let title = this.state.isFlipped ? this.props.title + ' ________' : '';

    return (
      <div className="Card" onClick={this.flipCard}>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">{title}</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
