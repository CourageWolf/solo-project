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
        {/* <p id='text'><i className="large material-icons">flight</i><b>{this.props.carrier}</b> ${this.props.price}</p> */}
        <p><i className="large material-icons">flight</i></p>
        <p><b>{this.props.carrier}</b></p>
        <p>${this.props.price}</p>
      </div>
    );
  }

}

export default Flight;