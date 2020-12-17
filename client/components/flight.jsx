import React, { Component } from 'react';

class Flight extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    // console.log(this.props.flight);

    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }

}

export default Flight;