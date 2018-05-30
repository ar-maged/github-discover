import React, { Component } from 'react';
import { mostStarred } from './github';

class App extends Component {
  state = {
    mostStarred: [],
  };

  async componentDidMount() {
    this.setState({
      mostStarred: await mostStarred(),
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
        <p>{this.state.mostStarred.map(this._renderRepo)}</p>
      </div>
    );
  }
}

export default App;
