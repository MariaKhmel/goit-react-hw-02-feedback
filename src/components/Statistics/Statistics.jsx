
import { Component } from "react";
import { Box } from "components/Box"
import { StatisticsItem } from './Statistics.styled'
import PropTypes from 'prop-types';


export class Statistics extends Component {
    state = {} 
    
    render() { 
        const { good, neutral, bad,total, positivePercentage } = this.props;
       
        return (
          <ul>
                <StatisticsItem>
                  Good: {good}
                </StatisticsItem>
                 <StatisticsItem>
                  Neutral: {neutral}
                </StatisticsItem>
                 <StatisticsItem>
                  Bad: {bad}
                </StatisticsItem>
                <StatisticsItem>
                  Total: {total}
                </StatisticsItem>
                <StatisticsItem>
                  Positive feedback:{ positivePercentage.toFixed(0)}%
                </StatisticsItem>
            </ul>
        );
    }
}
 
Statistics.propTypes = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.number.isRequired,
  positivePercentage:PropTypes.number.isRequired,
}

export default Statistics;