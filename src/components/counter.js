import React, { Component } from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #7b4397   30%, #dc2430 90%)",
  color: "white"
});

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
          <MyButton onClick={this.handlePlusClick}>+</MyButton>
          <MyButton onClick={this.handleDoubleClick}>Double</MyButton>
          <MyButton onClick={this.handleRandomNumberClick}>
            Random Number
          </MyButton>
          <MyButton onClick={this.handleHalveClick}>Halve</MyButton>
          <MyButton onClick={this.handleMinusClick}>-</MyButton>
        </div>
        <div>
          <MyButton className="resetButton" onClick={this.handleReset}>
            RESET
          </MyButton>
        </div>
      </div>
    );
  }
}

export default Counter;
