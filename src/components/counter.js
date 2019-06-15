import React, { Component } from "react";

class Counter extends Component {
  state = {
    currentCount: 0
  };

  handlePlusClick = () => {
    this.setState(({ currentCount }) => ({
      currentCount: currentCount + 1
    }));
  };

  handleMinusClick = () => {
    this.setState(({ currentCount }) => ({
      currentCount: currentCount - 1
    }));
  };

  handleDoubleClick = () => {
    this.setState(({ currentCount }) => ({
      currentCount: currentCount * 2
    }));
  };

  handleHalveClick = () => {
    this.setState(({ currentCount }) => ({
      currentCount: currentCount / 2
    }));
  };

  handleRandomNumberClick = () => {
    this.setState(() => ({
      currentCount: Math.floor(Math.random() * 10000)
    }));
  };

  handleReset = () => {
    this.setState(() => ({
      currentCount: 0
    }));
  };

  render() {
    return (
      <div>
        <h1 className="count">{this.state.currentCount}</h1>
        <div className="buttonContainer">
          <button onClick={this.handlePlusClick}>+</button>
          <button onClick={this.handleDoubleClick}>Double</button>
          <button onClick={this.handleRandomNumberClick}>Random Number</button>
          <button onClick={this.handleHalveClick}>Halve</button>
          <button onClick={this.handleMinusClick}>-</button>
        </div>
        <div>
          <button className="resetButton" onClick={this.handleReset}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
