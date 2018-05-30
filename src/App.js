import React, { Component } from 'react';
import { mostStarredOfAllTime } from './github';

class App extends Component {
  state = {
    mostStarredOfAllTime: [],
  };

  async componentDidMount() {
    this.setState({
      mostStarredOfAllTime: await mostStarredOfAllTime(),
    });
  }

  _renderRepo(repo) {
    return (
      <div>
        <h5>{repo.name}</h5>
        <p>{repo.description}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>GitHub Discover</h2>
        <p>{this.state.mostStarredOfAllTime.map(this._renderRepo)}</p>
      </div>
    );
  }
}

export default App;
