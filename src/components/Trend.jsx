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
const SectionTitle = styled.div`
  padding: 10px 15px;
  margin: 10px 0 0 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #182734;
  border-bottom: 1px solid rgb(56, 68, 77);
  font-size: 20px;
  font-weight: 800;
`
const ShowMore = styled.div`
  padding: 15px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #182734;
  color: rgb(29, 161, 242);
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: #243341;
  }
`
const TrendItem = styled.li`
  background-color: #182734;
  list-style: none;
  border-bottom: 1px solid rgb(56, 68, 77);
  padding: 10px 15px;
  line-height: 1.5;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: #243341;
  }
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
    this.handleShowMore = this.handleShowMore.bind(this);
    this.state={
      count: 5
    };
  }

  handleClick(query) {
    this.props.passClick(query);
    const { history } = this.props;
    history.push({
      pathname: '/search',
      search: '?search_query=' + query
    })
  }

  handleShowMore() {
    this.setState({
      count: this.state.count+5
    })
  }

  render () {
    const { trends } = this.props;
    const { count } = this.state;
    if (trends.length === 0) {
      return (
        <LoaderWrapper>
          <Loader isLoading />
       </LoaderWrapper>
      )
    } else {
      return (
        <Wrapper>
          <SectionTitle>Trends for you</SectionTitle>
          {trends.slice(0, count).map((trend, index) => {
            return (
              <TrendItem key={index} onClick={() => this.handleClick(trend.query)}>
                <TrendPlace>Trending in San Francisco</TrendPlace>
                <TrendName>{trend.name}</TrendName>
                {trend.tweet_volume ? <TrendTweet>{number_to_thousand(trend.tweet_volume)} Tweets</TrendTweet> : null}
              </TrendItem>
            )
          })}
          <ShowMore onClick={this.handleShowMore}>Show more</ShowMore>
        </Wrapper>
      )      
    }

  }
}

Trend.defaultProps = defaultProps;

export default withRouter(Trend);