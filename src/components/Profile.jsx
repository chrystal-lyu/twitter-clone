import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTimeline, fetchUserTimeline } from '../redux/actions/operations'

import FeedItem from './FeedItem';
import Loader from './Loader';

const Wrapper = styled.div `
  border-right: 1px solid rgb(56, 68, 77);
  border-left: 1px solid rgb(56, 68, 77);
  width: 600px;
`
const LoaderWrapper = styled.div `
  margin-top: 20px;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`
class Profile extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (localStorage.isAuthenticated) {
      dispatch(fetchUserTimeline());
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

export default connect(mapStateToProps)(Profile);