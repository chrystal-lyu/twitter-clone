import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  padding: 0 20px;
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
          <ul>
            {this.props.data.map((item) => {
              return (
                <li key={item.id}>{item.value}</li>
              )
            })}
          </ul>
        </Wrapper>
      );
    }
  }
}

export default FeedList;