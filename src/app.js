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
    let counterClass;
    if(this.state.count < 0) {
      counterClass = 'negative';
    } else if(this.state.count > 0) {
      counterClass = 'positive';
    } else {
      counterClass = 'zero';
    }
    return (
      <main>
        <h4 className="candyHeader">Trick or Treat?</h4>
        <h4 className={counterClass}>{this.state.count}</h4>
        <form id="buttons">
          <fieldset id="numberButtons">
            <button id="increment" onClick={this.handleButtonClick}>Treat</button>
            <button id="decrement" onClick={this.handleDecrement}>Trick</button>
          </fieldset>
        </form>
      </main>
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
