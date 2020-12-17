import React, { Component } from 'react';

class Flight extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='flight'>
        <p id='text'>{this.props.carrier}       ${this.props.price}</p>
      </div>
    );
  }

}

export default Flight;