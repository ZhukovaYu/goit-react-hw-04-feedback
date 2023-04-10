import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOpts from './FeedbackOpts/FeedbackOpts';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
    
  
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (
      Math.round(state.good * 100) / countTotalFeedback()
    );
  };

  return (
    <div>
      <Section title="Please, leave your feedback!">
        <FeedbackOpts
          options={state}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={Math.round(countPositiveFeedbackPercentage()
            )}
          ></Statistics>
        ) : (
          <Notification noFeedback="There is no feedback yet!"></Notification>
        )}
      </Section>
    </div>
  );
};


  export default Feedback;