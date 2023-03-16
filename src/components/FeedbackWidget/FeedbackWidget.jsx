import React, { Component } from 'react';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <div className="statistics">
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;
