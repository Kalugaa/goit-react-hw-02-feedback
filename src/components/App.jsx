import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistic from './Statistics/Statistics';

const { Component } = require('react');

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statisticIncrease = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return ((this.state.good * 100) / totalFeedback).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const feedbackOptions = ['good', 'neutral', 'bad'];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
          marginLeft: '30px',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.statisticIncrease}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistic'}>
          {total === 0 ? (
            <Notification message={'There is no feedback'}></Notification>
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

/* <h2>Please leave feedback</h2>
        <div
          style={{
            display: 'flex',
            gap: '5px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          <button onClick={this.statisticIncrease} name="good">
            Good
          </button>
          <button onClick={this.statisticIncrease} name="neutral">
            Neutral
          </button>
          <button onClick={this.statisticIncrease} name="bad">
            Bad
          </button>
        </div>
        <h2>Statistic</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>
            Positive Feedback: {this.countPositiveFeedbackPercentage()}%
          </span>
        </div> */
