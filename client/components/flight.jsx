import React, { Component } from 'react';

class Flight extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let className = '';
    const points = this.props.points;
    const pointsPrice = (this.props.price / 1.4) * 100;

    if (points >= pointsPrice) {
      className = 'flight-green';
    } else {
      className = 'flight';
    }

    return (
      <div className={className}>
        <p id='text'>{this.props.carrier}       ${this.props.price}</p>
      </div>
    );
  }

}

export default Flight;