import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Trend from './Trend';

const Wrapper = styled.div `
  /* border: 1px solid lightblue; */
  width: 350px;
`

function SideBar () {
  return (
    <Wrapper>
      <Search/>
      <Trend/>
    </Wrapper>
  );
}

export default SideBar;