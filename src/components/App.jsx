import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = label => {
    this.setState(prevState => {
      return { [label.option]: prevState[label.option] + 1 };
    });
  };

  render() {
    return (
      <>
        <h1>Please Leave feedback</h1>
        <div className="Counter">
          <div className="Counter__controls">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handleIncrement}
            ></FeedbackOptions>
          </div>
          <h2>Statistics</h2>
          <div className="statistics">
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
          </div>
        </div>
      </>
    );
  }
}
