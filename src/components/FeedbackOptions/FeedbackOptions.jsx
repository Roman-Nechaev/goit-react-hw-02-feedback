import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
