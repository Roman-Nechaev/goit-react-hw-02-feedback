import React, { Component } from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option, index) => (
      <button
        key={index}
        type="button"
        onClick={() => onLeaveFeedback({ option })}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
