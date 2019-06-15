import React, { Component } from "react";

class Counter extends Component {
  state = {
    currentCount: 0
  };

  handlePlusClick = () => {
    console.log("Plus!!!");
  };

  handleMinusClick = () => {
    console.log("Minus!!!");
  };

  render() {
    return (
      <div>
        <h1>{this.state.currentCount}</h1>
        <div className="buttonContainer">
          <button onClick={this.handlePlusClick}>+</button>
          <button onClick={this.handleMinusClick}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
