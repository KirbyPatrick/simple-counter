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

  handleRandomNumberClick = () => {
    this.setState(() => ({
      currentCount: Math.floor(Math.random() * 10000)
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.currentCount}</h1>
        <div className="buttonContainer">
          <button onClick={this.handlePlusClick}>+</button>
          <button onClick={this.handleRandomNumberClick}>Random Number</button>
          <button onClick={this.handleMinusClick}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
