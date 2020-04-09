import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTimeline, fetchHomeTimeline } from '../redux/actions/operations'

import FeedItem from './FeedItem';
import Loader from './Loader';

const Wrapper = styled.div `
  /* padding: 0 20px; */
`
const LoaderWrapper = styled.div `
  margin-top: 20px;
`
const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

class FeedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { dispatch } = this.props;
    if (localStorage.isAuthenticated) {
      dispatch(fetchHomeTimeline());
    } else {
      dispatch(fetchTimeline());
    }
  }

  render () {
    const { timeline } = this.props;
    if (timeline.length === 0) {
      return (
        <LoaderWrapper>
            <Loader isLoading />
        </LoaderWrapper>
      )
    } else {
      return (
        <Wrapper>
          <List>
            {timeline.map((item) => {
              return (
                <FeedItem
                  key={item.id}
                  body={item.body}
                  entities={item.entities}
                  avatarImg={item.avatarImg}
                  name={item.name}
                  handle={item.handle}
                  time={item.time}
                  favCount={item.favCount}
                  rtCount={item.rtCount}
                />
              )
            })}
          </List>
        </Wrapper>
      );
    }
  }
}


const mapStateToProps = state => {
  return { 
    timeline: state.timelineReducer.timeline 
  };
};

export default connect(mapStateToProps)(FeedList);
