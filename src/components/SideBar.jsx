import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Trend from './Trend';

const Wrapper = styled.div `
  width: 350px;
`

const SideBar = () => {
  return (
    <Wrapper>
      <Search/>
      <Trend/>
    </Wrapper>
  );
}

export default SideBar;