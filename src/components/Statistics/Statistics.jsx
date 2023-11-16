const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive Feedback: {positivePercentage}%</span>
  </div>
);
export default Statistic;
