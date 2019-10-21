import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.counter = {
      count: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: count + 1 });
  };

  handleDecrement = e => {
    e.preventDefault();
    this.setState({ counter: count - 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.handleButtonClick}>Increase</button>
        <button onClick={this.handleDecrement}>Decrease</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
