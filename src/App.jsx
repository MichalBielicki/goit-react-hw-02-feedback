import "./App.css";
import Statistics from "./components/statistics/Statistics";
import FeedbackOptions from "./components/feedback-options/FeedbackOptions";
import Section from "./components/section/Section";
import NotificationMessage from "./components/notification/Notification";
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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = total ? Math.round((good / total) * 100) : 0;
    return percentage;
  };
  onFeedback = ({ target }) => {
    const type = target.dataset.action;
    this.setState((state) => {
      return { [type]: state[type] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ["good", "neutral", "bad"];
    const totalFedbacks = this.countTotalFeedback();
    const goodFeedbacks = this.countFeedbackPercentage();

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onFeedback={this.onFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title={"Statistics"}>
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFedbacks}
              percentageOfGoodFeedbacks={goodFeedbacks}
            />
          ) : (
            <NotificationMessage message="There is no one feedback yet" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
