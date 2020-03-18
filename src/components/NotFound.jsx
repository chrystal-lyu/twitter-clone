import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  border-right: 1px solid rgb(56, 68, 77);
  border-left: 1px solid rgb(56, 68, 77);
  width: 600px;
`
const Message = styled.div`
  font-size: 20px;
  font-weight: 800;
  width: fit-content;
  margin: 50px auto;
`
class NotFound extends React.Component {
  render () {
    return (
      <Wrapper>
        <Message>Page Does not Exist</Message>
      </Wrapper>
    )
  }
}

export default NotFound;