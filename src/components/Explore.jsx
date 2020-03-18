import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  border-right: 1px solid rgb(56, 68, 77);
  border-left: 1px solid rgb(56, 68, 77);
  width: 600px;
`
class Explore extends React.Component {
  render () {
    return (
      <Wrapper>this is explore page</Wrapper>
    )
  }
}

export default Explore;