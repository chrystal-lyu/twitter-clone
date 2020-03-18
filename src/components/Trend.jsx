import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
`

class Trend extends React.Component {
  render () {
    return (
      <Wrapper>trend near you</Wrapper>
    )
  }
}

export default Trend;