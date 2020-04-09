import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchProfileTimeline } from '../redux/actions/operations'

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
const Message = styled.div`
  font-size: 20px;
  font-weight: 800;
  width: fit-content;
  margin: 50px auto;
`

class Profile extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (localStorage.isAuthenticated) {
      dispatch(fetchProfileTimeline());
    }
  }
  render () {
    const { profile_timeline } = this.props;
    if (!localStorage.isAuthenticated) {
      return (
        <Wrapper>
          <Message>Sign in to see your tweets</Message>
        </Wrapper>
      )
    } else if (!profile_timeline || profile_timeline.length === 0) {
      return (
        <Wrapper>
          <LoaderWrapper>
            <Loader isLoading />
          </LoaderWrapper>
        </Wrapper>
      )
    } else {
      return (
        <Wrapper>
          <List>
            {profile_timeline.map((item) => {
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
    profile_timeline: state.timelineReducer.profile_timeline 
  };
};

export default connect(mapStateToProps)(Profile);