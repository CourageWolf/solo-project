import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  handleClick(e) {
    e.preventDefault();
    const from = e.target[0].value;
    const to = '-' + e.target[1].value;
    const date = '/' + e.target[2].value;

    fetch('/api/query/' + from + to + date)
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
