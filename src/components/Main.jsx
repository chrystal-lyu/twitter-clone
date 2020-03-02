import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  border: 1px solid red;
  width: 600px;
`

function Main () {
  return (
    <Wrapper>Main Column</Wrapper>
  );
}

export default Main;