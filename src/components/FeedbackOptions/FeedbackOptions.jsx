import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div id="FeedbackControls" className={s.controls}>
      {options.map(option => (
        <button
          type="button"
          className={s.feedbackButton}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
      </div>
    </>
  );
};