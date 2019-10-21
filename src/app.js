import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState(state => {
      return {
        count: state.count + 1,
      };
    });
  };

  handleDecrement = e => {
    e.preventDefault();
    this.setState(state => {
      return {
        count: state.count - 1,
      };
    });
  };

  render() {
    let counterClass = this.state.count ? 'not-0' : 'zero';
    return (
      <div>
        <h4 className={counterClass}>{this.state.count}</h4>
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
