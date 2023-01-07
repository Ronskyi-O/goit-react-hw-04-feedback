import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section'
import { Notification } from '../Notification/Notification'
import { Container } from './App.styled';


export function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const onClickIncrementGoodFeedback = () => {
    setGood(prevState => prevState + 1);
  };

  const onClickIncrementNeutralFeedback = () => {
    setNeutral(prevState => prevState + 1);
  };

  const onClickIncrementBadFeedback = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100);
  }

  return (
    <Container>
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onIncrementGoodFeedback={onClickIncrementGoodFeedback}
            onIncrementNeutralFeedback={onClickIncrementNeutralFeedback}
            onIncrementBadFeedback={onClickIncrementBadFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? <Notification message="There is no feedback" /> : <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />}
        </Section>
      </div>
    </Container>
  );
}




