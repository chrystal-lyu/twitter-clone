import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Loader from './Loader';
import { number_to_thousand } from '../util'

const Wrapper = styled.ul`
  margin: 0 0 0 40px;
  padding: 0;
`
const LoaderWrapper = styled.div`
  background-color: #182734;
  padding: 15px;
  margin: 10px 0 0 40px;
  justify-content: center;
  border-radius: 20px;
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
  cursor: pointer;
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

const defaultProps = {
  trends: []
}
class Trend extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={};
  }

  handleClick(query) {
    this.props.passClick(query);
    const { history } = this.props;
    history.push({
      pathname: '/search',
      search: '?search_query=' + query
    })
  }

  render () {
    const { trends } = this.props;
    if (trends.length === 0) {
      return (
        <LoaderWrapper>
          <Loader isLoading />
       </LoaderWrapper>
      )
    } else {
      return (
        <Wrapper>
          <SectonTitle>Trends for you</SectonTitle>
          {trends.map((trend, index) => {
            return (
              <TrendItem key={index} onClick={() => this.handleClick(trend.query)}>
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
}

Trend.defaultProps = defaultProps;

export default withRouter(Trend);