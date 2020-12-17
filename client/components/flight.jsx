import React, { Component } from 'react';

class Flight extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }

}

export default Flight;