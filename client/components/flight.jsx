import React, { Component } from 'react';

class Flight extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let className = '';
    const points = this.props.points;

    if (points > 100) {
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