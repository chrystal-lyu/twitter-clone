import React from 'react';
import styled from 'styled-components';

import  { ReactComponent as AppLogo } from '../media/logo.svg';

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 275px;
  padding: 20px;
`

const Icon = styled(AppLogo) `
  fill: white;
  width: 30%;
  height: 30%;
`

const MenuItem = styled.a `
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 10px;
  width: fit-content;
  border-radius: 999px;
  transition: background-color .2s;
  transition: all .2s;

  &:hover {
    background-color: #20303D;
    color: rgb(29, 161, 242);
  }
`

function Header () {
  return (
    <Wrapper>
      <MenuItem href="/"><Icon/></MenuItem>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/">Explore</MenuItem>
      <MenuItem href="/">Notifications</MenuItem>
      <MenuItem href="/">Messages</MenuItem>
      <MenuItem href="/">Bookmarks</MenuItem>
      <MenuItem href="/">Lists</MenuItem>
      <MenuItem href="/">Profile</MenuItem>
      <MenuItem href="/">More</MenuItem>
    </Wrapper>
  );
}

export default Header;