import "./App.css";
import Button from "./components/button/Button";
import Quantity from "./components/quantity/Quantity";
import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  sumGood = () => this.setState({ good: this.state.good + 1 });
  sumNeutral = () => this.setState({ neutral: this.state.neutral + 1 });
  sumBad = () => this.setState({ bad: this.state.bad + 1 });
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Button type={"Good"} fnc={this.sumGood} />
        <Button type={"Neutral"} fnc={this.sumNeutral} />
        <Button type={"Bad"} fnc={this.sumBad} />
        <h2>Statistics</h2>
        <Quantity type={"Good"} number={this.state.good} />
        <Quantity type={"Neutral"} number={this.state.neutral} />
        <Quantity type={"Bad"} number={this.state.bad} />
      </div>
    );
  }
}

export default App;
