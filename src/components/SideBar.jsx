import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  border: 1px solid lightblue;
  width: 350px;
`

function SideBar () {
  return (
    <Wrapper>SideBar Column</Wrapper>
  );
}

export default SideBar;