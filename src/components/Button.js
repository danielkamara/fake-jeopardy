import React from "react";

class Button extends React.Component {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>

        <div>{this.state.count}</div>

        <button className="decrease" onClick={this.handleDecrease}>
          Decrease
        </button>

        <button className="increase" onClick={this.handleIncrease}>
          Increase
        </button>

        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Button;
