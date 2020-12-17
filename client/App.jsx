import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api')
      .then(response => response.json())
      .then(quote => console.log(quote));
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    const val = e.target[0].value;
    fetch('/api/query/' + val)
    .then(response => response.json())
    .then(quote => console.log(quote));
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleClick}>
          <label>From</label>
          <input name="from" />

          <label>To</label>
          <input name="to" />

          <label>Date</label>
          <input name="date" />

          <button>Search</button>
        </form>
      </div>

    );
  }
}

export default App;
