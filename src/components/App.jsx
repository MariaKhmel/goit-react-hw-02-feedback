import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import Statistics from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {Notification} from './Notification/Notification'

export class App extends Component {

 state = {
  good: 0,
  neutral: 0,
  bad: 0,
}


  countTotalFeedback = () => {
   const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  }
    
  
  countPositiveFeedbackPercentage = () => {
  
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option]+1
    }))
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback} />
          </Section>
        <Section title="Statistics">

           {total> 0 ?  <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage} /> :
            <Notification message="No feedback given" />} 
        </Section>
     
        <GlobalStyle />
      </>
    );
  }
}