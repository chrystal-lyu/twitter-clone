import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
  width: 275px;
`

const MenuItem = styled.a `
  text-decoration: none;
  color: white;
`

function Header () {
  return (
    <Wrapper>
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