import React from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';

const Wrapper = styled.div `
  /* padding: 0 20px; */
`
const LoaderWrapper = styled.div `
  margin-top: 20px;
`
const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid rgb(29,161,242);
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
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
            <Loader/>
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