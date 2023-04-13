import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={s.list}>
      <li className={s.item}> Good:    {good}</li>
      <li className={s.item}> Neutral: {neutral}</li>
      <li className={s.item}> Bad: {bad}</li>
      <li className={s.item}> Total: {total}</li>
      <li className={s.positive}> PositiveFeedback : {positivePercentage}%</li>
    </ul>
  );
};