import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Flight from './components/flight.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      // flights: [],
      flights: {},
      points: 0,
    };
  }

  componentDidMount() {

  }

  handleClick(e) {
    e.preventDefault();
    const from = e.target[0].value;
    const to = '-' + e.target[1].value;
    const date = '/' + e.target[2].value;
    const points = e.target[3].value;

    fetch('/api/query/' + from + to + date)
    .then(response => response.json())
    .then(quotes => {
      // const newFlights = this.state.flights;
      // newFlights.push(...quotes);
      const newFlights = quotes;
      this.setState({flights: newFlights, points: points});
      return console.log([this.state.flights, this.state.points]);
    });
  }

  render() {
    const flights = [];
    const keys = Object.keys(this.state.flights);
    for (let i = 0; i < keys.length; i++) {
      flights.push(<Flight key={i} price={keys[i]} carrier={this.state.flights[keys[i]]} points={this.state.points}/>);
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

          <label>Points</label>
          <input name='points' />

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
