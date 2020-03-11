import React from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';

const Wrapper = styled.div `
  /* padding: 0 20px; */
`
const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  list-style-type: none;
  padding: 0;
`

class FeedList extends React.Component {
  render () {
    if (this.props.data.length === 0) {
      return (
        <Wrapper>
            Be the first one to tweet!
        </Wrapper>
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
                  name={item.user.screen_name}
                  handle={item.user.handle}
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