import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotalFeedback();
  };

  hendleClick = (e) => {
    const { name } = e.target;
    // console.log(name);
    this.setState((state) => ({ [name]: state[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = Math.round(
      this.countPositiveFeedbackPercentage()
    );
    const ObjKey = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={ObjKey}
            onLeaveFeedback={this.hendleClick}
          ></FeedbackOptions>
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            ></Statistics>
          </Section>
        )}
      </div>
    );
  }
}

export default Feedback;
