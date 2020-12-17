import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Flight from './components/flight.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      flights: [],
    };
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
    .then(quote => {
      const newFlights = this.state.flights;
      newFlights.push(quote);
      this.setState({flights: newFlights});
      return console.log(this.state.flights[0]['MinPrice']);
    });
  }

  render() {

    const flights = [];
    for (let i = 0; i < this.state.flights.length; i++) {
      flights.push(<Flight key={i} text={this.state.flights[i]['MinPrice']}/>);
    }

    return (
      <div>
        <form id="form" onSubmit={this.handleClick}>
          <label>From</label>
          <input name="from" />

          <label>To</label>
          <input name="to" />

          <label>Date</label>
          <input name="date" />

          <button>Search</button>
        </form>

        <div id='flights'>
          {flights}
        </div>

      </div>
    );
  }
}

export default App;
