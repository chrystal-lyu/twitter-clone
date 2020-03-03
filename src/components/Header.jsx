import React from 'react';
import styled from 'styled-components';

import logo from '../media/logo.svg';

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 275px;
`

const Logo = styled.img `
  width: 50px;
  padding: 0 20px;
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
  transition: color .2s;

  &:hover {
    background-color: #20303D;
    color: rgb(29, 161, 242);
  }
`

function Header () {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo"/>
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