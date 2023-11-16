const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '5px',
    }}
  >
    {options.map(option => (
      <button
        style={{
          textTransform: 'capitalize',
        }}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
