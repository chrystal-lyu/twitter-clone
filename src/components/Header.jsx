import React from 'react';
import styled from 'styled-components';

import  { ReactComponent as AppLogo } from '../media/logo.svg';
import  { ReactComponent as HomeIconSvg } from '../media/header_home.svg';
import  { ReactComponent as ExploreIconSvg } from '../media/header_explore.svg';
import  { ReactComponent as NotifIconSvg } from '../media/header_notification.svg';
import  { ReactComponent as MessageIconSvg } from '../media/header_message.svg';
import  { ReactComponent as BookmarkIconSvg } from '../media/header_bookmark.svg';
import  { ReactComponent as ListsIconSvg } from '../media/header_lists.svg';
import  { ReactComponent as MoreIconSvg } from '../media/header_more.svg';

const Wrapper = styled.div `
  position: relative;
  width: 260px;
`
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  position: fixed;
  top: 0;
`
const Icon = styled(AppLogo) `
  fill: white;
`
const HomeIcon = styled(HomeIconSvg)`
  fill: white;
`
const ExploreIcon = styled(ExploreIconSvg)`
  fill: white;
`
const NotifIcon = styled(NotifIconSvg)`
  fill: white;
`
const MessageIcon = styled(MessageIconSvg)`
  fill: white;
`
const BookmarkIcon = styled(BookmarkIconSvg)`
  fill: white;
`
const ListsIcon = styled(ListsIconSvg)`
  fill: white;
`
const MoreIcon = styled(MoreIconSvg)`
  fill: white;
`
const MenuItemContainer = styled.div`
  display: flex;
  flex-direction; row;
  justify-content: flex-start;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 999px;
  transition: background-color .2s;
  transition: all .2s;

  &:hover {
    background-color: #20303D;
    color: rgb(29, 161, 242);
  }
`
const MenuItem = styled.a `
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: fit-content;
  margin-left: 20px;
`

function Header () {
  return (
    <Wrapper>
      <MenuList>
        <MenuItemContainer>
          <Icon/>
          <MenuItem href="/"></MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <HomeIcon/>
          <MenuItem href="/">Home</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <ExploreIcon/>
          <MenuItem href="/">Explore</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <NotifIcon/>
          <MenuItem href="/">Notifications</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <MessageIcon/>
          <MenuItem href="/">Messages</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <BookmarkIcon/>
          <MenuItem href="/">Bookmarks</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <ListsIcon/>
          <MenuItem href="/">Lists</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <ListsIcon/>
          <MenuItem href="/">Profile</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <MoreIcon/>
          <MenuItem href="/">More</MenuItem>
        </MenuItemContainer>
      </MenuList>
    </Wrapper>
  );
}

export default Header;