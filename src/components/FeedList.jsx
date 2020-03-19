import React from 'react';
import styled from 'styled-components';
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
  render () {
    if (this.props.data.length === 0) {
      return (
        <LoaderWrapper>
            <Loader isLoading />
        </LoaderWrapper>
      )
    } else {
      return (
        <Wrapper>
          <List>
            {this.props.data.map((item) => {
              return (
                <FeedItem
                  key={item.id}
                  body={item.text}
                  entities={item.entities}
                  avatarImg={item.user.profile_image_url}
                  name={item.user.name}
                  handle={item.user.screen_name}
                  time={item.created_at}
                  favCount={item.favorite_count}
                  rtCount={item.retweet_count}
                />
              )
            })}
          </List>
        </Wrapper>
      );
    }
  }
}

export default FeedList;