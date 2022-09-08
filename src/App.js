import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: "",
    operator: ""
  };

  handleChange1 = (event) => {
    this.setState({ n1: Number(event.target.value) });
  };

  handleChange2 = (event) => {
    this.setState({ n2: Number(event.target.value) });
  };
  add = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: this.state.n1 + this.state.n2, operator: "+" });
  };
  dim = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: this.state.n1 - this.state.n2, operator: "-" });
  };
  mult = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: this.state.n1 * this.state.n2, operator: "x" });
  };
  div = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: this.state.n1 / this.state.n2, operator: "/" });
  };
  clear = () => {
    this.setState({ n1: "", n2: "", res: "" });
  };

  render() {
    return (
      <div>
        <h1>Calc App</h1>
        <input onChange={this.handleChange1} />
        <input onChange={this.handleChange2} />
        <button onClick={this.div}>/</button>
        <button onClick={this.mult}>x</button>
        <button onClick={this.dim}>-</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.clear}>C</button>
        <h2>{this.state.res}</h2>
      </div>
    );
  }
}

export default App;
