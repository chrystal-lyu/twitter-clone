import React from 'react';
import styled from 'styled-components';

import { number_to_thousand } from '../common/helper.js'

const Wrapper = styled.ul`
  margin: 0 0 0 40px;
  padding: 0;
`
const SectonTitle = styled.div`
  padding: 10px 15px;
  margin: 10px 0 0 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #182734;
  border-bottom: 1px solid rgb(56, 68, 77);
  font-size: 20px;
  font-weight: 800;
`
const TrendItem = styled.li`
  background-color: #182734;
  list-style: none;
  border-bottom: 1px solid rgb(56, 68, 77);
  padding: 10px 15px;
  line-height: 1.5;
`
const TrendPlace = styled.div`
  color: rgb(136, 153, 166);
  font-size: 13px;
`
const TrendName = styled.div`
  font-weight: 800;
`
const TrendTweet = styled.div`
  color: rgb(136, 153, 166);
`
class Trend extends React.Component {
  render () {
    return (
      <Wrapper>
        <SectonTitle>Trends for you</SectonTitle>
        {this.props.trends.map((trend, index) => {
          return (
            <TrendItem key={index} onClick={() => console.log('clicked', `${trend.query}`)}>
              <TrendPlace>Trending in San Francisco</TrendPlace>
              <TrendName>{trend.name}</TrendName>
              {trend.tweet_volume ? <TrendTweet>{number_to_thousand(trend.tweet_volume)} Tweets</TrendTweet> : null}
            </TrendItem>
          )
        })}
      </Wrapper>
    )
  }
}

export default Trend;