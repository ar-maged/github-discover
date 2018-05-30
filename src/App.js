import React, { Component } from 'react';
import { mostStarredOfAllTime } from './github';

class App extends Component {
  async componentDidMount() {
    console.log(await mostStarredOfAllTime());
  }

  render() {
    return <h1>GitHub Discover</h1>;
  }
}

export default App;
