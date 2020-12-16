import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // uncomment the below for proxy challenge
    fetch('/api')
      .then(response => response.json())
      .then(quote => console.log(quote));
  }

  render() {
    return (
      <div>
        <p>What's gucci!</p>
      </div>
    );
  }

}

export default App;
