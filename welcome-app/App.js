import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '', 
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleClick = event => {
    this.setState({
      displayName: this.state.name
    });
  };

  render() {
    return (
      <>
        <h1>Welcome to the app.</h1>
        <p>Hi there, {this.state.displayName || "We haven't been introduced"}</p>
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Update name</button>
      </>
    );
  }
}

export default App;