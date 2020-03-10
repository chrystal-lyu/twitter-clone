import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Wrapper = styled.div `
  /* border: 1px solid lightblue; */
  width: 350px;
`

function SideBar () {
  return (
    <Wrapper>
      <Search/>
    </Wrapper>
  );
}

export default SideBar;