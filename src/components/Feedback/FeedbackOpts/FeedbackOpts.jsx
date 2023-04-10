// import PropTypes from 'prop-types';
import React from 'react';
import s from './FeedbackOpts.module.css';

const FeedbackOpts = ({ onLeaveFeedback, options }) => (
  <div id="FeedbackControls" className={s.controls}>
    {Object.keys(options).map(key => (
      <button
        onClick={onLeaveFeedback}
        id={key}
        type="submit"
        className={s.feedbackButton}
        key={key}
      >
        {key}
      </button>
    ))}
  </div>
);

// FeedbackOpts.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
//   options: PropTypes.exact({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default FeedbackOpts;